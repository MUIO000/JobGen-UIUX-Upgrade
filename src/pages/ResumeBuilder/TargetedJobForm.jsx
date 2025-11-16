import { useState } from 'react'

const TargetedJobForm = ({ data, onChange }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [showJobList, setShowJobList] = useState(false)

  // 示例已保存的工作
  const savedJobs = [
    { id: 1, title: 'Senior Software Engineer', company: 'Google', location: 'Sydney, AU', saved: '2 days ago' },
    { id: 2, title: 'Full Stack Developer', company: 'Atlassian', location: 'Melbourne, AU', saved: '5 days ago' },
    { id: 3, title: 'Frontend Engineer', company: 'Canva', location: 'Sydney, AU', saved: '1 week ago' }
  ]

  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
            <span className="text-2xl">🎯</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              Step 2: Targeted Job
              <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-lg">
                ⚠️ Required
              </span>
            </h2>
            <p className="text-sm text-slate-600">Link your resume to a specific job posting</p>
          </div>
        </div>
      </div>

      {/* 警告提示 */}
      <div className="bg-red-50 border-2 border-red-500 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <h5 className="text-sm font-semibold text-red-900 mb-1">This step is required</h5>
            <p className="text-xs text-red-700 leading-relaxed">
              Linking to a job posting helps us tailor your resume and improves your match score by 25%
            </p>
          </div>
        </div>
      </div>

      {/* 链接到工作 */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-900 mb-4">🎯 Link to a Job Posting</h3>
        
        <div className="space-y-4">
          {/* URL 输入 */}
          <div>
            <label className="block mb-2">
              <span className="text-xs font-semibold text-slate-700">Paste Job URL or Description</span>
            </label>
            <textarea
              placeholder="Paste the job posting URL or full job description here..."
              className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent min-h-[100px]"
            />
          </div>

          {/* 操作按钮 */}
          <div className="flex gap-3">
            <button className="flex-1 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              AI Extract
            </button>
            <button className="flex-1 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Manual Entry
            </button>
          </div>
        </div>
      </div>

      {/* 或者从已保存的工作中选择 */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-slate-900">Or search from your saved jobs:</h3>
          <button 
            onClick={() => setShowJobList(!showJobList)}
            className="text-xs text-indigo-600 hover:text-indigo-700 font-semibold"
          >
            {showJobList ? 'Hide' : 'Show'} Jobs
          </button>
        </div>

        {/* 搜索框 */}
        <div className="relative mb-4">
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="🔍 Search saved jobs..."
            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* 工作列表 */}
        {showJobList && (
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {savedJobs.map((job) => (
              <button
                key={job.id}
                className="w-full p-4 bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-300 rounded-xl text-left transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-slate-900 mb-1">{job.title}</h4>
                    <p className="text-xs text-slate-600">{job.company} • {job.location}</p>
                    <p className="text-xs text-slate-500 mt-1">Saved {job.saved}</p>
                  </div>
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* 创建新工作 */}
        <button className="w-full mt-3 px-4 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Create New Job
        </button>
      </div>

      {/* 提示信息 */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h5 className="text-sm font-semibold text-blue-900 mb-1">💡 Why link to a job?</h5>
            <ul className="text-xs text-blue-700 leading-relaxed space-y-1">
              <li>• AI can extract key requirements and optimize your resume</li>
              <li>• Automatic keyword matching improves ATS score</li>
              <li>• Get personalized suggestions for each section</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 自动保存提示 */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>⚙️ Auto-saved 2 mins ago</span>
        </div>
      </div>

      {/* 底部按钮 */}
      <div className="flex justify-between gap-3 pt-4 border-t border-slate-200">
        <button className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-semibold transition-colors flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Previous
        </button>
        <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-colors flex items-center gap-2">
          Next: Personal Details
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default TargetedJobForm


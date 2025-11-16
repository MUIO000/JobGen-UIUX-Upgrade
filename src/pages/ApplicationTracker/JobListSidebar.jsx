import { useState } from 'react'

// 职位列表侧边栏组件
const JobListSidebar = ({ jobs, activeJobId, onJobSelect, isCollapsed, onToggleCollapse }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (isCollapsed) {
    return (
      <div className="w-12 bg-white border-r border-slate-200 flex flex-col items-center py-4">
        <button 
          onClick={onToggleCollapse}
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    )
  }

  return (
    <div className="w-80 bg-white border-r border-slate-200 flex flex-col h-full">
      {/* 头部 */}
      <div className="p-4 border-b border-slate-200">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold text-slate-900">My Applications</h2>
          <button 
            onClick={onToggleCollapse}
            className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <p className="text-xs text-slate-600">{jobs.length} jobs tracked</p>
      </div>
      
      {/* 搜索框 */}
      <div className="p-4 border-b border-slate-200">
        <div className="relative">
          <input 
            type="text"
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <svg className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      {/* Job List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {filteredJobs.map(job => {
          const statusColors = {
            saved: 'bg-red-100 text-red-700',
            applied: 'bg-amber-100 text-amber-700',
            interviewing: 'bg-green-100 text-green-700',
            offer: 'bg-purple-100 text-purple-700'
          }
          
          return (
            <div 
              key={job.id}
              onClick={() => onJobSelect(job.id)}
              className={`p-3 rounded-xl border transition-all cursor-pointer ${
                activeJobId === job.id 
                  ? 'bg-indigo-50 border-indigo-300 shadow-sm' 
                  : 'border-slate-200 hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              <div className="flex items-start justify-between mb-1">
                <h4 className="text-sm font-semibold text-slate-900 line-clamp-2 flex-1">
                  {job.title}
                </h4>
              </div>
              <p className="text-xs text-slate-600 mb-2">{job.company}</p>
              <div className="flex items-center justify-between">
                <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[job.status]}`}>
                  {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                </span>
                <p className="text-xs text-slate-500">{job.date}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default JobListSidebar


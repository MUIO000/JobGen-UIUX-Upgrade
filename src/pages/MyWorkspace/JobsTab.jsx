import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const JobsTab = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('applied')

  // 示例数据
  const jobs = [
    {
      id: 1,
      jobTitle: 'Software Engineer - Core Services',
      company: 'Cuscal Limited',
      status: 'Saved',
      resume: 'Open',
      salaryMax: 'N/A',
      saved: 'Oct 8, 2025',
      applied: 'Nov 13, 2025',
      followUp: '',
      aiApplied: '',
      excitement: 3
    },
    {
      id: 2,
      jobTitle: 'Java API Spring Boot Developer',
      company: 'Infosys',
      status: 'Applied',
      resume: 'No Resume',
      salaryMax: 'AUD 90,243-98,861 (Annual Gross)',
      saved: 'Oct 8, 2025',
      applied: '',
      followUp: '',
      aiApplied: '',
      excitement: 3
    },
    {
      id: 3,
      jobTitle: 'Full Stack Developer',
      company: 'InfoTrack AU',
      status: 'Interviewing',
      resume: 'Open',
      salaryMax: 'N/A',
      saved: 'Sep 29, 2025',
      applied: 'Sep 29, 2025',
      followUp: '',
      aiApplied: '',
      excitement: 3
    },
    {
      id: 4,
      jobTitle: 'Staff Software Engineer - Full Stack',
      company: 'Commonwealth Bank',
      status: 'Offer',
      resume: 'No Resume',
      salaryMax: 'N/A',
      saved: 'Sep 29, 2025',
      applied: '',
      followUp: '',
      aiApplied: '',
      excitement: 3
    },
    {
      id: 5,
      jobTitle: 'Full Stack Engineer',
      company: 'WBS Technology',
      status: 'Saved',
      resume: 'No Resume',
      salaryMax: 'N/A',
      saved: 'Sep 29, 2025',
      applied: '',
      followUp: '',
      aiApplied: '',
      excitement: 3
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Saved':
        return 'bg-slate-100 text-slate-700'
      case 'Applied':
        return 'bg-blue-100 text-blue-700'
      case 'Interviewing':
        return 'bg-green-100 text-green-700'
      case 'Offer':
        return 'bg-purple-100 text-purple-700'
      default:
        return 'bg-slate-100 text-slate-600'
    }
  }

  const renderStars = (count) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${star <= count ? 'text-yellow-400 fill-current' : 'text-slate-300'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* 提示和搜索栏 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-600">
          <span className="text-2xl">💼</span>
          <p className="text-sm font-medium">Click a job to view or edit details.</p>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-semibold underline">
            Advance Search
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="w-64 pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="applied">Sort by Applied</option>
            <option value="saved">Sort by Saved</option>
            <option value="status">Sort by Status</option>
            <option value="excitement">Sort by Excitement</option>
          </select>
        </div>
      </div>

      {/* 表格 */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Job Title</th>
              <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Company</th>
              <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Resume</th>
              <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Salary max</th>
              <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Saved</th>
              <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Applied</th>
              <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Follow up</th>
              <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">AI Applied</th>
              <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Excitement</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {jobs.map((job) => (
              <tr
                key={job.id}
                className="hover:bg-slate-50 transition-colors cursor-pointer"
                onClick={() => navigate('/jobs-tracker')}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-sm text-slate-900 font-medium underline">{job.jobTitle}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">{job.company}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(job.status)}`}>
                    {job.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-sm font-medium ${job.resume === 'Open' ? 'text-blue-600 underline' : 'text-slate-500'}`}>
                    {job.resume}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">{job.salaryMax}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{job.saved}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{job.applied}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{job.followUp}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{job.aiApplied}</td>
                <td className="px-6 py-4">
                  {renderStars(job.excitement)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 操作按钮行 */}
      <div className="flex items-center justify-end gap-2">
        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors" title="Archive">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
        </button>
        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors" title="Edit">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>
        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors" title="Delete">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default JobsTab


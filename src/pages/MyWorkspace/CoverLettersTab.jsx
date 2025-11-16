import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CoverLettersTab = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('modified')

  // 示例数据
  const coverLetters = [
    {
      id: 1,
      name: 'Lucas-Software Engineer - Core Services-Cuscal Limited-CoverLetter',
      linkedJobTitle: 'Software Engineer - Core Services',
      companyName: 'Cuscal Limited',
      hrName: '',
      linkedJobStatus: 'Saved',
      createdOn: 'Nov 13, 2025',
      modifiedOn: 'Nov 13, 2025',
      appliedOn: 'Nov 13, 2025'
    },
    {
      id: 2,
      name: 'Lucas-Full Stack Developer-InfoTrack AU-CoverLetter',
      linkedJobTitle: 'Full Stack Developer',
      companyName: 'InfoTrack AU',
      hrName: '',
      linkedJobStatus: 'Interviewing',
      createdOn: 'Sep 29, 2025',
      modifiedOn: 'Sep 29, 2025',
      appliedOn: 'Sep 29, 2025'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Saved':
        return 'text-slate-700'
      case 'Interviewing':
        return 'text-green-600'
      case 'Applied':
        return 'text-blue-600'
      case 'Offer':
        return 'text-purple-600'
      default:
        return 'text-slate-500'
    }
  }

  return (
    <div className="space-y-4">
      {/* 提示和搜索栏 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-600">
          <span className="text-2xl">📧</span>
          <p className="text-sm font-medium">Click a cover letter to view or edit details.</p>
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
            <option value="modified">Sort by Modified</option>
            <option value="created">Sort by Created</option>
            <option value="name">Sort by Name</option>
          </select>
        </div>
      </div>

      {/* 表格 */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Cover Letter Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Linked Job Title</th>
              <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Company Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">HR Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Linked Job Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Created On</th>
              <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Modified On</th>
              <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Applied On</th>
              <th className="px-6 py-4 text-left text-sm font-semibold whitespace-nowrap">Edit</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {coverLetters.map((letter) => (
              <tr
                key={letter.id}
                className="hover:bg-slate-50 transition-colors cursor-pointer"
                onClick={() => navigate('/cover-letter')}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-sm text-slate-900 font-medium underline">{letter.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">{letter.linkedJobTitle}</td>
                <td className="px-6 py-4 text-sm text-slate-700">{letter.companyName}</td>
                <td className="px-6 py-4 text-sm text-slate-700">{letter.hrName}</td>
                <td className="px-6 py-4">
                  <span className={`text-sm font-semibold ${getStatusColor(letter.linkedJobStatus)}`}>
                    {letter.linkedJobStatus}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">{letter.createdOn}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{letter.modifiedOn}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{letter.appliedOn}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        navigate('/cover-letter')
                      }}
                      className="p-1 hover:bg-slate-200 rounded transition-colors"
                      title="Edit"
                    >
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        // Handle delete
                      }}
                      className="p-1 hover:bg-slate-200 rounded transition-colors"
                      title="Delete"
                    >
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CoverLettersTab


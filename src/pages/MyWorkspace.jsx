import { useState } from 'react'
import ResumesTab from './MyWorkspace/ResumesTab'
import CoverLettersTab from './MyWorkspace/CoverLettersTab'
import JobsTab from './MyWorkspace/JobsTab'

const MyWorkspace = () => {
  const [activeTab, setActiveTab] = useState('resumes')

  const tabs = [
    { id: 'resumes', label: 'Resumes' },
    { id: 'cover-letters', label: 'Cover Letters' },
    { id: 'jobs', label: 'Jobs' },
    { id: 'events', label: 'Events' },
    { id: 'contacts', label: 'Contacts' }
  ]

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* 顶部标题区域 */}
      <div className="bg-white border-b border-slate-200 px-8 py-6 flex-shrink-0">
        <div className="max-w-8xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">My workspace</h1>
          <div className="flex items-center gap-2 text-slate-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p className="text-sm">Everything you need to manage your job search — in one place!</p>
          </div>
        </div>
      </div>

      {/* 标签导航和操作按钮 */}
      <div className="bg-white border-b border-slate-200 px-8 py-4 flex-shrink-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* 标签导航 */}
          <div className="flex items-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 操作按钮 */}
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 rounded-lg text-sm font-semibold transition-colors">
              Add Job
            </button>
            <button className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 rounded-lg text-sm font-semibold transition-colors">
              Add Event
            </button>
            <button className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 rounded-lg text-sm font-semibold transition-colors">
              Add Contact
            </button>
          </div>
        </div>
      </div>

      {/* 内容区域 */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-9xl mx-auto px-8 py-6">
          {activeTab === 'resumes' && <ResumesTab />}
          {activeTab === 'cover-letters' && <CoverLettersTab />}
          {activeTab === 'jobs' && <JobsTab />}
          {activeTab === 'events' && (
            <div className="text-center py-12 text-slate-500">
              Events tab coming soon...
            </div>
          )}
          {activeTab === 'contacts' && (
            <div className="text-center py-12 text-slate-500">
              Contacts tab coming soon...
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MyWorkspace


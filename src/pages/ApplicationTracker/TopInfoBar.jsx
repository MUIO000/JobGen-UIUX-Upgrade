import { useState } from 'react'
import JobDetailsModal from '../../components/JobDetailsModal'

// 顶部信息栏组件
const TopInfoBar = ({ job, onSwitchJob }) => {
  const [showDetails, setShowDetails] = useState(false)

  const pipelineSteps = [
    { key: 'saved', label: 'Saved', color: 'red' },
    { key: 'applied', label: 'Applied', color: 'amber' },
    { key: 'interviewing', label: 'Interviewing', color: 'green' },
    { key: 'offer', label: 'Offer', color: 'purple' }
  ]

  const currentStepIndex = pipelineSteps.findIndex(step => step.key === job.status)

  return (
    <>
      <div className="bg-white border-b border-slate-200 px-8 py-6">
        <div className="max-w-7xl mx-auto">
          {/* 第一行：职位信息 */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-slate-900">{job.title}</h1>
                <button
                  onClick={() => setShowDetails(true)}
                  className="px-3 py-1.5 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  More Information
                </button>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="font-medium">{job.company}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                <span>Saved {job.savedDate}</span>
              </div>
              {job.source && (
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                    From LinkedIn
                  </span>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">Applied {job.appliedDate}</span>
            </div>
          </div>
        </div>

        {/* 第二行：Pipeline 状态 */}
        <div className="flex items-center justify-center gap-2">
          {pipelineSteps.map((step, index) => {
            const isActive = index === currentStepIndex
            const isCompleted = index < currentStepIndex
            const colorConfig = {
              red: { bg: 'bg-red-50', border: 'border-red-500', text: 'text-red-700', active: 'bg-red-500' },
              amber: { bg: 'bg-amber-50', border: 'border-amber-500', text: 'text-amber-700', active: 'bg-amber-500' },
              green: { bg: 'bg-green-50', border: 'border-green-500', text: 'text-green-700', active: 'bg-green-500' },
              purple: { bg: 'bg-purple-50', border: 'border-purple-500', text: 'text-purple-700', active: 'bg-purple-500' }
            }
            const colors = colorConfig[step.color]

            return (
              <div key={step.key} className="flex items-center gap-2">
                <div className={`flex items-center gap-2 px-4 py-2 border-2 rounded-full transition-all ${
                  isActive 
                    ? `${colors.active} text-white shadow-md` 
                    : isCompleted
                    ? `${colors.bg} ${colors.border} ${colors.text}`
                    : 'bg-slate-50 border-slate-200 text-slate-400'
                }`}>
                  {isCompleted && (
                    <svg className={`w-4 h-4 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  <span className="text-sm font-semibold">{step.label}</span>
                </div>
                {index < pipelineSteps.length - 1 && (
                  <svg className={`w-5 h-5 ${isCompleted ? 'text-slate-400' : 'text-slate-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>

      {/* 详情悬浮卡片 */}
      <JobDetailsModal 
        job={job}
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
      />
    </>
  )
}

export default TopInfoBar


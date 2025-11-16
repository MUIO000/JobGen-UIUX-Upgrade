// 详情展开区域组件
const ExpandableDetails = ({ materialId, isExpanded, onToggle, content, children }) => {
  const materials = {
    resume: {
      title: 'Resume',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      ),
      iconBg: 'bg-cyan-50',
      iconColor: 'text-cyan-600'
    },
    coverLetter: {
      title: 'Cover Letter',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    selectionCriteria: {
      title: 'Selection Criteria',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      ),
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    contractorProfile: {
      title: 'Contractor Profile',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      ),
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-600'
    },
    emailTemplates: {
      title: 'Email Templates',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
      ),
      iconBg: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    screeningPrep: {
      title: 'Interview Prep',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      ),
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-600'
    }
  }

  const material = materials[materialId] || materials.resume

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <button 
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl ${material.iconBg} flex items-center justify-center`}>
            <svg className={`w-6 h-6 ${material.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {material.icon}
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900">{material.title}</h3>
        </div>
        <svg 
          className={`w-6 h-6 text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {/* 展开内容 */}
      {isExpanded && (
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50">
          {children || (
            <div className="prose max-w-none">
              {content || (
                <div className="text-center py-8">
                  <p className="text-slate-500">Content for {material.title} will be displayed here.</p>
                  <button className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold transition-colors">
                    Add Content
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ExpandableDetails


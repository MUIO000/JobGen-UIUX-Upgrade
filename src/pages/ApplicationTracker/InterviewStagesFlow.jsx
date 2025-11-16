// 面试阶段流程组件
const InterviewStagesFlow = () => {
  const stages = [
    {
      id: 1,
      title: 'Screening Prepration',
      description: 'Prep Talking points and Pitch',
      color: 'yellow',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      )
    },
    {
      id: 2,
      title: 'HR Interview',
      description: 'Top 10 General Questions',
      color: 'blue',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      )
    },
    {
      id: 3,
      title: 'Case/Technical/Psychometric',
      description: 'Top 10 Technical/Case Questions',
      color: 'green',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      )
    },
    {
      id: 4,
      title: 'Hiring Manager Interview',
      description: 'Top 10 Job Specific Questions',
      color: 'purple',
      icon: (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </>
      )
    },
    {
      id: 5,
      title: 'Final Interview',
      description: 'Top 10 Behavioural Questions',
      color: 'pink',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      )
    }
  ]

  const colorConfig = {
    yellow: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', icon: 'text-yellow-600' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', icon: 'text-blue-600' },
    green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', icon: 'text-green-600' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', icon: 'text-purple-600' },
    pink: { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-700', icon: 'text-pink-600' }
  }

  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-5 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
        <h3 className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Potential Interview Stages
        </h3>
      </div>
      
      <div className="flex flex-col lg:flex-row items-stretch gap-3">
        {stages.map((stage, index) => {
          const colors = colorConfig[stage.color]
          const isLast = index === stages.length - 1
          
          return (
            <div key={stage.id} className="flex items-center gap-3 flex-1">
              {/* 阶段卡片 - 固定宽高 */}
              <div className={`w-full flex flex-col rounded-2xl border-2 ${colors.border} ${colors.bg} shadow-sm transition-all hover:shadow-md overflow-hidden h-[240px]`}>
                {/* 顶部标题区域 - 固定高度 */}
                <div className={`px-3 py-3 ${colors.bg} border-b-2 ${colors.border} flex items-center justify-center h-[72px]`}>
                  <h4 className={`text-sm font-bold ${colors.text} text-center leading-tight`}>
                    {stage.id}. {stage.title}
                  </h4>
                </div>
                
                {/* 图标区域 - 固定高度 */}
                <div className="flex items-center justify-center bg-white h-[108px]">
                  <div className={`w-16 h-16 rounded-2xl ${colors.bg} border-2 ${colors.border} flex items-center justify-center`}>
                    <svg className={`w-8 h-8 ${colors.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {stage.icon}
                    </svg>
                  </div>
                </div>
                
                {/* 描述区域 - 固定高度 */}
                <div className="px-3 py-3 bg-white flex items-center justify-center h-[60px]">
                  <p className="text-sm text-slate-700 text-center font-medium leading-tight">
                    {stage.description}
                  </p>
                </div>
              </div>
              
              {/* 箭头（最后一个阶段后不显示，桌面端显示） */}
              {!isLast && (
                <div className="flex-shrink-0 hidden lg:flex items-center">
                  <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default InterviewStagesFlow


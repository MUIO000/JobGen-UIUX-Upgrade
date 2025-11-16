// 任务卡片组件
const MaterialCard = ({ material, onCardClick }) => {
  const statusConfig = {
    completed: {
      bg: 'bg-green-100',
      text: 'text-green-700',
      border: 'border-green-200',
      icon: '✓',
      label: 'Completed'
    },
    'in-progress': {
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      border: 'border-blue-200',
      icon: '📝',
      label: 'In Progress'
    },
    'not-started': {
      bg: 'bg-slate-100',
      text: 'text-slate-600',
      border: 'border-slate-200',
      icon: '⏳',
      label: 'Not Started'
    },
    optional: {
      bg: 'bg-amber-100',
      text: 'text-amber-700',
      border: 'border-amber-200',
      icon: '⭐',
      label: 'Optional'
    }
  }

  const status = statusConfig[material.status] || statusConfig['not-started']

  return (
    <div 
      className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-[1.02] flex flex-col h-full"
      onClick={() => onCardClick && onCardClick(material.id)}
    >
      {/* 顶部：图标 + 状态标签 */}
      <div className="flex items-start justify-between mb-4 flex-shrink-0">
        <div className={`w-12 h-12 rounded-xl ${material.iconBg} flex items-center justify-center`}>
          <svg className={`w-6 h-6 ${material.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {material.icon}
          </svg>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${status.bg} ${status.text} border ${status.border}`}>
          {status.icon} {status.label}
        </span>
      </div>
      
      {/* 内容区域 - 使用 flex-1 自动填充 */}
      <div className="flex-1 flex flex-col">
        {/* 标题 */}
        <h3 className="text-lg font-bold text-slate-900 mb-2">
          {material.title}
        </h3>
        
        {/* 描述 */}
        <p className="text-sm text-slate-600 mb-4 flex-1">
          {material.description}
        </p>
        
        {/* Badge（如果有） */}
        {material.badge && (
          <div className="mb-4 flex-shrink-0">
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {material.badge}
            </span>
          </div>
        )}
      </div>
      
      {/* CTA 按钮 - 固定在底部 */}
      <button 
        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold transition-colors shadow-sm flex-shrink-0 mt-auto"
        onClick={(e) => {
          e.stopPropagation()
          onCardClick && onCardClick(material.id)
        }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
        {material.cta}
      </button>
    </div>
  )
}

export default MaterialCard


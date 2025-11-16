import { useState } from 'react'

const StepsPanel = ({ steps, currentStep, onStepChange }) => {
  const [collapsed, setCollapsed] = useState(false)
  
  const getStepIcon = (step, isCollapsed = false) => {
    const size = isCollapsed ? 'w-12 h-12' : 'w-8 h-8'
    const iconSize = isCollapsed ? 'w-6 h-6' : 'w-5 h-5'
    const textSize = isCollapsed ? 'text-base' : 'text-sm'

    if (step.completed) {
      return (
        <div className={`${size} rounded-full bg-green-500 flex items-center justify-center flex-shrink-0`}>
          <svg className={`${iconSize} text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )
    }
    
    if (step.id === currentStep) {
      return (
        <div className={`${size} rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0`}>
          <span className={`text-white font-bold ${textSize}`}>{step.id}</span>
        </div>
      )
    }

    if (step.required && step.score === 0) {
      return (
        <div className={`${size} rounded-full bg-red-100 border-2 border-red-500 flex items-center justify-center flex-shrink-0`}>
          <svg className={`${iconSize} text-red-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
      )
    }

    return (
      <div className={`${size} rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0`}>
        <span className={`text-slate-600 font-bold ${textSize}`}>{step.id}</span>
      </div>
    )
  }

  const getStepStatus = (step) => {
    if (step.completed) {
      return <span className="text-xs text-green-600 font-semibold">✓ Completed</span>
    }
    if (step.required && step.score === 0) {
      return <span className="text-xs text-red-600 font-semibold">⚠️ Required</span>
    }
    if (step.score > 0 && step.score < step.maxScore) {
      return <span className="text-xs text-amber-600 font-semibold">In Progress</span>
    }
    return <span className="text-xs text-slate-500">Not Started</span>
  }

  // 收缩后的简化版本
  if (collapsed) {
    return (
      <div className="w-20 bg-white border-r border-slate-200 flex-shrink-0 overflow-y-auto">
        <div className="p-4">
          {/* 切换按钮 */}
          <button
            onClick={() => setCollapsed(false)}
            className="w-full mb-4 p-2 hover:bg-slate-100 rounded-lg transition-colors flex items-center justify-center"
            title="Expand Steps"
          >
            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* 简化的步骤列表 - 只显示图标 */}
          <div className="flex flex-col items-center gap-0">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <button
                  onClick={() => onStepChange(step.id)}
                  className="p-2 hover:bg-slate-50 rounded-lg transition-colors"
                  title={step.title}
                >
                  {getStepIcon(step, true)}
                </button>
                
                {/* 连接线 */}
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-6 bg-slate-200 my-1"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // 完整展开版本
  return (
    <div className="w-48 bg-white border-r border-slate-200 flex-shrink-0 overflow-y-auto">
      <div className="p-4">
        {/* 标题和切换按钮 */}
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900">Steps</h3>
          <button
            onClick={() => setCollapsed(true)}
            className="p-1 hover:bg-slate-100 rounded-lg transition-colors flex-shrink-0"
            title="Collapse Steps"
          >
            <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        {/* 步骤列表 */}
        <div className="space-y-1.5">
          {steps.map((step, index) => {
            const isActive = step.id === currentStep
            const isClickable = true

            return (
              <div key={step.id}>
                <button
                  onClick={() => isClickable && onStepChange(step.id)}
                  disabled={!isClickable}
                  className={`w-full text-left p-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-indigo-50 border border-indigo-500'
                      : 'bg-slate-50 border border-transparent hover:bg-slate-100'
                  } ${!isClickable ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center gap-2">
                    {getStepIcon(step, false)}
                    
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-xs font-semibold truncate ${
                        isActive ? 'text-indigo-900' : 'text-slate-900'
                      }`}>
                        {step.title}
                      </h4>
                      <div className="flex items-center justify-between mt-0.5">
                        {getStepStatus(step)}
                      </div>
                    </div>
                  </div>
                </button>

                {/* 连接线 */}
                {index < steps.length - 1 && (
                  <div className="flex justify-start pl-5 py-0.5">
                    <div className="w-0.5 h-3 bg-slate-200"></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default StepsPanel


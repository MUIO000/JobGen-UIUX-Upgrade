import { useEffect, useRef } from 'react'

const ViewToggle = ({ options, value, onChange }) => {
  const containerRef = useRef(null)
  const indicatorRef = useRef(null)
  const buttonRefs = useRef([])

  useEffect(() => {
    const updateIndicatorPosition = () => {
      const activeIndex = options.findIndex(opt => opt.value === value)
      if (activeIndex !== -1 && indicatorRef.current && buttonRefs.current[activeIndex]) {
        const activeButton = buttonRefs.current[activeIndex]
        const container = containerRef.current
        
        if (container && activeButton) {
          const containerRect = container.getBoundingClientRect()
          const buttonRect = activeButton.getBoundingClientRect()
          
          const left = buttonRect.left - containerRect.left
          const width = buttonRect.width
          
          indicatorRef.current.style.transform = `translateX(${left}px)`
          indicatorRef.current.style.width = `${width}px`
        }
      }
    }
    
    // 延迟更新，确保DOM渲染完成
    const timeoutId1 = setTimeout(updateIndicatorPosition, 0)
    const timeoutId2 = setTimeout(updateIndicatorPosition, 100)
    
    // 窗口大小变化时更新
    window.addEventListener('resize', updateIndicatorPosition)
    
    return () => {
      window.removeEventListener('resize', updateIndicatorPosition)
      clearTimeout(timeoutId1)
      clearTimeout(timeoutId2)
    }
  }, [value, options])

  // 渲染图标 - 如果图标是函数，则调用它；否则直接渲染
  const renderIcon = (option, isActive) => {
    if (!option.icon) return null
    
    if (typeof option.icon === 'function') {
      return option.icon(isActive)
    }
    
    // 如果图标是React元素，需要克隆并修改颜色
    if (typeof option.icon === 'object' && option.icon.type) {
      // 尝试克隆图标并修改路径颜色
      return (
        <div className="flex-grow-0 flex-shrink-0 w-5 h-5 relative">
          {option.icon}
        </div>
      )
    }
    
    return (
      <div className="flex-grow-0 flex-shrink-0 w-5 h-5 relative">
        {option.icon}
      </div>
    )
  }

  return (
    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 p-1 rounded-full bg-slate-100 relative" ref={containerRef}>
      {/* 滑动指示器 */}
      <div
        ref={indicatorRef}
        className="absolute top-1 bottom-1 bg-white shadow-md rounded-full transition-all duration-300 ease-out z-0"
        style={{
          left: 0,
          width: 0
        }}
      />
      
      {/* 按钮组 */}
      {options.map((option, index) => {
        const isActive = value === option.value
        return (
          <div
            key={option.value}
            ref={el => buttonRefs.current[index] = el}
            onClick={() => onChange(option.value)}
            className={`flex justify-center items-center flex-grow-0 flex-shrink-0 h-10 relative z-10 overflow-hidden gap-2 px-4 py-2 rounded-full cursor-pointer transition-all ${
              isActive ? 'text-slate-800' : 'text-slate-600 hover:text-slate-700'
            }`}
          >
            {/* 图标 */}
            {renderIcon(option, isActive)}
            
            {/* 文本 */}
            <p className={`flex-grow-0 flex-shrink-0 text-sm font-bold text-left ${
              isActive ? 'text-slate-800' : 'text-slate-600'
            }`}>
              {option.label}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default ViewToggle


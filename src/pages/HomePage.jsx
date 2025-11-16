import { useState, useEffect } from 'react'
import alarmGif from '../assets/Icon_Homepage/alarm.gif'
import checkGif from '../assets/Icon_Homepage/check.gif'
import interviewGif from '../assets/Icon_Homepage/interview.gif'
import offerGif from '../assets/Icon_Homepage/offer.gif'
import recruitmentGif from '../assets/Icon_Homepage/recruitment.gif'
import ViewToggle from '../components/ui/ViewToggle'

// KPI 卡片组件
const KpiCard = ({ icon, iconSrc, label, value, color, bgColor }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl ${bgColor} flex items-center justify-center overflow-hidden`}>
          {iconSrc ? (
            <img src={iconSrc} alt={label} className="w-full h-full object-contain" />
          ) : (
            <span className="text-2xl">{icon}</span>
          )}
        </div>
        <div className="flex-1">
          <div className={`text-3xl font-bold ${color}`}>{value}</div>
          <div className="text-sm text-slate-600 mt-1">{label}</div>
        </div>
      </div>
    </div>
  )
}

// 倒计时卡片组件
const CountdownCard = ({ eventName, eventDate, icon, color, bgColor }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(eventDate) - new Date()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0 })
      }
    }

    calculateTimeLeft()
    // 改为每分钟更新一次，因为不需要秒级更新
    const timer = setInterval(calculateTimeLeft, 60000)

    return () => clearInterval(timer)
  }, [eventDate])

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 h-full">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 h-full">
        <div className="flex items-center gap-3 lg:flex-shrink-0 lg:w-48">
        <img src={alarmGif} alt="clock" className="w-10 h-10 flex-shrink-0" /> 
          <div className="flex-1 min-w-0">
            <div className="text-xs text-slate-500 mb-1">Upcoming Event</div>
            <div className="text-base font-semibold text-slate-900 truncate" title={eventName}>
              {eventName}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 lg:flex-1 lg:justify-end">
          <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border-2 border-indigo-200/50">
            <div className="flex items-baseline gap-1.5">
              <div className={`text-3xl lg:text-2xl font-bold ${color} leading-none`}>
                {timeLeft.days}
              </div>
              <div className="text-lg lg:text-xl text-slate-500 font-semibold">d</div>
            </div>
            <div className="w-px h-6 bg-slate-300"></div>
            <div className="flex items-baseline gap-1.5">
              <div className={`text-3xl lg:text-2xl font-bold ${color} leading-none`}>
                {timeLeft.hours}
              </div>
              <div className="text-lg lg:text-xl text-slate-500 font-semibold">h</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// 职位卡片组件
const JobCard = ({ job, status }) => {
  const statusColors = {
    saved: 'bg-red-50 text-red-700 border-red-200',
    applied: 'bg-amber-50 text-amber-700 border-amber-200',
    interviewing: 'bg-green-50 text-green-700 border-green-200',
    offer: 'bg-purple-50 text-purple-700 border-purple-200'
  }

  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-[1.02]">
      <div className="flex items-start justify-between mb-2">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
        <span className="text-xs text-slate-500">{job.date}</span>
      </div>
      <h3 className="font-bold text-slate-800 mb-1 line-clamp-2">{job.title}</h3>
      <p className="text-sm text-slate-600">{job.company}</p>
    </div>
  )
}

const HomePage = () => {
  // 视图切换状态
  const [viewMode, setViewMode] = useState('overview') // 'overview' or 'plan'
  
  // 视图切换选项
  const viewOptions = [
    {
      value: 'overview',
      label: 'Overview',
      icon: (isActive) => (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
          preserveAspectRatio="none"
        >
          <path
            d="M3 4C3 3.44772 3.44772 3 4 3H7C7.55228 3 8 3.44772 8 4V7C8 7.55228 7.55228 8 7 8H4C3.44772 8 3 7.55228 3 7V4Z"
            fill={isActive ? '#4F46E5' : '#64748B'}
          />
          <path
            d="M3 13C3 12.4477 3.44772 12 4 12H7C7.55228 12 8 12.4477 8 13V16C8 16.5523 7.55228 17 7 17H4C3.44772 17 3 16.5523 3 16V13Z"
            fill={isActive ? '#4F46E5' : '#64748B'}
          />
          <path
            d="M12 4C12 3.44772 12.4477 3 13 3H16C16.5523 3 17 3.44772 17 4V7C17 7.55228 16.5523 8 16 8H13C12.4477 8 12 7.55228 12 7V4Z"
            fill={isActive ? '#4F46E5' : '#64748B'}
          />
          <path
            d="M12 13C12 12.4477 12.4477 12 13 12H16C16.5523 12 17 12.4477 17 13V16C17 16.5523 16.5523 17 16 17H13C12.4477 17 12 16.5523 12 16V13Z"
            fill={isActive ? '#4F46E5' : '#64748B'}
          />
        </svg>
      )
    },
    {
      value: 'plan',
      label: 'Plan',
      icon: (isActive) => (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
          preserveAspectRatio="none"
        >
          <path
            d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2Z"
            fill={isActive ? '#4F46E5' : '#64748B'}
          />
        </svg>
      )
    }
  ]
  
  // 模拟数据
  const [kpiData] = useState({
    saved: 3,
    applied: 1,
    interviewing: 1,
    offers: 0
  })

  const [jobs] = useState({
  saved: [
      { id: 1, date: 'Oct 8, 2025', title: 'Software Engineer - Core Services', company: 'Cuscal Limited' },
      { id: 2, date: 'Sep 29, 2025', title: 'Staff Software Engineer - Full Stack', company: 'Commonwealth Bank' },
      { id: 3, date: 'Sep 29, 2025', title: 'Full Stack Engineer', company: 'WBS Technology' }
  ],
  applied: [
      { id: 4, date: 'Oct 15, 2025', title: 'Java API Spring Boot Developer', company: 'Infosys' }
    ],
    interviewing: [
      { id: 5, date: 'Oct 20, 2025', title: 'Product Manager', company: 'InfoTrack AU' }
    ],
    offers: []
  })

  // 周目标数据: [Jobs Applied, Apply Goal]
  const [weeklyData] = useState({
    applied: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], // Jobs Applied 数据
    goal: [2, 2.5, 3, 5, 10, 14, 12, 8, 6, 4, 2, 2] // Apply Goal 数据
  })

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-br from-slate-50 to-slate-100 h-full overflow-hidden">
      {/* 页面标题 */}
      <div className="flex-shrink-0 bg-white border-b border-slate-200 px-8 py-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              L
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Welcome Lucas!</h1>
              <p className="text-sm text-slate-600 mt-1">Ready to land your next role as a full-stack developer?</p>
            </div>
          </div>

          {/* 右侧按钮组 */}
          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            {/* 视图切换按钮 */}
            <ViewToggle
              options={viewOptions}
              value={viewMode}
              onChange={setViewMode}
            />

            {/* 操作按钮 */}
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-sm font-semibold transition-colors shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Job</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-sm font-semibold transition-colors shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Resume</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-full text-sm font-semibold transition-colors shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>

      {/* 内容区域 - 可滚动 */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Overview 视图 */}
          {viewMode === 'overview' && (
            <>
          {/* KPI 卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            <KpiCard 
              iconSrc={recruitmentGif}
              label="Saved" 
              value={kpiData.saved}
              color="text-red-600"
              bgColor="bg-red-50"
            />
            <KpiCard 
              iconSrc={checkGif}
              label="Applied" 
              value={kpiData.applied}
              color="text-amber-600"
              bgColor="bg-amber-50"
            />
            <KpiCard 
              iconSrc={interviewGif}
              label="Interview" 
              value={kpiData.interviewing}
              color="text-green-600"
              bgColor="bg-green-50"
            />
            <KpiCard 
              iconSrc={offerGif}
              label="Offers" 
              value={kpiData.offers}
              color="text-purple-600"
              bgColor="bg-purple-50"
            />
            <div className="md:col-span-2 lg:col-span-2">
              <CountdownCard
                eventName="Interview - Product Manager"
                eventDate="2025-11-15T14:00:00"
                icon="📅"
                color="text-indigo-600"
                bgColor="bg-indigo-50"
              />
            </div>
        </div>

          {/* 进度概览和图表 */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* 进度概览 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Progress Overview
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-cyan-200 to-transparent"></div>
              </div>
              
              {/* 统计数据 - 放在漏斗上方 */}
              <div className="grid grid-cols-4 gap-0 mb-6 pb-2">
                <div className="text-center border-r border-slate-200 last:border-r-0">
                  <div className="text-2xl font-bold text-cyan-600 mb-1">5</div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">Total</div>
                  <div className="text-xs font-semibold text-cyan-600 mt-1">100%</div>
                </div>
                <div className="text-center border-r border-slate-200 last:border-r-0">
                  <div className="text-2xl font-bold text-cyan-600 mb-1">3</div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">Saved</div>
                  <div className="text-xs font-semibold text-cyan-600 mt-1">60%</div>
                </div>
                <div className="text-center border-r border-slate-200 last:border-r-0">
                  <div className="text-2xl font-bold text-cyan-600 mb-1">1</div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">Applied</div>
                  <div className="text-xs font-semibold text-cyan-600 mt-1">20%</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600 mb-1">1</div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">Interviewing</div>
                  <div className="text-xs font-semibold text-cyan-600 mt-1">20%</div>
                </div>
              </div>

              {/* 水平漏斗图 */}
              <div className="relative h-32 mt-4">
                <svg viewBox="0 0 560 120" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    {/* 水平渐变 - 从左到右 */}
                    <linearGradient id="funnelGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: '#60a5fa', stopOpacity: 1}} />
                      <stop offset="35%" style={{stopColor: '#34d399', stopOpacity: 0.95}} />
                      <stop offset="70%" style={{stopColor: '#fbbf24', stopOpacity: 0.85}} />
                      <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
                    </linearGradient>
                  </defs>
                  
                  {(() => {
                    // 数据值: Total=5, Saved=3, Applied=1, Interviewing=1
                    const svgWidth = 560;
                    const svgHeight = 120;
                    const padding = 20;
                    const chartWidth = svgWidth - padding * 2;
                    const chartHeight = svgHeight - padding * 2;
                    
                    // 计算每个阶段的高度（基于数据比例，从左到右逐渐变矮）
                    const data = [6, 3, 1, 1];
                    const maxValue = 5;
                    
                    // 计算每个阶段的边界点（从左到右）
                    const leftX = padding;
                    const rightX = padding + chartWidth;
                    const bottomY = padding + chartHeight;
                    
                    // 每个阶段的X位置（平均分布4个阶段）
                    const stageCount = 4;
                    const stageWidth = chartWidth / stageCount;
                    
                    // 计算每个阶段的高度（基于数据值）
                    const height1 = (data[0] / maxValue) * chartHeight * 0.9; // Total
                    const height2 = (data[1] / maxValue) * chartHeight * 0.9; // Saved
                    const height3 = (data[2] / maxValue) * chartHeight * 0.9; // Applied
                    const height4 = (data[3] / maxValue) * chartHeight * 0.9; // Interviewing
                    
                    // 计算中心轴Y坐标（以Total高度的1/2处为中心）
                    // Total的顶部在 bottomY - height1，所以中心在 bottomY - height1/2
                    const centerY = bottomY - height1 / 2;
                    
                    // 计算每个阶段的分界点X坐标
                    const x1 = leftX;
                    const x2 = leftX + stageWidth;
                    const x3 = leftX + stageWidth * 2;
                    const x4 = leftX + stageWidth * 3;
                    const x5 = rightX;
                    
                    // 计算每个阶段的顶部和底部Y坐标（以中心轴对齐）
                    const y1_top = centerY - height1 / 2;
                    const y1_bottom = centerY + height1 / 2;
                    const y2_top = centerY - height2 / 2;
                    const y2_bottom = centerY + height2 / 2;
                    const y3_top = centerY - height3 / 2;
                    const y3_bottom = centerY + height3 / 2;
                    const y4_top = centerY - height4 / 2;
                    const y4_bottom = centerY + height4 / 2;
                    
                    const radius = 8;
                    const smoothFactor = 15; // 平滑过渡因子
                    
                    // 创建平滑的水平漏斗路径（从左到右逐渐变窄）
                    // 以Total高度的中心轴对齐，顶部和底部都向中间收缩
                    const path = `
                      M ${x1 + radius} ${y1_top}
                      C ${x1 + stageWidth * 0.3} ${y1_top} ${x1 + stageWidth * 0.7} ${y2_top} ${x2} ${y2_top}
                      C ${x2 + stageWidth * 0.3} ${y2_top} ${x2 + stageWidth * 0.7} ${y3_top} ${x3} ${y3_top}
                      C ${x3 + stageWidth * 0.3} ${y3_top} ${x3 + stageWidth * 0.7} ${y4_top} ${x4} ${y4_top}
                      L ${x5 - radius} ${y4_top}
                      Q ${x5} ${y4_top} ${x5} ${y4_top + radius}
                      L ${x5} ${y4_bottom - radius}
                      Q ${x5} ${y4_bottom} ${x5 - radius} ${y4_bottom}
                      C ${x3 + stageWidth * 0.7} ${y4_bottom} ${x3 + stageWidth * 0.3} ${y3_bottom} ${x3} ${y3_bottom}
                      C ${x2 + stageWidth * 0.7} ${y3_bottom} ${x2 + stageWidth * 0.3} ${y2_bottom} ${x2} ${y2_bottom}
                      C ${x1 + stageWidth * 0.7} ${y2_bottom} ${x1 + stageWidth * 0.3} ${y1_bottom} ${x1 + radius} ${y1_bottom}
                      Q ${x1} ${y1_bottom} ${x1} ${y1_bottom - radius}
                      L ${x1} ${y1_top + radius}
                      Q ${x1} ${y1_top} ${x1 + radius} ${y1_top}
                      Z
                    `;
                    
                    return (
                      <path
                        d={path}
                        fill="url(#funnelGradient)"
                        opacity="0.92"
                      />
                    );
                  })()}
                </svg>
              </div>
            </div>

            {/* 周目标图表 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Jobs Applied vs Weekly Goal
                </h2>
              </div>
              
              {/* 图例 */}
              <div className="flex items-center justify-center gap-6 mb-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <span className="text-slate-700 font-medium">Jobs Applied</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                  <span className="text-slate-700 font-medium">Apply Goal</span>
                </div>
              </div>
              
              {/* 图表区域 */}
              <div className="relative h-52">
                {/* Y轴刻度 */}
                <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-slate-400 w-6">
                  {[18, 16, 14, 12, 10, 8, 6, 4, 2, 0].map((value) => (
                    <span key={value}>{value}</span>
                  ))}
                </div>
                
                {/* 网格线和图表容器 */}
                <div className="absolute left-8 right-0 top-0 bottom-8">
                  {/* 网格线 - 使用SVG绘制以确保精确对齐 */}
                  <svg 
                    className="absolute inset-0 w-full h-full pointer-events-none" 
                    viewBox="0 0 480 180" 
                    preserveAspectRatio="none"
                  >
                    {[18, 16, 14, 12, 10, 8, 6, 4, 2, 0].map((value) => {
                      const maxY = 18;
                      const svgHeight = 180;
                      const paddingTop = 10;
                      const paddingBottom = 10;
                      const chartHeight = svgHeight - paddingTop - paddingBottom;
                      const y = paddingTop + chartHeight - (value / maxY) * chartHeight;
                      return (
                        <line
                          key={value}
                          x1="0"
                          y1={y}
                          x2="480"
                          y2={y}
                          stroke="#e2e8f0"
                          strokeWidth="1"
                        />
                      );
                    })}
                  </svg>
                  
                  {/* SVG 图表 */}
                  <svg 
                    className="absolute inset-0 w-full h-full" 
                    viewBox="0 0 480 180" 
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#06b6d4', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
                      </linearGradient>
                      <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#f59e0b', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#fbbf24', stopOpacity: 1}} />
                      </linearGradient>
                    </defs>
                    
                    {/* 计算坐标的辅助函数 */}
                    {(() => {
                      const maxY = 18; // Y轴最大值
                      const svgHeight = 180;
                      const svgWidth = 480;
                      const paddingTop = 10;
                      const paddingBottom = 10;
                      const chartHeight = svgHeight - paddingTop - paddingBottom;
                      
                      // 将数据值转换为Y坐标 (Y轴向下，原点在左上角)
                      const valueToY = (value) => {
                        // value=0时应该在底部，value=maxY时应该在顶部
                        return paddingTop + chartHeight - (value / maxY) * chartHeight;
                      };
                      
                      // X坐标平均分布
                      const weeks = 12;
                      const xStep = svgWidth / (weeks - 1);
                      
                      // 生成 Jobs Applied 线的点
                      const appliedPoints = weeklyData.applied.map((value, i) => {
                        const x = i * xStep;
                        const y = valueToY(value);
                        return `${x},${y}`;
                      }).join(' ');
                      
                      // 生成 Apply Goal 线的点
                      const goalPoints = weeklyData.goal.map((value, i) => {
                        const x = i * xStep;
                        const y = valueToY(value);
                        return `${x},${y}`;
                      }).join(' ');
                      
                      return (
                        <>
                          {/* Apply Goal 线 (黄色) */}
                          <polyline
                            points={goalPoints}
                            fill="none"
                            stroke="url(#lineGradient2)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          
                          {/* Apply Goal 数据点 */}
                          {weeklyData.goal.map((value, i) => {
                            const x = i * xStep;
                            const y = valueToY(value);
                            return (
                              <circle
                                key={`goal-${i}`}
                                cx={x}
                                cy={y}
                                r="4"
                                fill="#fbbf24"
                                stroke="#fff"
                                strokeWidth="2"
                              />
                            );
                          })}
                          
                          {/* Jobs Applied 线 (青色) */}
                          <polyline
                            points={appliedPoints}
                            fill="none"
                            stroke="url(#lineGradient1)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          
                          {/* Jobs Applied 数据点 */}
                          {weeklyData.applied.map((value, i) => {
                            const x = i * xStep;
                            const y = valueToY(value);
                            return (
                              <circle
                                key={`applied-${i}`}
                                cx={x}
                                cy={y}
                                r="4"
                                fill="#06b6d4"
                                stroke="#fff"
                                strokeWidth="2"
                              />
                            );
                          })}
                        </>
                      );
                    })()}
                  </svg>
                </div>
                
                {/* X轴标签 */}
                <div className="absolute left-8 right-0 bottom-0 flex justify-between text-xs text-slate-500">
                  {['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12'].map((week, i) => (
                    <span key={i} className="text-center" style={{width: '8.33%'}}>{week}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 需要关注的职位 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                  Jobs That Need Your Attention
                </h2>
              </div>
              <button className="text-sm text-indigo-600 hover:text-indigo-700 font-semibold">
                View All →
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Saved 职位 */}
                  <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded bg-red-500 flex items-center justify-center">
                    <span className="text-white text-xs">📑</span>
                  </div>
                  <h3 className="text-sm font-semibold text-red-600">
                    Saved <span className="text-xs text-slate-500 font-normal">(ready to apply)</span>
                  </h3>
                </div>
                <div className="space-y-3">
                  {jobs.saved.map(job => (
                    <JobCard key={job.id} job={job} status="saved" />
                  ))}
                </div>
              </div>

              {/* Applied 职位 */}
                  <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded bg-amber-500 flex items-center justify-center">
                    <span className="text-white text-xs">✅</span>
                  </div>
                  <h3 className="text-sm font-semibold text-amber-600">
                    Applied <span className="text-xs text-slate-500 font-normal">(ready to follow-up)</span>
                  </h3>
                  </div>
                <div className="space-y-3">
                  {jobs.applied.map(job => (
                    <JobCard key={job.id} job={job} status="applied" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 即将到来的提醒 */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* 事件 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-indigo-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Upcoming Events
                  </h2>
                </div>
                <button className="text-indigo-600 hover:text-indigo-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
              <div className="space-y-3">
                {/* 事件1 */}
                <div className="flex items-start gap-3 p-4 bg-indigo-50 rounded-lg border border-indigo-100 hover:bg-indigo-100 transition-colors cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    <div className="text-center">
                      <div className="text-xs leading-tight">Nov</div>
                      <div className="text-lg leading-tight">15</div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-900 mb-1">Interview - Product Manager</h3>
                    <p className="text-sm text-slate-600 mb-1">InfoTrack AU</p>
                    <p className="text-xs text-slate-500">2:00 PM - 3:00 PM</p>
                  </div>
                  <button className="flex-shrink-0 text-slate-400 hover:text-slate-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {/* 事件2 */}
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-100 hover:bg-green-100 transition-colors cursor-pointer">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    <div className="text-center">
                      <div className="text-xs leading-tight">Nov</div>
                      <div className="text-lg leading-tight">18</div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-900 mb-1">Follow-up Call</h3>
                    <p className="text-sm text-slate-600 mb-1">Commonwealth Bank</p>
                    <p className="text-xs text-slate-500">10:00 AM - 10:30 AM</p>
                  </div>
                  <button className="flex-shrink-0 text-slate-400 hover:text-slate-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* 联系人 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-green-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h2 className="text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Contacts
                  </h2>
                </div>
                <button className="text-indigo-600 hover:text-indigo-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
              <div className="text-center py-8">
                <div className="text-4xl mb-2">🤝</div>
                <p className="text-sm text-slate-500">No contacts found to follow-up</p>
                <button className="mt-2 text-sm text-indigo-600 hover:text-indigo-700 font-semibold">
                  Add a connection
                </button>
              </div>
             </div>
           </div>
            </>
          )}

          {/* Plan 视图 */}
          {viewMode === 'plan' && (
            <>


          {/* AI Career Coach - 进度条 */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
            <h2 className="text-xl font-bold mb-2"> 
              <img src="src/assets/Icon_Homepage/project-plan.png" alt="Project Plan" className="w-8 h-8 inline-block mr-2" />
              <span className="text-white">AI Career Coach: 12-Week Job Search Plan</span>
            </h2>
            <p className="text-indigo-100 text-sm mb-4">12 Weeks</p>
            
            {/* 12周进度指示器 */}
            <div className="flex items-center gap-2 mb-4">
              {Array.from({ length: 12 }).map((_, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                  <div 
                    className={`w-full h-10 rounded-lg flex items-center justify-center text-xs font-bold border-2 transition-all ${
                      idx === 0 ? 'bg-indigo-400 border-white' :
                      idx === 1 ? 'bg-white/20 border-white/40' :
                      'bg-white/10 border-white/20'
                    }`}
                  >
                    {idx === 0 ? '✓' : idx === 1 ? '📝' : '🔒'}
                  </div>
                  <span className="text-xs">{idx + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 计划和日历横向布局 */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* 12周计划详情 - 占主要空间 */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-md">
                    2
                  </div>
                  <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Week 2 — Start Applying to First Jobs
                  </h2>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold transition-colors">
                  Next Week
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
                
              <p className="text-slate-600 mb-6">📝 Tailor your resume, apply, and start tracking progress</p>

            {/* Jobs to Apply */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3 p-3 bg-cyan-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="font-semibold text-slate-900">Jobs to Apply this Week</h3>
                </div>
                <button className="text-cyan-600 hover:text-cyan-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
              <div className="space-y-2 pl-3">
                <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
                  <input type="checkbox" className="w-4 h-4 rounded" />
                  <span className="flex-1 text-sm text-slate-700">Goal: Apply 10 jobs</span>
                  <button className="text-slate-400 hover:text-slate-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                  <button className="text-slate-400 hover:text-red-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
                  <input type="checkbox" className="w-4 h-4 rounded" />
                  <span className="flex-1 text-sm text-slate-700">Search for 3 roles using new keywords or filters</span>
                  <button className="text-slate-400 hover:text-slate-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                  <button className="text-slate-400 hover:text-red-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
                  <input type="checkbox" className="w-4 h-4 rounded" />
                  <span className="flex-1 text-sm text-slate-700">Review 5 job listings and analyze what skills they all share</span>
                  <button className="text-slate-400 hover:text-slate-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                  <button className="text-slate-400 hover:text-red-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

              {/* Grow your Network */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3 p-3 bg-amber-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <h3 className="font-semibold text-slate-900">Grow your Network</h3>
                  </div>
                  <button className="text-amber-600 hover:text-amber-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-2 pl-3">
                  <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
                    <input type="checkbox" className="w-4 h-4 rounded" />
                    <span className="flex-1 text-sm text-slate-700">Goal: Connect with 5 people</span>
                    <button className="text-slate-400 hover:text-slate-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                    <button className="text-slate-400 hover:text-red-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
                    <input type="checkbox" className="w-4 h-4 rounded" />
                    <span className="flex-1 text-sm text-slate-700">Send thank-you notes to 2 people who gave you advice recently</span>
                    <button className="text-slate-400 hover:text-slate-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                    <button className="text-slate-400 hover:text-red-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
                    <input type="checkbox" className="w-4 h-4 rounded" />
                    <span className="flex-1 text-sm text-slate-700">Share a resource or article on LinkedIn and ask a question</span>
                    <button className="text-slate-400 hover:text-slate-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                    <button className="text-slate-400 hover:text-red-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

             {/* Learn and Prepare */}
              <div>
            <div className="flex items-center justify-between mb-3 p-3 bg-cyan-50 rounded-lg">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3 className="font-semibold text-slate-900">Learn and Prepare</h3>
              </div>
              <button className="text-cyan-600 hover:text-cyan-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
            <div className="space-y-2 pl-3">
              <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
                <input type="checkbox" className="w-4 h-4 rounded" />
                <span className="flex-1 text-sm text-slate-700">Goal: Spend 3 hours learning</span>
                <button className="text-slate-400 hover:text-slate-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
                <button className="text-slate-400 hover:text-red-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
                <input type="checkbox" className="w-4 h-4 rounded" />
                <span className="flex-1 text-sm text-slate-700">Take the Resume Writing course on LinkedIn Learning</span>
                <button className="text-slate-400 hover:text-slate-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
                <button className="text-slate-400 hover:text-red-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
                <input type="checkbox" className="w-4 h-4 rounded" />
                <span className="flex-1 text-sm text-slate-700">Enroll in an Interview Preparation course on LinkedIn Learning</span>
                <button className="text-slate-400 hover:text-slate-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
                <button className="text-slate-400 hover:text-red-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
              </div>

              {/* Footer note */}
              <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-600">
                  <span className="font-semibold">Your Job Search Plan is Flexible</span>
                  <br />
                  This plan is designed to move at your pace.
                </p>
              </div>
            </div>

            {/* 日历视图 - 辅助区域 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm h-[420px]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-700">Calendar</h3>
                <button className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-medium transition-colors">
                  Today
                </button>
              </div>
              
              {/* 月份导航 */}
              <div className="flex items-center justify-between mb-4">
                <button className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors">
                  <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="text-sm font-semibold text-slate-900">November 2025</span>
                <button className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors">
                  <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* 日历网格 */}
              <div className="grid grid-cols-7 gap-1.5">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                  <div key={day} className="text-center text-xs font-semibold text-slate-500 py-1">
                    {day.slice(0, 1)}
                  </div>
                ))}
                {Array.from({ length: 35 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`aspect-square rounded-md border flex items-center justify-center text-xs cursor-pointer transition-all ${
                      i === 8 ? 'bg-indigo-500 border-indigo-600 text-white font-bold' : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
            </>
        )}

         </div>
       </div>
    </div>
   )
}
 
 export default HomePage


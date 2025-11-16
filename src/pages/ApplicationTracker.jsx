import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MaterialCard from './ApplicationTracker/MaterialCard'
import JobListSidebar from './ApplicationTracker/JobListSidebar'
import TopInfoBar from './ApplicationTracker/TopInfoBar'
import ExpandableDetails from './ApplicationTracker/ExpandableDetails'

// 主 ApplicationTracker 组件
const ApplicationTracker = () => {
  const navigate = useNavigate()
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [activeJobId, setActiveJobId] = useState(1)
  const [expandedMaterialId, setExpandedMaterialId] = useState(null)

  // 模拟数据
  const [jobs] = useState([
    {
      id: 1,
      title: 'Software Engineer - Core Services',
      company: 'Cuscal Limited',
      status: 'applied',
      date: 'Oct 8, 2025',
      savedDate: 'Oct 8, 2025',
      appliedDate: 'Nov 13, 2025',
      source: 'LinkedIn'
    },
    {
      id: 2,
      title: 'Staff Software Engineer - Full Stack',
      company: 'Commonwealth Bank',
      status: 'saved',
      date: 'Sep 29, 2025',
      savedDate: 'Sep 29, 2025',
      appliedDate: null,
      source: 'LinkedIn'
    },
    {
      id: 3,
      title: 'Full Stack Engineer',
      company: 'WBS Technology',
      status: 'saved',
      date: 'Sep 29, 2025',
      savedDate: 'Sep 29, 2025',
      appliedDate: null,
      source: null
    },
    {
      id: 4,
      title: 'Product Manager',
      company: 'InfoTrack AU',
      status: 'interviewing',
      date: 'Oct 20, 2025',
      savedDate: 'Oct 15, 2025',
      appliedDate: 'Oct 20, 2025',
      source: 'LinkedIn'
    }
  ])

  const [materials] = useState([
    {
      id: 'resume',
      title: 'Resume',
      description: 'Upload or customise your resume for this role.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      ),
      iconBg: 'bg-cyan-50',
      iconColor: 'text-cyan-600',
      status: 'completed',
      cta: 'Edit Resume'
    },
    {
      id: 'coverLetter',
      title: 'Cover Letter',
      description: 'Tailor your cover letter based on this job description.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
      status: 'in-progress',
      cta: 'Generate Cover Letter'
    },
    {
      id: 'selectionCriteria',
      title: 'Selection Criteria',
      description: 'Some roles require selection criteria responses.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      ),
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
      status: 'optional',
      cta: 'Start SC Answers'
    },
    {
      id: 'contractorProfile',
      title: 'Contractor Profile',
      description: 'Create briefing notes if this is a contract role.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      ),
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-600',
      status: 'optional',
      cta: 'Generate Profile'
    },
    {
      id: 'emailTemplates',
      title: 'Email Templates',
      description: 'Ready-made outreach and follow-up templates.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
      ),
      iconBg: 'bg-green-50',
      iconColor: 'text-green-600',
      status: 'not-started',
      cta: 'View Templates'
    },
    {
      id: 'screeningPrep',
      title: 'Interview Prep',
      description: 'Practice 75+ common interview questions with AI-generated answers.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      ),
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-600',
      status: 'not-started',
      cta: 'Start Practice',
    }
  ])

  const activeJob = jobs.find(job => job.id === activeJobId) || jobs[0]

  const handleCardClick = (materialId) => {
    // 如果是 Interview Prep，跳转到独立页面
    if (materialId === 'screeningPrep') {
      navigate('/interview-prep')
      return
    }
    
    setExpandedMaterialId(expandedMaterialId === materialId ? null : materialId)
    // 滚动到详情区域
    setTimeout(() => {
      document.getElementById(`detail-${materialId}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }, 100)
  }

  return (
    <div className="flex-1 flex h-full overflow-hidden">
      {/* 职位列表侧边栏 */}
      <JobListSidebar
        jobs={jobs}
        activeJobId={activeJobId}
        onJobSelect={setActiveJobId}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* 主内容区域 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* 顶部信息栏 */}
        <TopInfoBar 
          job={activeJob}
          onSwitchJob={() => setSidebarCollapsed(false)}
        />

        {/* 可滚动内容区域 */}
        <div className="flex-1 overflow-y-auto bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="max-w-7xl mx-auto px-8 py-6 space-y-6">
            {/* 任务卡片网格 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {materials.map(material => (
                <MaterialCard 
                  key={material.id} 
                  material={material}
                  onCardClick={handleCardClick}
                />
              ))}
            </div>

            {/* 详情展开区域 */}
            <div className="space-y-4">
              {materials.filter(material => material.id !== 'screeningPrep').map(material => (
                <div key={material.id} id={`detail-${material.id}`}>
                  <ExpandableDetails
                    materialId={material.id}
                    isExpanded={expandedMaterialId === material.id}
                    onToggle={() => handleCardClick(material.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplicationTracker

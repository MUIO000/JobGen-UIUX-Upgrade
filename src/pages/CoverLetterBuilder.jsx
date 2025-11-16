import { useState } from 'react'
import StepsPanel from './CoverLetterBuilder/StepsPanel'
import TopActionBar from './CoverLetterBuilder/TopActionBar'
import PreviewPanel from './CoverLetterBuilder/PreviewPanel'
import NameLinkJobForm from './CoverLetterBuilder/NameLinkJobForm'
import CompanyHRForm from './CoverLetterBuilder/CompanyHRForm'
import YourDetailsForm from './CoverLetterBuilder/YourDetailsForm'
import LetterDetailsForm from './CoverLetterBuilder/LetterDetailsForm'

const CoverLetterBuilder = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [previewCollapsed, setPreviewCollapsed] = useState(false)
  const [lastSaved, setLastSaved] = useState(new Date())
  
  // Cover Letter 数据状态
  const [coverLetterData, setCoverLetterData] = useState({
    name: '',
    linkedJob: null,
    jobNotes: '',
    hrName: '',
    company: '',
    hrEmail: '',
    hrPhone: '',
    targetedJobTitle: '',
    firstName: 'Lucas',
    lastName: 'Thomas',
    email: 'caoshizhao1018@gmail.com',
    city: 'Sydney',
    citizenship: 'Australian',
    twitter: 'www.x.com/John',
    linkedin: 'https://www.linkedin.com/in/shizhao-cao-a08af',
    phone: '+61 432906890',
    country: 'Australia',
    website: 'https://www.johnsmith.com',
    github: 'www.github.com/john.smith',
    letterContent: ''
  })

  // 步骤配置
  const steps = [
    { id: 1, title: 'Name & Link Job', score: 5, maxScore: 5, required: true, completed: true },
    { id: 2, title: 'Company & HR Details', score: 8, maxScore: 10, required: true, completed: false },
    { id: 3, title: 'Your Details', score: 10, maxScore: 10, required: true, completed: true },
    { id: 4, title: 'Letter Details', score: 15, maxScore: 15, required: true, completed: true }
  ]

  // 计算总进度
  const totalScore = steps.reduce((sum, step) => sum + step.score, 0)
  const totalMaxScore = steps.reduce((sum, step) => sum + step.maxScore, 0)
  const progressPercentage = Math.round((totalScore / totalMaxScore) * 100)

  // 渲染当前步骤的表单
  const renderStepForm = () => {
    switch (currentStep) {
      case 1:
        return <NameLinkJobForm data={coverLetterData} onChange={setCoverLetterData} />
      case 2:
        return <CompanyHRForm data={coverLetterData} onChange={setCoverLetterData} />
      case 3:
        return <YourDetailsForm data={coverLetterData} onChange={setCoverLetterData} />
      case 4:
        return <LetterDetailsForm data={coverLetterData} onChange={setCoverLetterData} />
      default:
        return null
    }
  }

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* 顶部操作栏 */}
      <TopActionBar 
        progressPercentage={progressPercentage}
        lastSaved={lastSaved}
        coverLetterData={coverLetterData}
      />

      {/* 主内容区域 - 3栏布局 */}
      <div className="flex-1 flex overflow-hidden">
        {/* 左侧：步骤面板 */}
        <StepsPanel 
          steps={steps}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
        />

        {/* 中间：表单内容区域 */}
        <div className="flex-1 overflow-y-auto bg-white border-x border-slate-200">
          <div className="max-w-2xl mx-auto px-8 py-6">
            {renderStepForm()}
          </div>
        </div>

        {/* 右侧：预览面板 */}
        <PreviewPanel 
          coverLetterData={coverLetterData}
          collapsed={previewCollapsed}
          onToggleCollapse={() => setPreviewCollapsed(!previewCollapsed)}
        />
      </div>
    </div>
  )
}

export default CoverLetterBuilder


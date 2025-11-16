import { useState } from 'react'
import StepsPanel from './ResumeBuilder/StepsPanel'
import TopActionBar from './ResumeBuilder/TopActionBar'
import PreviewPanel from './ResumeBuilder/PreviewPanel'
import NameTemplateForm from './ResumeBuilder/NameTemplateForm'
import TargetedJobForm from './ResumeBuilder/TargetedJobForm'
import PersonalDetailsForm from './ResumeBuilder/PersonalDetailsForm'
import ProfessionalSummaryForm from './ResumeBuilder/ProfessionalSummaryForm'
import WorkExperienceForm from './ResumeBuilder/WorkExperienceForm'
import EducationForm from './ResumeBuilder/EducationForm'
import SkillsForm from './ResumeBuilder/SkillsForm'
import OptionalSectionsForm from './ResumeBuilder/OptionalSectionsForm'

const ResumeBuilder = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [previewCollapsed, setPreviewCollapsed] = useState(false)
  const [lastSaved, setLastSaved] = useState(new Date())
  
  // 简历数据状态
  const [resumeData, setResumeData] = useState({
    name: '',
    template: 'modern',
    targetJob: null,
    personalDetails: {
      phone: '',
      email: '',
      location: '',
      linkedin: ''
    },
    summary: '',
    experience: [],
    education: [],
    skills: [],
    optionalSections: {}
  })

  // 步骤配置
  const steps = [
    { id: 1, title: 'Name & Template', score: 5, maxScore: 5, required: true, completed: true },
    { id: 2, title: 'Targeted Job', score: 0, maxScore: 5, required: true, completed: false },
    { id: 3, title: 'Personal Details', score: 7, maxScore: 10, required: true, completed: false },
    { id: 4, title: 'Professional Summary', score: 15, maxScore: 15, required: true, completed: true },
    { id: 5, title: 'Work Experience', score: 30, maxScore: 30, required: true, completed: true },
    { id: 6, title: 'Education', score: 10, maxScore: 10, required: true, completed: true },
    { id: 7, title: 'Skills', score: 15, maxScore: 15, required: true, completed: true },
    { id: 8, title: 'Optional Sections', score: 10, maxScore: 10, required: false, completed: true }
  ]

  // 计算总进度
  const totalScore = steps.reduce((sum, step) => sum + step.score, 0)
  const totalMaxScore = steps.reduce((sum, step) => sum + step.maxScore, 0)
  const progressPercentage = Math.round((totalScore / totalMaxScore) * 100)

  // 渲染当前步骤的表单
  const renderStepForm = () => {
    switch (currentStep) {
      case 1:
        return <NameTemplateForm data={resumeData} onChange={setResumeData} />
      case 2:
        return <TargetedJobForm data={resumeData} onChange={setResumeData} />
      case 3:
        return <PersonalDetailsForm data={resumeData} onChange={setResumeData} />
      case 4:
        return <ProfessionalSummaryForm data={resumeData} onChange={setResumeData} />
      case 5:
        return <WorkExperienceForm data={resumeData} onChange={setResumeData} />
      case 6:
        return <EducationForm data={resumeData} onChange={setResumeData} />
      case 7:
        return <SkillsForm data={resumeData} onChange={setResumeData} />
      case 8:
        return <OptionalSectionsForm data={resumeData} onChange={setResumeData} />
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
        resumeData={resumeData}
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
          resumeData={resumeData}
          collapsed={previewCollapsed}
          onToggleCollapse={() => setPreviewCollapsed(!previewCollapsed)}
        />
      </div>
    </div>
  )
}

export default ResumeBuilder


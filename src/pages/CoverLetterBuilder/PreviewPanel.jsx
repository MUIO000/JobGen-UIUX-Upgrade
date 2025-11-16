import { useState } from 'react'

const PreviewPanel = ({ coverLetterData, collapsed, onToggleCollapse }) => {
  if (collapsed) {
    return (
      <div className="w-16 bg-white border-l border-slate-200 flex flex-col items-center py-6 gap-4">
        <button
          onClick={onToggleCollapse}
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          title="Expand Preview"
        >
          <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
        <div className="writing-mode-vertical text-sm font-semibold text-slate-600">
          Preview
        </div>
      </div>
    )
  }

  return (
    <div className="w-180 bg-slate-50 border-l border-slate-200 flex flex-col flex-shrink-0">
      {/* 简化的顶部栏 */}
      <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-900">📄 Cover Letter Preview</h3>
        <button
          onClick={onToggleCollapse}
          className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
          title="Collapse Preview"
        >
          <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* 预览内容区域 */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-4">
        <div 
          className="bg-white shadow-lg mx-auto"
          style={{ 
            width: '100%',
            aspectRatio: '210 / 297',
            padding: '20mm',
            maxWidth: '100%'
          }}
        >
          {/* Cover Letter 预览内容 */}
          <div className="space-y-6">
            {/* 头部 */}
            <div className="text-center">
              <h1 className="text-3xl font-bold text-slate-900 mb-1">
                {coverLetterData.firstName?.toUpperCase() || 'LUCAS'} {coverLetterData.lastName?.toUpperCase() || 'THOMAS'}
              </h1>
              <p className="text-sm font-semibold text-slate-700">
                {coverLetterData.targetedJobTitle?.toUpperCase() || 'SOFTWARE ENGINEER - CORE SERVICES'}
              </p>
            </div>

            {/* From 信息 */}
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-900">From</p>
              <p className="text-sm text-slate-700">{coverLetterData.firstName} {coverLetterData.lastName}</p>
              <p className="text-sm text-slate-700">{coverLetterData.targetedJobTitle || 'Software Engineer - Core Services'}</p>
              {coverLetterData.phone && <p className="text-sm text-slate-700">{coverLetterData.phone}</p>}
              {coverLetterData.email && <p className="text-sm text-slate-700">{coverLetterData.email}</p>}
              {coverLetterData.linkedin && <p className="text-sm text-slate-700">{coverLetterData.linkedin}</p>}
            </div>

            {/* To 信息 */}
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-900">To</p>
              <p className="text-sm text-slate-700">Dear Hiring Manager,</p>
              {coverLetterData.company && <p className="text-sm text-slate-700">{coverLetterData.company}</p>}
            </div>

            {/* 信件正文 */}
            <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
              {coverLetterData.letterContent || `Dear Hiring Manager, ${coverLetterData.company || 'Cuscal Limited'}

I am thrilled to apply for the ${coverLetterData.targetedJobTitle || 'Software Engineer'} position in the Core Services Domain at ${coverLetterData.company || 'Cuscal Limited'}. With a strong foundation in full-stack development and a passion for creating innovative solutions in the financial technology sector, I am excited about the opportunity to contribute to your team.

My relevant experience includes:

• Full-Stack Development: Developed and optimized a comprehensive online education platform using Vue3 and Spring Boot, enhancing performance and user experience for over 2,000 students.

• Database Management: Designed and implemented MySQL database schemas, which improved data retrieval efficiency by 25% and reduced server downtime incidents by 30% during a successful system migration to Alibaba Cloud.

• Technical Documentation: Prepared technical specifications and program design documents for various projects, ensuring alignment with user requirements and best practices.

• Software Testing: Conducted extensive functional and automated testing on multiple modules, systematically identifying and resolving software bugs, which resulted in a 20% reduction in query response time.

• Cloud Integration: Leveraged AWS services and cloud technologies to enhance application performance and scalability, ensuring seamless integration with key systems and improving operational effectiveness.

I am particularly attracted to ${coverLetterData.company || 'Cuscal'}'s commitment to innovation and its focus on delivering groundbreaking solutions. I would welcome the opportunity to discuss how my experience and vision align with your team's goals.

Thank you for considering my application. I am available for an interview at your convenience and look forward to the possibility of joining your dynamic team.`}
            </div>

            {/* 结尾 */}
            <div className="mt-8 space-y-1">
              <p className="text-sm text-slate-700">Sincerely,</p>
              <p className="text-sm font-semibold text-slate-900">{coverLetterData.firstName} {coverLetterData.lastName}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 底部操作按钮 */}
      <div className="bg-white border-t border-slate-200 p-4">
        <div className="flex gap-2">
          <button className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Optimise
          </button>
          <button className="flex-1 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            PDF
          </button>
        </div>
      </div>
    </div>
  )
}

export default PreviewPanel


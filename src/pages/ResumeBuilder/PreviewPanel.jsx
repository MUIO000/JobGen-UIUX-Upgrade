import { useState } from 'react'

const PreviewPanel = ({ resumeData, collapsed, onToggleCollapse }) => {
  const [zoom] = useState(1) // 固定缩放
  const [paperSize] = useState('A4') // 固定纸张尺寸

  // 计算 ATS 分数（示例）
  const atsScore = 95

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
        <h3 className="text-sm font-bold text-slate-900">📄 Resume Preview</h3>
        <div className="flex items-center gap-3">
          {/* 缩小的 ATS Score */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-lg">
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs font-bold text-green-700">ATS: {atsScore}%</span>
          </div>
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
      </div>

      {/* 预览内容区域 - 占据大部分空间 */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-4">
        <div 
          className="bg-white shadow-lg mx-auto"
          style={{ 
            width: '100%',
            aspectRatio: paperSize === 'A4' ? '210 / 297' : '8.5 / 11',
            padding: '10mm',
            maxWidth: '100%'
          }}
        >
          {/* 简历预览内容 */}
          <div className="space-y-4">
            {/* 头部 */}
            <div className="text-center border-b-2 border-slate-900 pb-4">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                {resumeData.name || 'LUCAS THOMAS'}
              </h1>
              <div className="text-sm text-slate-600 space-y-1">
                <p>+61 432906890 | Australia | linkedin.com/in/sh-cao-a0ba60332</p>
              </div>
            </div>

            {/* 专业摘要 */}
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2 uppercase border-b border-slate-300">
                Full Stack Developer
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                Dynamic Master of Information Technology graduate from the University of New South Wales, 
                bringing robust technical expertise and a passion for innovative solutions. Proven track 
                record in delivering projects on time and under budget, with a 20% increase in system 
                efficiency through strategic implementations.
              </p>
            </div>

            {/* 技能 */}
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2 uppercase border-b border-slate-300">
                Skills
              </h2>
              <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                  <span>C</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                  <span>Python</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                  <span>PyTorch</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
                  <span>Java</span>
                </div>
              </div>
            </div>

            {/* 工作经验 */}
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-2 uppercase border-b border-slate-300">
                Experience
              </h2>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">Web Developer Intern</h3>
                      <p className="text-sm italic text-slate-600">Tianjin Fusionsoft Technology Co, LTD</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-slate-900">Nov, 2024 - Nov, 2024</p>
                      <p className="text-sm italic text-slate-600">Tianjin, China</p>
                    </div>
                  </div>
                  <ul className="text-sm text-slate-700 space-y-1 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-1 h-1 rounded-full bg-slate-600 mt-2"></span>
                      <span>Involved in developing an investment promotion platform, focusing on database management and system integration.</span>
                    </li>
                  </ul>
                </div>
              </div>
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
            Tailor
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


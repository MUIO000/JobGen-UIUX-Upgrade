// 工作详情悬浮卡片组件
const JobDetailsModal = ({ job, isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 头部 */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-2xl font-bold text-slate-900">Job Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 内容 */}
        <div className="px-6 py-6 space-y-6">
          {/* About the Job */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-6 bg-indigo-600 rounded-full"></div>
              <h3 className="text-xl font-bold text-slate-900">About the Job</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">
              {job.description || 'The Product Designer will work alongside a team of engineers and other professionals to design products to specifications and deliver them on time. Responsibilities include conducting market research, translating research into feasible ideas and designs, collaborating with the design team, and using 3D modeling software for detailed designs.'}
            </p>
          </div>

          {/* Job Responsibilities */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-6 bg-purple-600 rounded-full"></div>
              <h3 className="text-xl font-bold text-slate-900">Job Responsibilities</h3>
            </div>
            <ul className="space-y-2.5">
              {(job.responsibilities || [
                'Conducting market research to determine gaps in the market.',
                'Translating research into feasible ideas and designs that will satisfy consumers.',
                'Clearly outlining specifications for the design team and stakeholders.',
                'Collaborating with the design team, and providing helpful feedback on processes.',
                'Engaging audiences and using sketches, blueprints, and prototypes to gather feedback.',
                'Using 3D modeling software for detailed designs.',
                'Producing prototypes and models to test functionality.',
                'Researching tools, materials and relevant design techniques.'
              ]).map((responsibility, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></span>
                  <span className="flex-1">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-6 bg-green-600 rounded-full"></div>
              <h3 className="text-xl font-bold text-slate-900">Requirements</h3>
            </div>
            <ul className="space-y-2.5">
              {(job.requirements || [
                'Bachelor\'s degree in industrial design, manufacturing, engineering, or a related field.',
                'A creative eye, good imagination, and vision.',
                'A firm grasp of market trends and consumer preferences.',
                'Practical experience using computer-aided design software.',
                'Good technical and IT skills.',
                'Excellent written and verbal communication skills.',
                'Strong planning and organizational abilities.',
                'Good problem-solving skills.'
              ]).map((requirement, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></span>
                  <span className="flex-1">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 底部操作栏 */}
        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-end gap-3 rounded-b-2xl">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 rounded-lg text-sm font-semibold transition-colors"
          >
            Close
          </button>
          <button
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Original Posting
          </button>
        </div>
      </div>
    </div>
  )
}

export default JobDetailsModal


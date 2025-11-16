const NameTemplateForm = ({ data, onChange }) => {
  const templates = [
    { id: 'modern', name: 'Modern', preview: '🎨', description: 'Clean and contemporary design' },
    { id: 'classic', name: 'Classic', preview: '📄', description: 'Traditional professional layout' },
    { id: 'creative', name: 'Creative', preview: '✨', description: 'Stand out with unique styling' },
    { id: 'minimal', name: 'Minimal', preview: '⚪', description: 'Simple and elegant' }
  ]

  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
            <span className="text-2xl">📝</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Step 1: Name & Template</h2>
            <p className="text-sm text-slate-600">Give your resume a name and choose a template</p>
          </div>
        </div>
      </div>

      {/* 简历名称 */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <label className="block mb-3">
          <span className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
            Resume Name
            <span className="text-red-500">*</span>
          </span>
          <input
            type="text"
            value={data.name}
            onChange={(e) => onChange({ ...data, name: e.target.value })}
            placeholder="e.g., Software Engineer at Google"
            className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <p className="text-xs text-slate-500 mt-2">💡 Tip: Include the job title and company for easy reference</p>
        </label>
      </div>

      {/* 模板选择 */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
          Choose Template
          <span className="text-red-500">*</span>
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => onChange({ ...data, template: template.id })}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                data.template === template.id
                  ? 'border-indigo-500 bg-indigo-50 shadow-md'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{template.preview}</span>
                <div>
                  <h4 className={`text-sm font-bold ${
                    data.template === template.id ? 'text-indigo-900' : 'text-slate-900'
                  }`}>
                    {template.name}
                  </h4>
                  <p className="text-xs text-slate-600">{template.description}</p>
                </div>
              </div>
              {data.template === template.id && (
                <div className="flex items-center gap-1 text-xs text-indigo-600 font-semibold">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Selected
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 提示信息 */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h5 className="text-sm font-semibold text-blue-900 mb-1">💡 Pro Tip</h5>
            <p className="text-xs text-blue-700 leading-relaxed">
              You can change the template anytime. Your content will be automatically adapted to the new design.
            </p>
          </div>
        </div>
      </div>

      {/* 底部按钮 */}
      <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
        <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-colors flex items-center gap-2">
          Next: Targeted Job
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default NameTemplateForm


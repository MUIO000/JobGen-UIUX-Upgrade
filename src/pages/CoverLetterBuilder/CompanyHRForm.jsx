const CompanyHRForm = ({ data, onChange }) => {
  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
            <span className="text-2xl">🏢</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Step 2: Company & HR Details</h2>
            <p className="text-sm text-slate-600">Enter company and HR contact information</p>
          </div>
        </div>
      </div>

      {/* 表单内容 */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              HR Name
            </label>
            <input
              type="text"
              value={data.hrName}
              onChange={(e) => onChange({ ...data, hrName: e.target.value })}
              placeholder="Hiring Manager"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Company <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={data.company}
              onChange={(e) => onChange({ ...data, company: e.target.value })}
              placeholder="Cuscal Limited"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              HR Email
            </label>
            <input
              type="email"
              value={data.hrEmail}
              onChange={(e) => onChange({ ...data, hrEmail: e.target.value })}
              placeholder="careers@cuscal.com.au"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              HR Phone
            </label>
            <input
              type="tel"
              value={data.hrPhone}
              onChange={(e) => onChange({ ...data, hrPhone: e.target.value })}
              placeholder="+61 4222 3232"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">
            Targeted Job Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.targetedJobTitle}
            onChange={(e) => onChange({ ...data, targetedJobTitle: e.target.value })}
            placeholder="Software Engineer - Core Services"
            className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* 提示信息 */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
          <p className="text-xs text-blue-700">
            💡 Changes made here will be reflected in the associated Job record.
          </p>
        </div>
      </div>

      {/* 底部按钮 */}
      <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
        <button className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-semibold transition-colors">
          Cancel
        </button>
        <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-colors flex items-center gap-2">
          Save
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default CompanyHRForm


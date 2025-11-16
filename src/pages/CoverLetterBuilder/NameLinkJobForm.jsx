const NameLinkJobForm = ({ data, onChange }) => {
  // 示例已保存的工作
  const savedJobs = [
    { id: 1, title: 'Software Engineer - Core Services', company: 'Cuscal Limited', location: 'Sydney, AU' },
    { id: 2, title: 'Senior Software Engineer', company: 'Google', location: 'Sydney, AU' },
    { id: 3, title: 'Full Stack Developer', company: 'Atlassian', location: 'Melbourne, AU' }
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
            <h2 className="text-2xl font-bold text-slate-900">Step 1: Name & Link Job</h2>
            <p className="text-sm text-slate-600">Give your cover letter a name and link to a job</p>
          </div>
        </div>
      </div>

      {/* 表单内容 */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        {/* Name */}
        <div>
          <label className="block mb-2">
            <span className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
              Name
              <span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              value={data.name}
              onChange={(e) => onChange({ ...data, name: e.target.value })}
              placeholder="e.g., Lucas-Software Engineer - Core Services-Cusc."
              className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </label>
        </div>

        {/* Linked Job */}
        <div>
          <label className="block mb-2">
            <span className="text-sm font-semibold text-slate-900 mb-2 flex items-center gap-2">
              Linked Job
              <span className="text-red-500">*</span>
            </span>
            <select
              value={data.linkedJob || ''}
              onChange={(e) => onChange({ ...data, linkedJob: e.target.value })}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="">Please choose the job to link to this Cover Letter</option>
              {savedJobs.map((job) => (
                <option key={job.id} value={job.id}>
                  {job.title} - {job.company}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Job Notes */}
        <div>
          <label className="block mb-2">
            <span className="text-sm font-semibold text-slate-900 mb-2">Job Notes</span>
            <textarea
              value={data.jobNotes}
              onChange={(e) => onChange({ ...data, jobNotes: e.target.value })}
              placeholder="Add any notes about this resume, such as insights from recruiters, key adjustments made, or important points to highlight during the interview."
              className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent min-h-[120px]"
            />
          </label>
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

export default NameLinkJobForm


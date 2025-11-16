const SkillsForm = ({ data, onChange }) => {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center">
            <span className="text-2xl">⚡</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Step 7: Skills</h2>
            <p className="text-sm text-slate-600">List your technical and soft skills</p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <p className="text-center text-slate-500 py-8">Skills form content here...</p>
        <button className="w-full px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold">
          + Add Skill
        </button>
      </div>

      <div className="flex justify-between gap-3 pt-4 border-t border-slate-200">
        <button className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-semibold transition-colors">
          Previous
        </button>
        <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-colors">
          Next: Optional Sections
        </button>
      </div>
    </div>
  )
}

export default SkillsForm


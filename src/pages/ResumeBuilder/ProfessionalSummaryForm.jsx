const ProfessionalSummaryForm = ({ data, onChange }) => {
  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
            <span className="text-2xl">📝</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Step 4: Professional Summary</h2>
            <p className="text-sm text-slate-600">Write a compelling summary of your experience</p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <textarea
          placeholder="Write your professional summary here..."
          className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[200px]"
        />
        <button className="mt-3 px-4 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-lg text-sm font-semibold">
          ✨ AI Generate
        </button>
      </div>

      <div className="flex justify-between gap-3 pt-4 border-t border-slate-200">
        <button className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-semibold transition-colors">
          Previous
        </button>
        <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-colors">
          Next: Work Experience
        </button>
      </div>
    </div>
  )
}

export default ProfessionalSummaryForm


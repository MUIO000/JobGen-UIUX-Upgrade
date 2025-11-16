const CustomQuestionCard = ({ id, data }) => {
  if (!data) return null

  return (
    <section id={id} className="scroll-mt-24">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          <div>
            <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">Custom</p>
            <h3 className="text-xl font-bold text-slate-900">{data.title}</h3>
            <p className="text-sm text-slate-600">{data.description}</p>
          </div>
          <button className="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-semibold">Hide</button>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="space-y-3">
            <label className="text-xs font-semibold text-slate-600 uppercase">Question</label>
            <input
              type="text"
              defaultValue={data.defaultQuestion}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., How do you evaluate success in this department?"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-600 uppercase">Category</label>
              <select className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                {data.categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-600 uppercase">Answer Format</label>
              <select className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                {data.answerFormats.map((format) => (
                  <option key={format}>{format}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-600 uppercase">Answer (Points / Notes)</label>
          <textarea
            defaultValue={data.defaultAnswer}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 min-h-[140px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded-xl bg-emerald-500 text-white text-sm font-semibold shadow hover:bg-emerald-600 transition-colors">
            Refine
          </button>
          <button className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors">
            Save
          </button>
        </div>
      </div>
    </section>
  )
}

export default CustomQuestionCard

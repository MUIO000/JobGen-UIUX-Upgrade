const TalkingPointsCard = ({ data }) => {
  if (!data) return null

  return (
    <section id="overview" className="scroll-mt-24">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">Overview</p>
            <h3 className="text-2xl font-bold text-slate-900">{data.title}</h3>
          </div>
          <button className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-semibold shadow hover:bg-indigo-700 transition-colors">
            Download Prep PDF
          </button>
        </div>

        <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-4">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <h4 className="text-sm font-semibold text-amber-700 mb-2">Why I'm a Great Fit for This Role</h4>
              <p className="text-slate-700 leading-relaxed">{data.fitReason}</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <h4 className="text-sm font-semibold text-slate-800 mb-2">Narrative</h4>
              <p className="text-slate-700 leading-relaxed">{data.narrative}</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h4 className="text-sm font-semibold text-slate-800">Key Points</h4>
              </div>
              <ul className="space-y-2">
                {data.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-indigo-100 bg-white p-4">
              <h4 className="text-sm font-semibold text-slate-800 mb-2">Top Matched Keywords</h4>
              <div className="flex flex-wrap gap-2">
                {data.keywords.map((keyword) => (
                  <span key={keyword} className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <h4 className="text-sm font-semibold text-slate-800 mb-2">Questions to Ask</h4>
              <ul className="space-y-2">
                {data.questionsToAsk.map((question, idx) => (
                  <li key={idx} className="text-sm text-slate-700">{question}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4">
              <h4 className="text-sm font-semibold text-rose-700 mb-2">Screening Tip</h4>
              <p className="text-slate-700 text-sm leading-relaxed">{data.tip}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TalkingPointsCard

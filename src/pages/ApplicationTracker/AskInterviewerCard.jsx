const AskInterviewerCard = ({ id, data }) => {
  if (!data?.length) return null

  return (
    <section id={id} className="scroll-mt-24">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">Wrap Up</p>
            <h3 className="text-xl font-bold text-slate-900">Questions to Ask at the End of Interview</h3>
            <p className="text-sm text-slate-600">Use these to uncover culture, expectations, and next steps — and show that you're thinking about impact.</p>
          </div>
        </div>

        <div className="space-y-3">
          {data.map((item, index) => (
            <div key={item.question} className="border border-slate-200 rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-slate-100 text-slate-600 font-semibold flex items-center justify-center">
                  {index + 1}
                </span>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-900">{item.question}</p>
                  <div className="grid gap-2 md:grid-cols-2">
                    <div className="rounded-xl bg-slate-50 p-3 text-xs text-slate-600">
                      <p className="font-semibold text-slate-800">Why ask:</p>
                      <p>{item.why}</p>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-3 text-xs text-slate-600">
                      <p className="font-semibold text-slate-800">Listen for:</p>
                      <p>{item.listenFor}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AskInterviewerCard

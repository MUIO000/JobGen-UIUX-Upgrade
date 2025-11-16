import { useState } from 'react'

const getAccent = (color) => {
  const map = {
    green: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      text: 'text-emerald-700',
      pill: 'bg-emerald-100 text-emerald-700'
    },
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-700',
      pill: 'bg-blue-100 text-blue-700'
    },
    amber: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-700',
      pill: 'bg-amber-100 text-amber-700'
    },
    rose: {
      bg: 'bg-rose-50',
      border: 'border-rose-200',
      text: 'text-rose-700',
      pill: 'bg-rose-100 text-rose-700'
    }
  }

  return map[color] || map.blue
}

const QuestionSectionCard = ({ id, title, subtitle, questions, color = 'blue', ctaLabel }) => {
  const accent = getAccent(color)
  const [expanded, setExpanded] = useState(questions.map((_, idx) => idx === 0))

  const toggleQuestion = (index) => {
    setExpanded((prev) => prev.map((state, idx) => (idx === index ? !state : state)))
  }

  return (
    <section id={id} className="scroll-mt-24">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-5 border-b border-slate-200">
          <div>
            <p className={`text-xs font-semibold uppercase tracking-widest ${accent.text}`}>{subtitle}</p>
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
          </div>
          {ctaLabel && (
            <button className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-emerald-500 text-white text-sm font-semibold shadow hover:bg-emerald-600 transition-colors">
              {ctaLabel}
            </button>
          )}
        </div>

        <div className="divide-y divide-slate-200">
          {questions.map((question, index) => (
            <div key={question.question} className="flex flex-col">
              <button
                onClick={() => toggleQuestion(index)}
                className="flex items-center justify-between w-full px-5 py-4 text-left hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${accent.pill}`}>Q{index + 1}</span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{question.question}</p>
                    {question.description && (
                      <p className="text-xs text-slate-500">{question.description}</p>
                    )}
                  </div>
                </div>

                <svg
                  className={`w-5 h-5 text-slate-400 transition-transform ${expanded[index] ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {expanded[index] && (
                <div className="px-5 pb-5 space-y-3">
                  {question.answerTip && (
                    <div className={`p-3 rounded-xl ${accent.bg} ${accent.border} border text-sm text-slate-700`}>
                      {question.answerTip}
                    </div>
                  )}
                  <textarea
                    className="w-full min-h-[120px] p-3 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder={question.placeholder || 'Add answer, key points, or prompts for AI...'}
                  ></textarea>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1.5 text-sm font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                      Generate with AI
                    </button>
                    <button className="px-3 py-1.5 text-sm font-semibold rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors">
                      Save Notes
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuestionSectionCard

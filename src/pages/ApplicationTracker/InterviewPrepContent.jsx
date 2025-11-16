import { useEffect, useMemo, useRef, useState } from 'react'
import TalkingPointsCard from './TalkingPointsCard'
import QuestionSectionCard from './QuestionSectionCard'
import CustomQuestionCard from './CustomQuestionCard'
import AskInterviewerCard from './AskInterviewerCard'
import InterviewStagesFlow from './InterviewStagesFlow'

const ScreeningPrepContent = ({ data }) => {
  const scrollContainerRef = useRef(null)
  const sections = useMemo(
    () => [
      { id: 'overview', label: 'Overview' },
      { id: 'self-intro', label: 'Self-Introduction' },
      { id: 'top-10-general', label: 'Top 10 General' },
      { id: 'top-10-technical', label: 'Top 10 Technical' },
      { id: 'top-10-job', label: 'Top 10 Job Specific' },
      { id: 'top-10-behavioral', label: 'Top 10 Behavioural' },
      { id: 'custom-questions', label: 'Custom Questions' },
      { id: 'ask-interviewer', label: 'Ask-the-Interviewer' }
    ],
    []
  )
  const [activeSectionId, setActiveSectionId] = useState(sections[0]?.id)

  useEffect(() => {
    if (!sections.length || !scrollContainerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSectionId(entry.target.id)
        })
      },
      { 
        root: scrollContainerRef.current,
        rootMargin: '-40% 0px -50% 0px' 
      }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  const handleNavClick = (id) => {
    setActiveSectionId(id)
    const element = document.getElementById(id)
    if (element && scrollContainerRef.current) {
      const containerTop = scrollContainerRef.current.getBoundingClientRect().top
      const elementTop = element.getBoundingClientRect().top
      const offset = elementTop - containerTop - 24 // 24px offset for top-4
      scrollContainerRef.current.scrollBy({
        top: offset,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div ref={scrollContainerRef} className="h-[calc(100vh-300px)] overflow-y-auto">
      <div className="space-y-6">
        {/* Interview Stages Flow - Full Width at Top */}
        <InterviewStagesFlow />

        {/* Main Content with Sidebar Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-6">
          <div className="flex-1 space-y-6">
            <TalkingPointsCard data={data.talkingPoints} />

          <section id="self-intro" className="scroll-mt-24">
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">Self-Introduction</p>
                  <h3 className="text-xl font-bold text-slate-900">{data.selfIntroduction.title}</h3>
                  <p className="text-sm text-slate-600">{data.selfIntroduction.guidance}</p>
                </div>
                <button className="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-semibold">Record Practice</button>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <div className="space-y-3">
                  <label className="text-xs font-semibold text-slate-600 uppercase">Prompt</label>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">{data.selfIntroduction.prompt}</div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-semibold text-slate-600 uppercase">Sample Opening</label>
                  <div className="rounded-2xl border border-indigo-100 bg-indigo-50/80 p-4 text-sm text-slate-700">
                    {data.selfIntroduction.sampleOpening}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <h4 className="text-sm font-semibold text-slate-800 mb-3">Suggested Flow</h4>
                <div className="grid gap-3 md:grid-cols-3">
                  {data.selfIntroduction.structure.map((step) => (
                    <div key={step} className="rounded-2xl border border-slate-200 p-3 text-sm text-slate-700">
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              <textarea
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 min-h-[160px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Draft your self-introduction here..."
              ></textarea>
            </div>
          </section>

          <QuestionSectionCard
            id="top-10-general"
            title="Top 10 - General Questions"
            subtitle="Confidence builders"
            questions={data.generalQuestions}
            color="green"
            ctaLabel="Answer All"
          />

          <QuestionSectionCard
            id="top-10-technical"
            title="Top 10 - Technical Questions"
            subtitle="Systems, scale, and craft"
            questions={data.technicalQuestions}
            color="blue"
          />

          <QuestionSectionCard
            id="top-10-job"
            title="Top 10 - Job Specific Questions"
            subtitle="Team rituals & ownership"
            questions={data.jobSpecificQuestions}
            color="amber"
          />

          <QuestionSectionCard
            id="top-10-behavioral"
            title="Top 10 - Behavioural Questions"
            subtitle="Your story bank"
            questions={data.behavioralQuestions}
            color="rose"
          />

          <CustomQuestionCard id="custom-questions" data={data.customQuestions} />

          <AskInterviewerCard id="ask-interviewer" data={data.askInterviewer} />
          </div>

          <aside className="w-full lg:w-64 xl:w-72 flex-shrink-0 self-start">
            <div className="sticky top-4 bg-white border border-slate-200 rounded-2xl shadow-sm p-4">
            <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Quick Jump</h4>
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={`group w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                    activeSectionId === section.id ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span>{section.label}</span>
                  <svg
                    className={`w-4 h-4 ${activeSectionId === section.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </nav>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default ScreeningPrepContent

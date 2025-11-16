const OptionalSectionsForm = ({ data, onChange }) => {
  const optionalSections = [
    { id: 'projects', icon: '📁', name: 'Projects', description: 'Showcase your portfolio projects' },
    { id: 'certifications', icon: '🏆', name: 'Certifications', description: 'Professional certifications' },
    { id: 'awards', icon: '🎖️', name: 'Awards & Scholarships', description: 'Recognition and honors' },
    { id: 'publications', icon: '📚', name: 'Publications', description: 'Research papers and articles' },
    { id: 'languages', icon: '🌍', name: 'Languages', description: 'Language proficiency' },
    { id: 'hobbies', icon: '🎨', name: 'Hobbies', description: 'Personal interests' }
  ]

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center">
            <span className="text-2xl">✨</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Step 8: Optional Sections</h2>
            <p className="text-sm text-slate-600">Add extra sections to stand out</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {optionalSections.map((section) => (
          <button
            key={section.id}
            className="p-4 bg-white border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 rounded-xl text-left transition-all"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{section.icon}</span>
              <div>
                <h4 className="text-sm font-bold text-slate-900">{section.name}</h4>
                <p className="text-xs text-slate-600 mt-1">{section.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-between gap-3 pt-4 border-t border-slate-200">
        <button className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-semibold transition-colors">
          Previous
        </button>
        <button className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-xl text-sm font-semibold transition-colors">
          ✓ Complete Resume
        </button>
      </div>
    </div>
  )
}

export default OptionalSectionsForm


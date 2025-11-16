const LetterDetailsForm = ({ data, onChange }) => {
  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
            <span className="text-2xl">✍️</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Step 4: Letter Details</h2>
            <p className="text-sm text-slate-600">Write your cover letter content</p>
          </div>
        </div>
      </div>

      {/* 富文本编辑器工具栏 */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
        <div className="flex flex-wrap items-center gap-2 mb-4 pb-4 border-b border-slate-200">
          {/* 字体选择 */}
          <select className="px-3 py-2 border border-slate-300 rounded-lg text-sm">
            <option>Sans Serif</option>
            <option>Serif</option>
            <option>Monospace</option>
          </select>

          {/* 格式化按钮 */}
          <div className="flex items-center gap-1 border-l border-r border-slate-200 px-2">
            <button className="p-2 hover:bg-slate-100 rounded-lg" title="Bold">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z" />
              </svg>
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-lg" title="Italic">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-lg" title="Underline">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19h14M5 5h14" />
              </svg>
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-lg" title="Strikethrough">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
              </svg>
            </button>
          </div>

          {/* 颜色选择 */}
          <div className="flex items-center gap-1 border-r border-slate-200 px-2">
            <button className="p-2 hover:bg-slate-100 rounded-lg" title="Text Color">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-lg" title="Highlight">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </button>
          </div>

          {/* 标题样式 */}
          <div className="flex items-center gap-1 border-r border-slate-200 px-2">
            <button className="px-2 py-1 text-xs font-semibold hover:bg-slate-100 rounded">H1</button>
            <button className="px-2 py-1 text-xs font-semibold hover:bg-slate-100 rounded">H2</button>
            <button className="px-2 py-1 text-xs font-semibold hover:bg-slate-100 rounded">H3</button>
            <button className="px-2 py-1 text-xs font-semibold hover:bg-slate-100 rounded">H4</button>
          </div>

          {/* 对齐 */}
          <div className="flex items-center gap-1 border-r border-slate-200 px-2">
            <button className="p-2 hover:bg-slate-100 rounded-lg" title="Align Left">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-lg" title="Align Center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-lg" title="Align Right">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-lg" title="Justify">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* 列表 */}
          <div className="flex items-center gap-1 px-2">
            <button className="p-2 hover:bg-slate-100 rounded-lg" title="Bullet List">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 6h13M8 12h13m-13 6h13M3 6h.01M3 12h.01M3 18h.01" />
              </svg>
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-lg" title="Numbered List">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
              </svg>
            </button>
            <button className="p-2 hover:bg-slate-100 rounded-lg" title="Link">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </button>
          </div>
        </div>

        {/* 文本编辑区域 */}
        <textarea
          value={data.letterContent}
          onChange={(e) => onChange({ ...data, letterContent: e.target.value })}
          placeholder="Dear Hiring Manager, Cuscal Limited

I am thrilled to apply for the Software Engineer position in the Core Services Domain at Cuscal Limited. With a strong foundation in full-stack development and a passion for creating innovative solutions in the..."
          className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[400px] resize-none"
        />
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

export default LetterDetailsForm


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import BlogHome from './pages/Blog/BlogHome'
import ArticlePage from './pages/Blog/ArticlePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blog" element={<BlogHome />} />
        <Route path="/blog/article/:articleId" element={<ArticlePage />} />
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
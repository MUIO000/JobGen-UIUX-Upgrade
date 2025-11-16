import { Routes, Route } from 'react-router-dom'
import TopNavbar from './TopNavbar'
import Sidebar from './Sidebar'
import JobsTrackerPage from '../pages/JobTracker'
import DashboardTabs from '../pages/HomePage'
import ApplicationTracker from '../pages/ApplicationTracker'
import InterviewPrep from '../pages/InterviewPrep'
import ResumeBuilder from '../pages/ResumeBuilder'
import CoverLetterBuilder from '../pages/CoverLetterBuilder'
import MyWorkspace from '../pages/MyWorkspace'

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* 顶部导航栏 */}
      <TopNavbar />
      
      {/* 主内容区域 */}
      <div className="flex flex-1 overflow-hidden">
        {/* 左侧边栏 */}
        <Sidebar />
        
        {/* 右侧内容区域 */}
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<DashboardTabs />} />
            <Route path="/home" element={<DashboardTabs />} />
            <Route path="/jobs-tracker" element={<JobsTrackerPage />} />
            <Route path="/application-tracker" element={<ApplicationTracker />} />
            <Route path="/interview-prep" element={<InterviewPrep />} />
            <Route path="/resumes-builder" element={<ResumeBuilder />} />
            <Route path="/cover-letter" element={<CoverLetterBuilder />} />
            <Route path="/my-workspace" element={<MyWorkspace />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default MainLayout

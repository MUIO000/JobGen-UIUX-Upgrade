import { Routes, Route } from 'react-router-dom'
import TopNavbar from './TopNavbar'
import Sidebar from './Sidebar'
import JobsTrackerPage from '../pages/JobTracker'
import DashboardTabs from '../pages/HomePage'

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
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default MainLayout

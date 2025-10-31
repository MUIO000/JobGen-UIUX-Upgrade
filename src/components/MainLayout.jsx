import TopNavbar from './TopNavbar'
import Sidebar from './Sidebar'
import JobsTrackerPage from './JobTracker'

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
        <JobsTrackerPage />
      </div>
    </div>
  )
}

export default MainLayout

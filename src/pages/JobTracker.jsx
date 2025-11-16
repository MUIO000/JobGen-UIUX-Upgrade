import { useState } from 'react'
import ViewToggle from '../components/ui/ViewToggle'
import JobDetailsModal from '../components/JobDetailsModal'

// 任务卡片组件
const TaskCard = ({ task, onTaskClick }) => {
  return (
    <div 
      className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-4 p-4 rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer hover:scale-[1.02]"
      onClick={() => onTaskClick && onTaskClick(task)}
    >
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3">
        <div className={`flex justify-center items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-1 px-3 py-1.5 rounded-full ${task.priorityBg}`}>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-1">
            <p className={`flex-grow-0 flex-shrink-0 text-xs font-semibold text-center ${task.priorityColor}`}>
              {task.priority}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
          <p className="self-stretch flex-grow-0 flex-shrink-0 text-base font-bold text-left text-slate-800 line-clamp-2">
            {task.title}
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 text-sm text-left text-slate-600 line-clamp-3">
            {task.description}
          </p>
        </div>
      </div>
    </div>
  )
}

// 列标题组件
const ColumnHeader = ({ title, bgColor, textColor }) => {
  return (
    <div className={`flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3 pl-2 pr-3 py-2 rounded-full ${bgColor}`}>
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-6 h-6 relative overflow-hidden rounded-full bg-white/20">
        <div className={`w-3 h-3 rounded-full ${textColor === 'text-white' ? 'bg-white' : 'bg-current'}`}></div>
      </div>
      <p className={`flex-grow-0 flex-shrink-0 text-base font-semibold text-left ${textColor}`}>
        {title}
      </p>
    </div>
  )
}

// List View Row Component
const ListViewRow = ({ task, status, onTaskClick }) => {
  const statusColors = {
    saved: 'bg-yellow-100 text-yellow-700',
    applied: 'bg-blue-100 text-blue-700',
    interviewing: 'bg-green-100 text-green-700',
    offer: 'bg-purple-100 text-purple-700'
  }

  return (
    <div 
      className="flex items-center gap-4 p-4 bg-white border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
      onClick={() => onTaskClick && onTaskClick(task)}
    >
      <div className="flex-1 min-w-[300px]">
        <h3 className="text-base font-bold text-slate-800 mb-1">{task.title}</h3>
        <p className="text-sm text-slate-600 line-clamp-1">{task.description}</p>
      </div>
      <div className="flex-shrink-0 w-32">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${statusColors[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      <div className="flex-shrink-0 w-24">
        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${task.priorityBg} ${task.priorityColor}`}>
          {task.priority}
        </span>
      </div>
    </div>
  )
}

// Card View Component
const CardViewItem = ({ task, status, onTaskClick }) => {
  const statusColors = {
    saved: 'border-yellow-400',
    applied: 'border-blue-400',
    interviewing: 'border-green-400',
    offer: 'border-purple-400'
  }

  return (
    <div 
      className={`bg-white rounded-xl border-l-4 ${statusColors[status]} shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer p-5`}
      onClick={() => onTaskClick && onTaskClick(task)}
    >
      <div className="flex items-start justify-between mb-3">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${task.priorityBg} ${task.priorityColor}`}>
          {task.priority}
        </span>
        <span className="text-xs font-medium text-gray-500 uppercase">
          {status}
        </span>
      </div>
      <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2">{task.title}</h3>
      <p className="text-sm text-slate-600 line-clamp-3">{task.description}</p>
    </div>
  )
}

// 主 JobTracker 组件
const JobTracker = () => {
  // View mode state
  const [viewMode, setViewMode] = useState('board') // 'board', 'list', 'card'
  
  // Job details modal state
  const [selectedJob, setSelectedJob] = useState(null)
  const [showJobDetails, setShowJobDetails] = useState(false)
  
  // 视图切换选项
  const viewOptions = [
    {
      value: 'board',
      label: 'Board View',
      icon: (isActive) => (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
          preserveAspectRatio="none"
        >
          <path
            d="M15.625 2.8125H4.375C3.9606 2.8125 3.56317 2.97712 3.27015 3.27015C2.97712 3.56317 2.8125 3.9606 2.8125 4.375V15.625C2.8125 16.0394 2.97712 16.4368 3.27015 16.7299C3.56317 17.0229 3.9606 17.1875 4.375 17.1875H15.625C16.0394 17.1875 16.4368 17.0229 16.7299 16.7299C17.0229 16.4368 17.1875 16.0394 17.1875 15.625V4.375C17.1875 3.9606 17.0229 3.56317 16.7299 3.27015C16.4368 2.97712 16.0394 2.8125 15.625 2.8125ZM15.3125 9.0625H10.9375V4.6875H15.3125V9.0625ZM9.0625 4.6875V9.0625H4.6875V4.6875H9.0625ZM4.6875 10.9375H9.0625V15.3125H4.6875V10.9375ZM10.9375 15.3125V10.9375H15.3125V15.3125H10.9375Z"
            fill={isActive ? '#4F46E5' : '#1E293B'}
          />
        </svg>
      )
    },
    {
      value: 'list',
      label: 'List View',
      icon: (isActive) => (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
          preserveAspectRatio="none"
        >
          <path
            d="M17.8125 10C17.8125 10.2486 17.7137 10.4871 17.5379 10.6629C17.3621 10.8387 17.1236 10.9375 16.875 10.9375H3.125C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2486 2.1875 10C2.1875 9.75136 2.28627 9.5129 2.46209 9.33709C2.6379 9.16127 2.87636 9.0625 3.125 9.0625H16.875C17.1236 9.0625 17.3621 9.16127 17.5379 9.33709C17.7137 9.5129 17.8125 9.75136 17.8125 10ZM3.125 5.9375H16.875C17.1236 5.9375 17.3621 5.83873 17.5379 5.66291C17.7137 5.4871 17.8125 5.24864 17.8125 5C17.8125 4.75136 17.7137 4.5129 17.5379 4.33709C17.3621 4.16127 17.1236 4.0625 16.875 4.0625H3.125C2.87636 4.0625 2.6379 4.16127 2.46209 4.33709C2.28627 4.5129 2.1875 4.75136 2.1875 5C2.1875 5.24864 2.28627 5.4871 2.46209 5.66291C2.6379 5.83873 2.87636 5.9375 3.125 5.9375ZM16.875 14.0625H3.125C2.87636 14.0625 2.6379 14.1613 2.46209 14.3371C2.28627 14.5129 2.1875 14.7514 2.1875 15C2.1875 15.2486 2.28627 15.4871 2.46209 15.6629C2.6379 15.8387 2.87636 15.9375 3.125 15.9375H16.875C17.1236 15.9375 17.3621 15.8387 17.5379 15.6629C17.7137 15.4871 17.8125 15.2486 17.8125 15C17.8125 14.7514 17.7137 14.5129 17.5379 14.3371C17.3621 14.1613 17.1236 14.0625 16.875 14.0625Z"
            fill={isActive ? '#4F46E5' : '#1E293B'}
          />
        </svg>
      )
    },
    {
      value: 'card',
      label: 'Card View',
      icon: (isActive) => (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
          preserveAspectRatio="none"
        >
          <path
            d="M7.8125 2.1875H5C4.5856 2.1875 4.18817 2.35212 3.89515 2.64515C3.60212 2.93817 3.4375 3.3356 3.4375 3.75V16.25C3.4375 16.6644 3.60212 17.0618 3.89515 17.3549C4.18817 17.6479 4.5856 17.8125 5 17.8125H7.8125C8.2269 17.8125 8.62433 17.6479 8.91735 17.3549C9.21038 17.0618 9.375 16.6644 9.375 16.25V3.75C9.375 3.3356 9.21038 2.93817 8.91735 2.64515C8.62433 2.35212 8.2269 2.1875 7.8125 2.1875ZM7.5 15.9375H5.3125V4.0625H7.5V15.9375ZM15 2.1875H12.1875C11.7731 2.1875 11.3757 2.35212 11.0826 2.64515C10.7896 2.93817 10.625 3.3356 10.625 3.75V16.25C10.625 16.6644 10.7896 17.0618 11.0826 17.3549C11.3757 17.6479 11.7731 17.8125 12.1875 17.8125H15C15.4144 17.8125 15.8118 17.6479 16.1049 17.3549C16.3979 17.0618 16.5625 16.6644 16.5625 16.25V3.75C16.5625 3.3356 16.3979 2.93817 16.1049 2.64515C15.8118 2.35212 15.4144 2.1875 15 2.1875ZM14.6875 15.9375H12.5V4.0625H14.6875V15.9375Z"
            fill={isActive ? '#4F46E5' : '#1E293B'}
          />
        </svg>
      )
    }
  ]
  
  // Job data
  const [tasks] = useState({
    todo: [
      {
        id: 1,
        priority: "Important",
        title: "Software Engineer - Core Services",
        description: "Cuscal Limited",
        priorityColor: "text-indigo-600",
        priorityBg: "bg-indigo-50"
      },
      {
        id: 2,
        priority: "Medium",
        title: "Frontend Developer - React",
        description: "Commonwealth Bank",
        priorityColor: "text-amber-500",
        priorityBg: "bg-amber-50"
      },
      {
        id: 3,
        priority: "Low",
        title: "DevOps Engineer",
        description: "WBS Technology",
        priorityColor: "text-rose-500",
        priorityBg: "bg-rose-50"
      }
    ],
    inProgress: [
      {
        id: 4,
        priority: "Important",
        title: "Full Stack Developer",
        description: "Infosys",
        priorityColor: "text-indigo-600",
        priorityBg: "bg-indigo-50"
      }
    ],
    done: [
      {
        id: 5,
        priority: "High Priority",
        title: "Product Manager",
        description: "InfoTrack AU",
        priorityColor: "text-rose-500",
        priorityBg: "bg-rose-50"
      },
      {
        id: 6,
        priority: "Low Priority",
        title: "UX Designer",
        description: "Atlassian",
        priorityColor: "text-green-500",
        priorityBg: "bg-green-50"
      }
    ],
    backlog: [
      {
        id: 7,
        priority: "High Priority",
        title: "Data Scientist",
        description: "Google",
        priorityColor: "text-rose-500",
        priorityBg: "bg-rose-50"
      },
      {
        id: 8,
        priority: "Low Priority",
        title: "Marketing Manager",
        description: "Meta",
        priorityColor: "text-green-500",
        priorityBg: "bg-green-50"
      },
      {
        id: 9,
        priority: "TBD",
        title: "Business Analyst",
        description: "Microsoft",
        priorityColor: "text-amber-500",
        priorityBg: "bg-amber-50"
      }
    ]
  })

  // Handle task click event
  const handleTaskClick = (task) => {
    // 将 task 转换为 job 格式
    const job = {
      title: task.title,
      company: task.description,
      description: task.description || '',
      responsibilities: task.responsibilities,
      requirements: task.requirements,
      priority: task.priority,
      ...task
    }
    setSelectedJob(job)
    setShowJobDetails(true)
  }

  return (
    <div className="flex-1 flex flex-col bg-white h-full overflow-hidden">
      {/* 页面标题和视图切换 */}
      <div className="flex-shrink-0 bg-gray-50 border-b border-gray-200 px-8 py-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Your jobs — tracked across all stages.
            </h1>
            <p className="text-sm text-gray-600">
              ✏️ Easily drag and drop jobs between stages — track your progress in real-time. Move, edit, or delete jobs anytime.
            </p>
          </div>
          
          {/* 视图切换按钮 */}
          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <ViewToggle
              options={viewOptions}
              value={viewMode}
              onChange={setViewMode}
            />
          </div>
        </div>
      </div>

      {/* 内容容器 - 可滚动 */}
      <div className="flex-1 overflow-y-auto bg-white">
        {viewMode === 'board' && (
          <div className="p-6">
            {/* Board View - flex nowrap，确保一行分布 */}
            <div className="flex gap-4 min-h-full flex-nowrap">
          
          {/* To Do 列 - 使用 flex-1 均匀分布 */}
          <div className="flex-1 min-w-[270px] flex justify-start items-start overflow-hidden gap-2.5 p-3 rounded-[32px] bg-gray-100">
            <div className="flex flex-col justify-start items-start flex-grow gap-4">
              <ColumnHeader 
                title="Saved" 
                bgColor="bg-red-500" 
                textColor="text-white"
              />
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3">
                {tasks.todo.map(task => (
                  <TaskCard key={task.id} task={task} onTaskClick={handleTaskClick} />
                ))}
              </div>
            </div>
          </div>

          {/* In Progress 列 */}
          <div className="flex-1 min-w-[270px] flex justify-start items-start overflow-hidden gap-2.5 p-3 rounded-[32px] bg-gray-100">
            <div className="flex flex-col justify-start items-start flex-grow gap-4">
              <ColumnHeader 
                title="Applied" 
                bgColor="bg-amber-500" 
                textColor="text-white"
              />
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3">
                {tasks.inProgress.map(task => (
                  <TaskCard key={task.id} task={task} onTaskClick={handleTaskClick} />
                ))}
              </div>
            </div>
          </div>

          {/* Done 列 */}
          <div className="flex-1 min-w-[270px] flex justify-start items-start overflow-hidden gap-2.5 p-3 rounded-[32px] bg-gray-100">
            <div className="flex flex-col justify-start items-start flex-grow gap-4">
              <ColumnHeader 
                title="Interviewing" 
                bgColor="bg-green-500" 
                textColor="text-white"
              />
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3">
                {tasks.done.map(task => (
                  <TaskCard key={task.id} task={task} onTaskClick={handleTaskClick} />
                ))}
              </div>
            </div>
          </div>

          {/* Backlog 列 */}
          <div className="flex-1 min-w-[270px] flex justify-start items-start overflow-hidden gap-2.5 p-3 rounded-[32px] bg-gray-100">
            <div className="flex flex-col justify-start items-start flex-grow gap-4">
              <ColumnHeader 
                title="Offer" 
                bgColor="bg-purple-500" 
                textColor="text-white"
              />
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3">
                {tasks.backlog.map(task => (
                  <TaskCard key={task.id} task={task} onTaskClick={handleTaskClick} />
                ))}
              </div>
            </div>
          </div>

            </div>
          </div>
        )}

        {/* List View */}
        {viewMode === 'list' && (
          <div className="p-6">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              {/* Header Row */}
              <div className="flex items-center gap-4 p-4 bg-gray-50 border-b border-gray-200 font-semibold text-sm text-gray-700">
                <div className="flex-1 min-w-[300px]">Job Title</div>
                <div className="flex-shrink-0 w-32">Status</div>
                <div className="flex-shrink-0 w-24">Priority</div>
              </div>
              
              {/* Data Rows */}
              {tasks.todo.map(task => (
                <ListViewRow key={task.id} task={task} status="saved" onTaskClick={handleTaskClick} />
              ))}
              {tasks.inProgress.map(task => (
                <ListViewRow key={task.id} task={task} status="applied" onTaskClick={handleTaskClick} />
              ))}
              {tasks.done.map(task => (
                <ListViewRow key={task.id} task={task} status="interviewing" onTaskClick={handleTaskClick} />
              ))}
              {tasks.backlog.map(task => (
                <ListViewRow key={task.id} task={task} status="offer" onTaskClick={handleTaskClick} />
              ))}
            </div>
          </div>
        )}

        {/* Card View */}
        {viewMode === 'card' && (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {tasks.todo.map(task => (
                <CardViewItem key={task.id} task={task} status="saved" onTaskClick={handleTaskClick} />
              ))}
              {tasks.inProgress.map(task => (
                <CardViewItem key={task.id} task={task} status="applied" onTaskClick={handleTaskClick} />
              ))}
              {tasks.done.map(task => (
                <CardViewItem key={task.id} task={task} status="interviewing" onTaskClick={handleTaskClick} />
              ))}
              {tasks.backlog.map(task => (
                <CardViewItem key={task.id} task={task} status="offer" onTaskClick={handleTaskClick} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 工作详情模态框 */}
      {selectedJob && (
        <JobDetailsModal 
          job={selectedJob}
          isOpen={showJobDetails}
          onClose={() => {
            setShowJobDetails(false)
            setSelectedJob(null)
          }}
        />
      )}
    </div>
  )
}

export default JobTracker

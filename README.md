# JobGen - Job Search Management Platform

A modern, comprehensive job search management platform built with React, Vite, and Tailwind CSS. This application helps job seekers organize their job applications, create professional resumes and cover letters, prepare for interviews, and track their job search progress all in one place.

## 🚀 Features

### Core Modules

- **📊 Dashboard** - Overview of your job search progress with KPIs, upcoming events, and job listings
- **💼 Jobs Tracker** - Manage and track job applications with kanban board, list, and card views
- **📝 Application Tracker** - Workspace dashboard for managing application materials and tasks
- **📄 Resume Builder** - Create and customize professional resumes with real-time preview
- **📧 Cover Letter Builder** - Craft tailored cover letters with rich text editor
- **🎯 Interview Prep** - Comprehensive interview preparation with practice questions and talking points
- **🗂️ My Workspace** - Centralized workspace to manage resumes, cover letters, and jobs

### Key Features

- ⚡ **Fast Development** - Built with Vite for lightning-fast HMR
- 🎨 **Modern UI/UX** - Beautiful, consistent design with Tailwind CSS
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- 🔄 **Real-time Preview** - Live preview for resumes and cover letters
- 📈 **Progress Tracking** - Visual progress indicators and completion scores
- 🎯 **ATS Optimization** - ATS score tracking for resume optimization
- 🔍 **Advanced Search** - Search and filter across all modules
- 💾 **Auto-save** - Automatic saving with visual feedback

## 🛠️ Tech Stack

- **React 18** - Modern UI library with hooks
- **Vite** - Next-generation frontend build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **JavaScript (ES6+)** - Modern JavaScript features

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone git@github.com:jobgenai/frontend.git
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── assets/                    # Static assets (images, icons)
│   └── Icon_Homepage/        # Homepage icons
├── components/               # Reusable components
│   ├── MainLayout.jsx        # Main layout with sidebar and routing
│   ├── Sidebar.jsx           # Navigation sidebar
│   ├── TopNavbar.jsx         # Top navigation bar
│   ├── JobDetailsModal.jsx   # Job details modal component
│   └── ui/                   # UI components
├── data/                     # Data files
│   └── screeningPrepData.json # Interview prep data
├── pages/                    # Page components
│   ├── HomePage.jsx          # Dashboard/Home page
│   ├── JobTracker.jsx        # Jobs tracking page
│   ├── ApplicationTracker.jsx # Application workspace
│   ├── InterviewPrep.jsx     # Interview preparation page
│   ├── ResumeBuilder.jsx     # Resume builder page
│   ├── CoverLetterBuilder.jsx # Cover letter builder page
│   ├── MyWorkspace.jsx       # Workspace management page
│   └── [Module]/             # Module-specific components
│       ├── ApplicationTracker/
│       ├── ResumeBuilder/
│       ├── CoverLetterBuilder/
│       └── MyWorkspace/
├── App.jsx                   # Root component
├── index.css                 # Global styles
└── main.jsx                  # Application entry point
```

## 📋 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🎯 Main Features

### Dashboard
- KPI cards showing job search statistics
- Progress overview with visual indicators
- Upcoming events countdown
- Recent job listings
- Quick access to all modules

### Jobs Tracker
- Multiple view modes (Board, List, Card)
- Drag-and-drop kanban board
- Status tracking (Saved, Applied, Interviewing, Offer)
- Job details modal
- Filter and search functionality

### Application Tracker
- Visual task dashboard with material cards
- Job selection sidebar
- Expandable detail sections
- Progress tracking for each material
- Quick navigation to interview prep

### Resume Builder
- Step-by-step resume creation (8 steps)
- Real-time preview panel
- ATS score tracking
- Multiple template options
- Collapsible step panel
- Auto-save functionality

### Cover Letter Builder
- 4-step creation process
- Rich text editor with formatting tools
- Real-time preview
- Link to job postings
- Company and HR details management

### Interview Prep
- Comprehensive question banks
- Talking points preparation
- Self-introduction guide
- Question categories:
  - General Questions
  - Technical Questions
  - Job-Specific Questions
  - Behavioral Questions
  - Custom Questions
- Interview stages flow visualization
- Sticky navigation sidebar

### My Workspace
- Centralized management interface
- Tabbed navigation (Resumes, Cover Letters, Jobs)
- Search and sort functionality
- Table views with action buttons
- Quick access to edit and delete

## 🎨 Design System

The application uses a consistent design system with:

- **Color Palette**: Indigo/Purple gradients for primary actions, slate for neutral elements
- **Typography**: Clear hierarchy with bold headings and readable body text
- **Components**: Rounded corners (rounded-xl, rounded-2xl), subtle shadows, hover effects
- **Spacing**: Consistent padding and margins using Tailwind's spacing scale
- **Icons**: SVG icons throughout for consistency

## 🔧 Development Guidelines

### Component Structure

Components follow a consistent structure:
- Functional components with hooks
- Props destructuring
- Conditional rendering
- Event handlers
- Tailwind CSS classes

### Styling Conventions

- Use Tailwind utility classes
- Maintain consistent spacing (p-4, p-6, gap-4, etc.)
- Use semantic color names (indigo, slate, green, red)
- Responsive design with breakpoint prefixes (md:, lg:)

### State Management

- React hooks (useState, useEffect, useMemo, useRef)
- Local component state
- Props for parent-child communication
- React Router for navigation state

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: Default styles
- Tablet: `md:` prefix (768px+)
- Desktop: `lg:` prefix (1024px+)
- Large Desktop: `xl:` prefix (1280px+)

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deploy

The `dist/` folder can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any web server

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

MIT License - see LICENSE file for details

## 🔗 Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

Built with ❤️ by the JobGen team

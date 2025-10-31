# React + Tailwind CSS 项目

这是一个使用 Vite、React 和 Tailwind CSS 构建的现代化前端项目模板。

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 📦 技术栈

- **React** - 用户界面库
- **Vite** - 快速的构建工具
- **Tailwind CSS** - 实用优先的 CSS 框架
- **JavaScript** - 编程语言

## 🎨 特性

- ⚡️ 极速的热重载开发体验
- 🎨 现代化的 UI 设计
- 📱 完全响应式布局
- 🛠️ 开箱即用的开发工具
- 🎯 TypeScript 支持（可选）

## 📁 项目结构

```
├── src/
│   ├── assets/          # 静态资源
│   ├── App.jsx          # 主应用组件
│   ├── index.css        # 全局样式（Tailwind CSS）
│   └── main.jsx         # 应用入口点
├── public/              # 公共静态文件
├── tailwind.config.js   # Tailwind CSS 配置
├── postcss.config.js    # PostCSS 配置
└── vite.config.js       # Vite 配置
```

## 🎯 开发指南

### 使用 Tailwind CSS

项目已经配置好了 Tailwind CSS，您可以直接在组件中使用 Tailwind 的实用类：

```jsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Hello Tailwind!
</div>
```

### 添加新组件

在 `src/components/` 目录下创建新的 React 组件：

```jsx
// src/components/Button.jsx
export default function Button({ children, onClick }) {
  return (
    <button 
      onClick={onClick}
      className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
    >
      {children}
    </button>
  )
}
```

## 📚 有用的资源

- [React 官方文档](https://react.dev/)
- [Tailwind CSS 官方文档](https://tailwindcss.com/)
- [Vite 官方文档](https://vitejs.dev/)

## 🤝 贡献

欢迎提交 Issues 和 Pull Requests！

## 📄 许可证

MIT License
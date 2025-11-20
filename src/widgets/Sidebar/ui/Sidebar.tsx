import { useState } from 'react'
import cls from './Sidebar.module.scss'

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleSidebar = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <aside className={`${cls.sidebar} ${collapsed ? cls.collapsed : ''}`}>
        <button onClick={toggleSidebar}>Toggle</button>
    </aside>
  )
}
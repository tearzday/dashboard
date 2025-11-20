import { useState } from 'react'
import cls from './Sidebar.module.scss'
import { Logo } from '@/shared/ui';
import { WalletList } from '@/entities/Wallets';

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleSidebar = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <aside className={`${cls.sidebar} ${collapsed ? cls.collapsed : ''}`}>
        <div className={cls.header}>
            <Logo />
        </div>
        <div className={cls.main}>
            <WalletList />
            <button onClick={toggleSidebar}>Toggle</button>
        </div>
    </aside>
  )
}
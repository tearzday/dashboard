import { useState } from 'react'
import cls from './Sidebar.module.scss'
import { Logo } from '@/shared/ui';
import { WalletList } from '@/entities/Wallets';
import { SidebarSection } from '../SidebarSection/SidebarSection';
import { SidebarData } from '../../model/const';

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
            {
              SidebarData.map(section => <SidebarSection title={section.title} items={section.items}/>)
            }
            <button onClick={toggleSidebar}>Toggle</button>
        </div>
    </aside>
  )
}
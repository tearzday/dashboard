import { Fragment, useState } from 'react'
import cls from './Sidebar.module.scss'
import { Devider, Icon, IconVariant, Logo, Typography } from '@/shared/ui';
import { WalletList } from '@/entities/Wallets';
import { SidebarSection } from '../SidebarSection/SidebarSection';
import { SidebarData } from '../../model/const';
import ArrowIcon from '@/shared/assets/icons/arrow.svg?react'
import ExitIcon from '@/shared/assets/icons/exit.svg'

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
              SidebarData.map((section, index) => {
                return (
                  <Fragment key={section.title}>
                    <SidebarSection title={section.title} items={section.items}/>
                    {index < SidebarData.length - 1 && <Devider />}
                  </Fragment>
                )
              })
            }
        </div>
        <div className={cls.footer}>
            <div className={cls.exit}>
              <img src={ExitIcon} alt='Exit icon'/>
              <Typography>Выйти</Typography>
            </div>
            <Icon className={`${cls['toggle-icon']} ${collapsed ? '' : cls['toggle-icon--close']}`} icon={ArrowIcon} variant={IconVariant.ACCENT} onClick={toggleSidebar}/>
        </div>
    </aside>
  )
}
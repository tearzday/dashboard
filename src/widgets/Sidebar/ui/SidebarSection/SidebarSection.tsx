import { Typography, TypographyTheme } from "@/shared/ui"
import { SidebarItem } from "../SidebarItem/SidebarItem"
import cls from './SidebarSection.module.scss'
import type { SidebarSectionType } from "../../model/type"

interface SidebarSectionProps extends SidebarSectionType {
  collapsed: boolean
}

export const SidebarSection = ({title, items, collapsed}: SidebarSectionProps) => {

  return (
    <div className={cls.section}>
        {collapsed && <Typography theme={TypographyTheme.ADDITIONAL} className={cls.title}>{title}</Typography>}
        {
            items.map((item) => <SidebarItem key={item.href} href={item.href} icon={item.icon} label={item.label} variant={item.variant} collapsed={collapsed}/>)
        }
    </div>
  )
}

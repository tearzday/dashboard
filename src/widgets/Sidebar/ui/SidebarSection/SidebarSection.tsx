import { Typography, TypographyTheme } from "@/shared/ui"
import { SidebarItem } from "../SidebarItem/SidebarItem"
import cls from './SidebarSection.module.scss'
import type { ISidebarSection } from "../../model/type"

export const SidebarSection = ({title, items}: ISidebarSection) => {

  return (
    <div className={cls.section}>
        <Typography theme={TypographyTheme.ADDITIONAL}>{title}</Typography>
        {
            items.map((item) => <SidebarItem key={item.href} href={item.href} icon={item.icon} label={item.label} variant={item.variant}/>)
        }
    </div>
  )
}

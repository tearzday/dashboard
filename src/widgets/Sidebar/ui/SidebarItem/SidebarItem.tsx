import { Typography, TypographyVariant } from '@/shared/ui'
import cls from './SidebarItem.module.scss'
import type { ISidebarItem } from '../../model/type';
import { SidbarItemVariant } from './const';

interface ISidebarItemProps extends ISidebarItem {
    variant?: SidbarItemVariant
}

export const SidebarItem = ({href, label, icon, variant = SidbarItemVariant.MEDIUM}: ISidebarItemProps) => {
  return (
    <div className={`${cls.item} ${cls[variant]}`}>
        <img src={icon} alt=''/>
        <Typography variant={TypographyVariant.BODY1}>{label}</Typography>
    </div>
  )
}

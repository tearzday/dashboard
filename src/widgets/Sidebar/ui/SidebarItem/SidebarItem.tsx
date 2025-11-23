import { Icon, Typography, TypographyTheme, TypographyVariant } from '@/shared/ui'
import cls from './SidebarItem.module.scss'
import type { SidebarItemType } from '../../model/type';
import { SidbarItemVariant } from './const';
import { NavLink } from 'react-router';

interface SidebarItemTypeProps extends SidebarItemType {
    variant?: SidbarItemVariant
}

export const SidebarItem = ({href, label, icon, variant = SidbarItemVariant.MEDIUM}: SidebarItemTypeProps) => {
  return (
    <NavLink to={href} className={({ isActive }: { isActive: boolean }) => `${cls.item} ${cls[variant]} ${isActive ? cls.active : ""}`}>
        {({ isActive }: { isActive: boolean }) => (
          <>
          <Icon icon={icon} className={`${cls.icon} ${isActive ? cls['icon--active'] : ''}`}/>
          <Typography
            variant={TypographyVariant.BODY1}
            theme={isActive ? TypographyTheme.ACCENT : TypographyTheme.DEFAULT}
          >
            {label}
          </Typography>
          </>
      )}
    </NavLink>
  )
}

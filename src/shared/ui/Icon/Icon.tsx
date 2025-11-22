import type { FC, SVGProps } from 'react';
import cls from './Icon.module.scss'
import { IconVariant } from './const';

interface IconProps{
  icon: FC<SVGProps<SVGSVGElement>>;
  variant?: IconVariant;
  badge?: boolean
}

export const Icon = ({icon: IconTag, variant, badge, ...otherProps}: IconProps) => {
  return (
    <div className={`${cls.icon} ${variant ? cls[variant] : ''}`} {...otherProps}>
        {badge && <div className={cls.badge}/>}
        <IconTag />
    </div>
  )
}

import { memo, type FC, type SVGProps } from 'react';
import cls from './Icon.module.scss'
import { IconVariant } from './const';

interface IconProps{
  icon: FC<SVGProps<SVGSVGElement>>;
  variant?: IconVariant;
  badge?: boolean;
  className?: string;
  onClick?: () => void;
}

export const IconComponent = ({icon: IconTag, variant, badge, className, onClick}: IconProps) => {
  return (
    <div className={`${cls.icon} ${variant ? cls[variant] : ''} ${className ? className : ''}`} onClick={onClick}>
        {badge && <div className={cls.badge}/>}
        <IconTag />
    </div>
  )
}

export const Icon = memo(IconComponent)
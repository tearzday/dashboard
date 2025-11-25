import type { FC, PropsWithChildren } from 'react';
import cls from './Card.module.scss';
import { CardRounded } from './const';

interface CardProps extends PropsWithChildren {
  className?: string;
  rounded?: CardRounded;
}

export const Card: FC<CardProps> = ({
  children,
  className,
  rounded = CardRounded.MD,
}) => {
  return (
    <div className={`${cls.card} ${className ?? ''} ${cls[rounded]}`}>
      {children}
    </div>
  );
};

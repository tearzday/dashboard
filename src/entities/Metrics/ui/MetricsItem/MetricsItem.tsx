import cls from './MetricsItem.module.scss';
import increaseIcon from '@/shared/assets/icons/increase.svg';
import decreaseIcon from '@/shared/assets/icons/decrease.svg';
import {
  Card,
  CardRounded,
  Icon,
  IconVariant,
  Typography,
  TypographyTheme,
  TypographyVariant,
  TypographyWeight,
} from '@/shared/ui';
import type { FC, SVGProps } from 'react';

interface MetricsItemProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: FC<SVGProps<SVGSVGElement>>;
}

export const MetricsItem = ({
  title,
  value,
  change,
  changeType,
  icon,
}: MetricsItemProps) => {
  const changeIcon = changeType === 'increase' ? increaseIcon : decreaseIcon;

  return (
    <Card className={cls.card} rounded={CardRounded.XXL}>
      <div className={cls.card__header}>
        <Typography>{title}</Typography>
        <Icon icon={icon} variant={IconVariant.CIRCLE_ACCENT} />
      </div>
      <div className={cls.card__body}>
        <Typography variant={TypographyVariant.H1}>{value}</Typography>
        <div className={cls.card__change}>
          <Typography
            weight={TypographyWeight.MEDIUM}
            theme={
              changeType === 'increase'
                ? TypographyTheme.SUCCESS
                : TypographyTheme.ERROR
            }
          >
            {change}
          </Typography>
          <img src={changeIcon} alt="Icon graph" />
        </div>
      </div>
    </Card>
  );
};

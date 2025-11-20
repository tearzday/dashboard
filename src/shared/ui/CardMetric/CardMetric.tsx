import cls from './CardMetric.module.scss'
import Finance from '@/shared/assets/icons/metrics/Finance.svg'
import increaseIcon from '@/shared/assets/icons/increase.svg'
import decreaseIcon from '@/shared/assets/icons/decrease.svg'
import { Typography } from '../Typography/Typography';
import { TypographyTheme, TypographyVariant, TypographyWeight } from '../Typography/const';

interface CardMetricProps {
    title: string;
    value: number;
    change: number;
    changeType: 'increase' | 'decrease'
}

export const CardMetric = ({title, value, change, changeType}: CardMetricProps) => {
  const changeIcon = changeType === 'increase' ? increaseIcon : decreaseIcon;

  return (
    <div className={cls.card}>
        <div className={cls.card__header}>
            <Typography>{title}</Typography>
            <div className={cls.card__icon}>
                <img src={Finance} alt='Флаг'/>
            </div>
        </div>
        <div className={cls.card__body}>
            <Typography variant={TypographyVariant.H1}>{value}</Typography>
            <div className={cls.card__change}>
                <Typography weight={TypographyWeight.MEDIUM} theme={changeType === 'increase' ? TypographyTheme.SUCCESS : TypographyTheme.SUCCESS}>{change}</Typography>
                <img src={changeIcon} alt='icon'/>
            </div>
        </div>
    </div>
  )
}

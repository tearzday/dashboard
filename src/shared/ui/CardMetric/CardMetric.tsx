import cls from './CardMetric.module.scss'
import Finance from '@/app/assets/icons/metrics/Finance.svg'
import increaseIcon from '@/app/assets/icons/increase.svg'
import decreaseIcon from '@/app/assets/icons/decrease.svg'

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
            <p>{title}</p>
            <div className={cls.card__icon}>
                <img src={Finance} alt='Флаг'/>
            </div>
        </div>
        <div className={cls.card__body}>
            <p className={cls.card__value}>{value}</p>
            <div className={cls.card__change}>
                <p className={changeType === 'increase' ? cls['card__change--increase'] : cls['card__change--decrease']}>{change}</p>
                <img src={changeIcon} alt='icon'/>
            </div>
        </div>
    </div>
  )
}

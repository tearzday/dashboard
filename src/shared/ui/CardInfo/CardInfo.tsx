import type { CardInfoItem } from '@/shared/types'
import cls from './CardInfo.module.scss'
import { CardInfoData } from '@/shared/const'

export const CardInfo = () => {
  return (
    <div className={cls.card}>
        <div className={cls.card__header}>
            <p className={cls.card__title}>Баланс</p>
            <p className={cls.card__title}>$ 150 345.00 </p>
        </div>
        <ul className={cls.card__list}>
            {
                CardInfoData.map(item => <CardItem title={item.title} value={item.value}/>)
            }
        </ul>
    </div>
  )
}

const CardItem = ({title, value}: CardInfoItem) => {
    return (
        <li className={cls.card__item}>
            <p className={cls['card__item-title']}>{title}:</p>
            <p className={cls['card__item-value']}>{value}</p>
        </li>
    )
}

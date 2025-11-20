import type { CardInfoItem } from '@/shared/types'
import cls from './CardInfo.module.scss'
import { CardInfoData } from '@/shared/const'
import { Typography } from '../Typography/Typography'
import { TypographyTheme, TypographyVariant, TypographyWeight } from '../Typography/const'

export const CardInfo = () => {
  return (
    <div className={cls.card}>
        <div className={cls.card__header}>
            <Typography variant={TypographyVariant.H2}>Баланс</Typography>
            <Typography variant={TypographyVariant.H2} theme={TypographyTheme.ACCENT}>$ 150 345.00</Typography>
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
            <Typography theme={TypographyTheme.ADDITIONAL}>{title}:</Typography>
            <Typography weight={TypographyWeight.MEDIUM}>{value}</Typography>
        </li>
    )
}

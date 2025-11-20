import { TypographyTheme, TypographyVariant } from '../Typography/const'
import { Typography } from '../Typography/Typography'
import cls from './CardCurrency.module.scss'
import Flag from '@/shared/assets/flags/russia.svg'

export const CardCurrency = () => {
  return (
    <div className={cls.card}>
        <div className={cls.card__header}>
            <img src={Flag} alt='Флаг'/>
            <Typography theme={TypographyTheme.ADDITIONAL}>USD</Typography>
        </div>
        <Typography variant={TypographyVariant.H4}>152,243</Typography>
    </div>
  )
}

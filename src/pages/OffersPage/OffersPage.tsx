import { Typography, TypographyVariant } from '@/shared/ui'
import cls from './OffersPage.module.scss'
import ArrowImage from '@/shared/assets/icons/arrow.svg'

export const OffersPage = () => {
  return (
    <div className={cls.page}>
      <div className={cls.chip}>
        <img className={cls.arrow} src={ArrowImage} alt='Arrow icon'/>
        <Typography variant={TypographyVariant.H2}>Офферы</Typography>
      </div>
    </div>
  )
}

import { Selector, Typography, TypographyVariant } from '@/shared/ui'
import cls from './OffersPage.module.scss'
import ArrowImage from '@/shared/assets/icons/arrow.svg'
import { Filters } from '@/entities/Filters'
import { useAppDispatch } from '@/app/hooks'
import { setCurrentFilter } from '@/entities/Filters/slice/FilterSlice'
import ExportIcon from '@/shared/assets/icons/export.svg?react'
import { OffersDashboard } from '@/features/OffersDashboard'
export const OffersPage = () => {
    const dispatch = useAppDispatch()

  return (
    <div className={cls.page}>
      <div className={cls.chip}>
        <img className={cls.arrow} src={ArrowImage} alt='Arrow icon'/>
        <Typography variant={TypographyVariant.H2}>Офферы</Typography>
      </div>
      <div className={cls.filters}>
          <Filters />
          <Selector selectorKey='export' icon={ExportIcon} placeholder='Экспорт' options={[]} onChange={(key, option) => dispatch(setCurrentFilter({ key, option }))}/>
      </div>
      <OffersDashboard />
    </div>
  )
}

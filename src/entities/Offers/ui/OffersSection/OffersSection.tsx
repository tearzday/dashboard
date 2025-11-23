import { Selector, Typography, TypographyVariant } from '@/shared/ui'
import cls from './OffersSection.module.scss'
import ExportIcon from '@/shared/assets/icons/export.svg?react'
import { useAppDispatch } from '@/app/hooks'
import { setCurrentFilter } from '@/entities/Filters/slice/FilterSlice'
import { OffersTable } from '../OffersTable/OffersTable'

export const OffersSection = () => {
  const dispatch = useAppDispatch()

  return (
    <div className={cls.container}>
        <div className={cls.header}>
            <Typography variant={TypographyVariant.H2}>Офферы</Typography>
            <Selector selectorKey='export' icon={ExportIcon} placeholder='Экспорт' options={[]} onChange={(key, option) => dispatch(setCurrentFilter({ key, option }))}/>
        </div>
        <div>
            <OffersTable />
        </div>
    </div>
  )
}
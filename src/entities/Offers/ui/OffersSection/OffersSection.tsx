import { Card, CardRounded, Selector, Typography, TypographyVariant } from '@/shared/ui'
import cls from './OffersSection.module.scss'
import ExportIcon from '@/shared/assets/icons/export.svg?react'
import { useAppDispatch } from '@/app/hooks'
import { setCurrentFilter } from '@/entities/Filters/slice/FilterSlice'
import { OffersTable } from '../OffersTable/OffersTable'
import { CardInfo } from '@/shared/ui/CardInfo/CardInfo'
import { PlatformsTable } from '../PlatformsTable/PlatformsTable'
import { useEffect, useState } from 'react'
import { OffersList } from '../OffersList/OffersList'
import { PlatformsList } from '../PlatformsList/PlatformsList'

export const OffersSection = () => {
  const [isMobile, setIsMobile] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Card rounded={CardRounded.XXL}>
        <div className={cls.header}>
            <Typography variant={TypographyVariant.H2}>Офферы</Typography>
            <Selector selectorKey='export' icon={ExportIcon} placeholder='Экспорт' options={[]} onChange={(key, option) => dispatch(setCurrentFilter({ key, option }))}/>
        </div>
          {isMobile ? < OffersList /> : <OffersTable />}
          <div className={cls.row}>
            <CardInfo />
            {isMobile ? < PlatformsList /> : <PlatformsTable />}
          </div> 
    </Card>
  )
}
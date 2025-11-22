import { Selector } from '@/shared/ui'
import cls from './Filters.module.scss'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { setCurrentFilter } from '../../slice/FilterSlice'
import { useEffect, type FC, type SVGProps } from 'react'
import { iconMap } from '../../model/const'

export const Filters = () => {
  const filterList = useAppSelector((state) => state.filter.filterList)
  const currentFilter = useAppSelector(state => state.filter.currentFilter)
  const dispatch = useAppDispatch()
  

  useEffect(() => {
    console.log('Active filters:', currentFilter)
  }, [currentFilter])


  return (
    <div className={cls.list}>
      {
        filterList.map(item => {
          const IconComponent = iconMap[item.key] as FC<SVGProps<SVGSVGElement>>

          return (
          <Selector 
            key={item.key}
            selectorKey={item.key} 
            placeholder={item.label} 
            icon={IconComponent}
            options={item.options} 
            onChange={(key, option) => dispatch(setCurrentFilter({ key, option }))}
          />
          )}
        )
      }
    </div>
  )
}

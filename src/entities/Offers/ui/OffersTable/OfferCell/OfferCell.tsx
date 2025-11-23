import { Checkbox, Icon, IconVariant, Typography, TypographyVariant } from '@/shared/ui'
import IconArrow from '@/shared/assets/icons/arrow.svg?react'
import cls from './OfferCell.module.scss'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { setCheckedItem } from '@/entities/Offers/slice/offersCheckboxSlice'

interface OfferCellProps {
    id: string,
    name: string
}

export const OfferCell = ({id, name}: OfferCellProps) => {
  const checkedItems = useAppSelector(state => state.offersCheckbox.checkedItems)
  const dispatch = useAppDispatch()

  console.log(id)
  return (
    <div className={cls.container}>
        <Checkbox checked={!!checkedItems[id]} onChange={(checked: boolean) => dispatch(setCheckedItem({ id, value: checked }))}/>
        <Icon icon={IconArrow} variant={IconVariant.BLACK}/>
        <Typography variant={TypographyVariant.BODY1}>{name}</Typography>
    </div>
  )
}

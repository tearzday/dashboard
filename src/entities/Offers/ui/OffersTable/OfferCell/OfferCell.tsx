import { Checkbox, Icon, IconVariant, Typography, TypographyVariant } from '@/shared/ui'
import { useState } from 'react'
import IconArrow from '@/shared/assets/icons/arrow.svg?react'
import cls from './OfferCell.module.scss'

interface OfferCellProps {
    id: string,
    name: string
}

export const OfferCell = ({id, name}: OfferCellProps) => {
  const [checked, setChecked] = useState<boolean>(false)
  console.log(id)
  return (
    <div className={cls.container}>
        <Checkbox checked={checked} onChange={setChecked}/>
        <Icon icon={IconArrow} variant={IconVariant.BLACK}/>
        <Typography variant={TypographyVariant.BODY1}>{name}</Typography>
    </div>
  )
}

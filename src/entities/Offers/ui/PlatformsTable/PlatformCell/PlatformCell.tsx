import { Checkbox, Icon, IconVariant } from '@/shared/ui'
import { platformIconsMap } from '@/entities/Offers/model/const'
import cls from './PlatformCell.module.scss'
import { useState } from 'react'

interface PlatformCellProps {
    id: string
}

export const PlatformCell = ({id}: PlatformCellProps) => {
    const [checked, setChecked] = useState<boolean>(false)
    console.log(id)
      
  return (
    <div className={cls.container}>
        <Checkbox checked={checked} onChange={setChecked}/>
        <Icon icon={platformIconsMap[id]} variant={IconVariant.CIRCLE}/>
    </div>
  )
}

import type { PlatformsData } from '@/entities/Offers/model/types'
import { Icon, IconVariant } from '@/shared/ui'
import { platformIconsMap } from '@/entities/Offers/model/const'
import cls from './Platforms.module.scss'

interface PlatformsProps {
  platforms: PlatformsData[]
}


export const Platforms = ({platforms}: PlatformsProps) => {
  return (
    <div className={cls.container}>
    {
        platforms.map(platform => <Icon key={platform.id} icon={platformIconsMap[platform.id]} variant={IconVariant.CIRCLE}/>)
    }
    </div>
  )
}

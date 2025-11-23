
import { Typography, TypographyVariant, TypographyWeight } from '@/shared/ui'
import cls from './StatusBadge.module.scss'
import { StatusBadgeValue, StatusBadgeType, StatusBadgeTextColor} from './const'

interface BadgeProps{
    status: StatusBadgeType
}

export const StatusBadge = ({status}: BadgeProps) => {
  return (
    <div className={`${cls.badge} ${cls[status]}`}>
        <Typography variant={TypographyVariant.BODY1} weight={TypographyWeight.MEDIUM} theme={StatusBadgeTextColor[status]}>
          {StatusBadgeValue[status]}
        </Typography>
    </div>
  )
}

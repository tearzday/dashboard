import { Table, Typography, TypographyVariant } from '@/shared/ui'
import cls from './PlatformsTable.module.scss'
import { TableHeaderPlatforms, TablePlatformsData } from '../../model/const'
import { useMemo } from 'react'
import { moneyConverter } from '@/shared/utils/moneyConverter'
import { PlatformCell } from './PlatformCell/PlatformCell'

export const PlatformsTable = () => {
  const platformsData = useMemo(() => {
    return TablePlatformsData.map(platform => {
        const {id, balance, accounts, avgcpc, avgcpa} = platform
        return [
            <PlatformCell id={id}/>,
            <Typography variant={TypographyVariant.BODY1}>{moneyConverter(balance)}</Typography>,
            <Typography variant={TypographyVariant.BODY1}>{accounts}</Typography>,
            <Typography variant={TypographyVariant.BODY1}>{moneyConverter(avgcpc)}</Typography>,
            <Typography variant={TypographyVariant.BODY1}>{moneyConverter(avgcpa)}</Typography>
        ]
    })

  }, [])
  return (
    <div className={cls.container}>
        <Typography variant={TypographyVariant.H2}>Рекламные площадки</Typography>
        <Table header={TableHeaderPlatforms} data={platformsData}/>
    </div>
  )
}

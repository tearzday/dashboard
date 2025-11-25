import { Card, Table, Typography, TypographyVariant } from '@/shared/ui'
import cls from './PlatformsTable.module.scss'
import { TableHeaderPlatforms } from '../../model/const'
import { useCallback, useMemo } from 'react'
import { moneyConverter } from '@/shared/utils/moneyConverter'
import { PlatformCell } from './PlatformCell/PlatformCell'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { sortPlatforms } from '../../slice/sortPlatformsSlice'

export const PlatformsTable = () => {
  const dispatch = useAppDispatch();
  const platforms = useAppSelector((state) => state.platformsSort.platforms);
  
    
  const sorted = useCallback(
    (key: string) => {dispatch(sortPlatforms(key))},
    [dispatch]
  );

  const platformsData = useMemo(() => {
    return platforms.map(platform => {
        const {id, balance, accounts, avgcpc, avgcpa} = platform
        return [
            <PlatformCell id={id}/>,
            <Typography variant={TypographyVariant.BODY1}>{moneyConverter(balance)}</Typography>,
            <Typography variant={TypographyVariant.BODY1}>{accounts}</Typography>,
            <Typography variant={TypographyVariant.BODY1}>{moneyConverter(avgcpc)}</Typography>,
            <Typography variant={TypographyVariant.BODY1}>{moneyConverter(avgcpa)}</Typography>
        ]
    })

  }, [platforms])

  return (
  <Card className={cls.container}>
        <Typography variant={TypographyVariant.H2}>Рекламные площадки</Typography>
        <Table header={TableHeaderPlatforms} headerClick={(sorted)} data={platformsData}/>
    </Card>
  )
}

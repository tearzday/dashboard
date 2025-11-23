import { Table, Typography, TypographyVariant } from '@/shared/ui'
import { useGetDashboardDataQuery } from '@/features/OffersDashboard/services/getDashboardData'
import { TableHeaderOffer } from '../../model/const'
import { StatusBadgeType } from '@/shared/ui/StatusBadge/const'
import { useMemo } from 'react'
import { moneyConverter } from '@/shared/utils/moneyConverter'
import { StatusCell } from './StatusCell/StatusCell'
import { PlatformsCell } from './PlatformsCell/PlatformsCell'
import { OfferCell } from './OfferCell/OfferCell'

export const OffersTable= () => {
  const { data } = useGetDashboardDataQuery();  

  const offersData = useMemo(() => {
    if (!data?.offers) return [];

    return data.offers.map((offer) => [
      <OfferCell name={offer.name} id={offer.id}/>,
      <PlatformsCell platforms={offer.platforms}/>,
      <Typography variant={TypographyVariant.BODY1}>{new Date(offer.launchDate).toLocaleDateString("ru-RU")}</Typography>,
      <Typography variant={TypographyVariant.BODY1}>{moneyConverter(offer.balance)}</Typography>,
      <Typography variant={TypographyVariant.BODY1}>{moneyConverter(offer.spent)}</Typography>,
        <StatusCell status={offer.status as StatusBadgeType}/>
    ]);
  }, [data]);

  return <Table header={TableHeaderOffer} data={offersData}/>
}
import { Table, Typography, TypographyVariant } from '@/shared/ui'
import { useGetDashboardDataQuery } from '@/features/OffersDashboard/services/getDashboardData'
import { TableHeaderOffer } from '../../model/const'
import { StatusBadgeType } from '@/shared/ui/StatusBadge/const'
import { useCallback, useEffect, useMemo } from 'react'
import { moneyConverter } from '@/shared/utils/moneyConverter'
import { StatusCell } from './StatusCell/StatusCell'
import { PlatformsList } from '../PlatformsList/PlatformsList'
import { OfferCell } from './OfferCell/OfferCell'
import { setOffers, sortOffers } from '../../slice/sortOffersSlice'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { toggleAll } from '../../slice/offersCheckboxSlice'

export const OffersTable= () => {
  const { data } = useGetDashboardDataQuery();
  const dispatch = useAppDispatch();
  const offers = useAppSelector((state) => state.offersSort.offers);
  const checkedItems = useAppSelector(state => state.offersCheckbox.checkedItems)

  
  useEffect(() => {
    if (data?.offers) {
      dispatch(setOffers(data.offers));
    }
  }, []);

  const sorted = useCallback(
    (key: string) => {dispatch(sortOffers(key))},
    [dispatch]
  );

  const checked = offers.length > 0 && offers.every(offer => checkedItems[offer.id]);

  const checkedAll = useCallback((value: boolean) => {
    dispatch(toggleAll({ ids: offers.map(item => item.id), value }))
  }, [dispatch, offers])

  const offersData = useMemo(() => {
    if (!offers) return [];

    return offers.map((offer) => [
      <OfferCell name={offer.name} id={offer.id}/>,
      <PlatformsList platforms={offer.platforms}/>,
      <Typography variant={TypographyVariant.BODY1}>{new Date(offer.launchDate).toLocaleDateString("ru-RU")}</Typography>,
      <Typography variant={TypographyVariant.BODY1}>{moneyConverter(offer.balance)}</Typography>,
      <Typography variant={TypographyVariant.BODY1}>{moneyConverter(offer.spent)}</Typography>,
      <StatusCell status={offer.status as StatusBadgeType}/>
    ]);
  }, [offers]);

  return <Table header={TableHeaderOffer} data={offersData} headerClick={sorted} chekedAll={checked} setCheckedAll={checkedAll}/>
}
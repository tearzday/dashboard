
import { MetricsList } from '@/entities/Metrics'
import { useGetDashboardDataQuery } from '../../services/getDashboardData'
import { OffersSection } from '@/entities/Offers'

export function OffersDashboard() {
  const { data, error, isLoading } = useGetDashboardDataQuery()

  return (
    <>
      {error ? (
        <>Error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
            <MetricsList />
            <OffersSection />
        </>
      ) : null}
    </>
  )
}
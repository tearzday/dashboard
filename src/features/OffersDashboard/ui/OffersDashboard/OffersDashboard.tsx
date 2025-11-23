
import { MetricsList } from '@/entities/Metrics'
import { useGetDashboardDataQuery } from '../../services/getDashboardData'
import { OffersSection } from '@/entities/Offers'

export function OffersDashboard() {
  const { data, error, isLoading } = useGetDashboardDataQuery()

  console.log(data)
  return (
    <div className="App">
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
    </div>
  )
}
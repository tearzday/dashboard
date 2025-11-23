
import { useGetDashboardDataQuery } from '../../services/getDashboardData'

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
            {data.currentMetrics.expenses.change}
        </>
      ) : null}
    </div>
  )
}
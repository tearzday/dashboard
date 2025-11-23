import { configureStore } from '@reduxjs/toolkit'
import filterReducer from '@/entities/Filters/slice/FilterSlice'
import { dashboardApi } from '@/features/OffersDashboard/services/getDashboardData'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dashboardApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
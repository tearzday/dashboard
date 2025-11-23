import { configureStore } from '@reduxjs/toolkit'
import filterReducer from '@/entities/Filters/slice/FilterSlice'
import { dashboardApi } from '@/features/OffersDashboard/services/getDashboardData'
import sortReducer from '@/entities/Offers/slice/sortSlice'
import offersCheckboxReducer from '@/entities/Offers/slice/offersCheckboxSlice'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    offersSort: sortReducer,
    offersCheckbox: offersCheckboxReducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dashboardApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
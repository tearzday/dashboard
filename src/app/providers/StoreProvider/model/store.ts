import { configureStore } from '@reduxjs/toolkit';
import filterReducer from '@/entities/Filters/slice/FilterSlice';
import { dashboardApi } from '@/features/OffersDashboard/services/getDashboardData';
import sortOffersReducer from '@/entities/Offers/slice/sortOffersSlice';
import sortPlatformsReducer from '@/entities/Offers/slice/sortPlatformsSlice';
import offersCheckboxReducer from '@/entities/Offers/slice/offersCheckboxSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    offersSort: sortOffersReducer,
    platformsSort: sortPlatformsReducer,
    offersCheckbox: offersCheckboxReducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dashboardApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

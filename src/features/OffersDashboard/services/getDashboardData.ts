import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IDashboardData } from '../model/types';

export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getDashboardData: builder.query<IDashboardData, void>({
      query: () => `mock-data.json`,
    }),
  }),
});

export const { useGetDashboardDataQuery } = dashboardApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),

  refetchOnMountOrArgChange: true,

  refetchOnReconnect: true,
  endpoints: () => ({}),
  tagTypes: []
});

export default baseApi;

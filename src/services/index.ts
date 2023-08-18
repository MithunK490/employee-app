import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
    prepareHeaders: (Headers) => {
      const token = localStorage.getItem('AuthToken');

      if (token) Headers.set('Authorization', token);

      return Headers;
    }
  }),
  refetchOnMountOrArgChange: true,

  refetchOnReconnect: true,
  endpoints: () => ({}),
  tagTypes: []
});

export default baseApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const employeeService = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getEmpolyees: builder.query({
      query: () => ({
        url: '/employees',
        method: 'GET'
      })
    })
  })
});

export const { useGetEmpolyeesQuery, useLazyGetEmpolyeesQuery } = employeeService;

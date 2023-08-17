import baseApi from '../../services';

export const employeesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query({
      query: () => ({
        url: '/employees',
        method: 'GET'
      })
    })
  })
});

export const { useGetEmployeeListQuery, useLazyGetEmployeeListQuery } = employeesApi;

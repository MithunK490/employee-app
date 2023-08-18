import baseApi from '../../services';

export const employeesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployee: builder.query({
      query: (id) => ({
        url: `/employees/${id}`,
        method: 'GET'
      })
    }),

    deleteEmloyee: builder.mutation({
      query: (id) => ({
        url: `/employees/${id}`,
        method: 'DELETE'
      })
    })
  })
});

export const { useGetEmployeeQuery, useLazyGetEmployeeQuery, useDeleteEmloyeeMutation } =
  employeesApi;

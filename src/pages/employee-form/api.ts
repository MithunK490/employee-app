import baseApi from '../../services';

export const employeesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createEmployee: builder.mutation({
      query: (body) => ({
        url: `/employees`,
        method: 'POST',
        body
      })
    })
  })
});

export const { useCreateEmployeeMutation } = employeesApi;

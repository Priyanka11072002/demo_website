
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/'}), // Configure the base URL
  endpoints: builder => ({
    // Define endpoints here
    getUsers: builder.query({
      query: () => ({
        url: 'users',
        method: 'GET',
  
      }),
    }),
    getOneTodo: builder.query({
        query: () => ({
          url: 'posts',
          method: 'GET',
    
        }),
      }),
  }),
  reducerPath: 'api', 
});
export const { useGetUsersQuery,useGetOneTodoQuery } = api;
export default api;
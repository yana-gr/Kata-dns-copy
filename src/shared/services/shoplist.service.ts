import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shopsApi = createApi({
  reducerPath: 'shopsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  endpoints: (builder) => ({
    getAllShops: builder.query({
      query: () => ({
        url: 'shops',
      }),
    }),
    getShopsFromSearch: builder.query({
      query: (term) => `shops?q=${encodeURIComponent(term)}`,
    }),
  }),
});

export const { useGetAllShopsQuery, useGetShopsFromSearchQuery } = shopsApi;

// export const shopsLocationApi = createApi({
//   reducerPath: 'shopsLocationApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
//   endpoints: (builder) => ({
//     getAllShops: builder.query({
//       query: () => ({
//         url: 'shops',
//       }),
//     }),
//   }),
// });

// export const {  } = shopsLocationApi;

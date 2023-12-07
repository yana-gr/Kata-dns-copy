import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const vacansiesSlide = createApi({
 reducerPath: 'vacancies',
 baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
 endpoints: (builder) => ({
  getVacansies: builder.query({
    query: () => ({
      url: 'vacancies'
    }),
 }),
 getVacanciesLike: builder.query({
  query: ({ city, name }) => {
    return `vacancies?city=${city}&name_like=${name}`;
  },
}),
   })
 }
 );

 export const { useGetVacansiesQuery, useGetVacanciesLikeQuery } = vacansiesSlide;
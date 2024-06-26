import { baseUrl } from '@/services/constant';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, { getState }) => {
      headers.set('x-api-key', `2dba9e60af46ba99ac8058ffdbb23b0d`);
      headers.set('x-client-id', `e4979660-06be-4f71-9171-24f9206730ab`);
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (build) => ({}),
});

import { IExtension } from '@/lib/types/extensions';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:3030';

export const extensionsApi = createApi({
  reducerPath: 'extensionsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllExtensions: builder.query<IExtension[], string>({
      query: (lang) => `extensions?lang=${lang}`,
    }),
  }),
});

export const { useGetAllExtensionsQuery } = extensionsApi;

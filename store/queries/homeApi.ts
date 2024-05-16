import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { HomeResponse } from "@/types/queries";

export const homeApi = createApi({
  reducerPath: "homeApi",
  tagTypes: ["Home"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/home`,
  }),
  endpoints: (builder) => ({
    home: builder.query<HomeResponse, void>({
      query: () => ({
        url: '',
        method: "GET",
      }),
      providesTags: ["Home"],
    }),
  }),
});

export const { useHomeQuery } = homeApi;

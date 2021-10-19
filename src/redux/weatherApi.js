import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = ``;

const createRequest = (url) => ({ url });

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: ({lat, lon}) => createRequest(),
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;

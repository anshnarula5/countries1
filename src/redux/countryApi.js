import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseUrl = 'https://restcountries.com/v3/all'

const createRequest = (url) => ({url})

export const countryApi = createApi({
    reducerPath: "countryApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCountries: builder.query({
            query : () => createRequest()
        })
    })
})

export const {useGetCountriesQuery} = countryApi



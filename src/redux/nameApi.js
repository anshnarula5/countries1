import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseUrl = 'https://restcountries.com/v3/name/'

const createRequest = (url) => ({url})

export const nameApi = createApi({
    reducerPath: "nameApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getName: builder.query({
            query : (name) => createRequest(`${name}`)
        })
    })
})

export const {useGetNameQuery} = nameApi



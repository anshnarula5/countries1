import {configureStore} from "@reduxjs/toolkit";
import { countryApi } from "./countryApi";
import {nameApi} from "./nameApi";

const store = configureStore({
    reducer: {
        [countryApi.reducerPath] : countryApi.reducer,
        [nameApi.reducerPath] : nameApi.reducer
    }
})

export default store
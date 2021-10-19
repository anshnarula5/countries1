import {configureStore} from "@reduxjs/toolkit";
import { countryApi } from "./countryApi";
import {nameApi} from "./nameApi";
import {weatherApi} from "./weatherApi";

const store = configureStore({
    reducer: {
        [countryApi.reducerPath] : countryApi.reducer,
        [nameApi.reducerPath] : nameApi.reducer,
        [weatherApi.reducerPath] : weatherApi.reducer
    }
})

export default store
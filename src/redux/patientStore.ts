import { configureStore } from "@reduxjs/toolkit";
import {patientSlice} from "./patientSlice";
const store = configureStore({
    reducer:{
        patient:patientSlice.reducer,
    }

});

export default store;
export type RootState = ReturnType<typeof store.getState>
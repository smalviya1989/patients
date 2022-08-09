import { configureStore } from "@reduxjs/toolkit";
import patientSlice from "./features/patientSlice";
export default configureStore({
    reducer:{
        app:patientSlice,
    }

});
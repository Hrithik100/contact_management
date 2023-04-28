import { configureStore } from "@reduxjs/toolkit";
import ContactReducer from "./reducers/contactSlice"

export default configureStore({
    reducer:{
        contact:ContactReducer
    }
})
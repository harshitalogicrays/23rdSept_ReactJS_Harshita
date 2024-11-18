import productSlice from "./productSlice";
import userSlice from "./userSlice";
import { configureStore } from "@reduxjs/toolkit"

const reduxstore =configureStore({
    reducer:{
        user:userSlice.reducer,
        product:productSlice.reducer
    }
})
export default reduxstore
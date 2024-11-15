import userSlice from "./userSlice";
import { configureStore } from "@reduxjs/toolkit"

const reduxstore =configureStore({
    reducer:{
        user:userSlice.reducer
    }
})
export default reduxstore
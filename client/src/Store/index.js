import {configureStore} from "@reduxjs/toolkit";
import productSlice from './Slices/productSlice'

const store = configureStore({
    reducer : {
        Products : productSlice
    }
})

export default store;
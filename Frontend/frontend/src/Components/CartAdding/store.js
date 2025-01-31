import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlicing'
const store =configureStore({
    reducer:{
        cart:cartReducer
    }
})
export default store
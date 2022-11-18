import {configureStore} from '@reduxjs/toolkit'
import ParamsSlice from './slices/params'
import CartSlice from './slices/cart'

const store = configureStore({
  reducer: {
    params: ParamsSlice.reducer,
    cart: CartSlice.reducer
  }
})

export default store


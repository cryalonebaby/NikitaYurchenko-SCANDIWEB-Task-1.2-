import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  currentPage: 0,
  currentCurrency: 0,
  currentProduct: '',
  currencies: []
}

const ParamsSlice = createSlice({
  name: 'params',
  initialState,
  reducers: {
    changePage(state, action) {
      state.currentPage = action.payload
    },
    changeCurrency(state, action) {
      state.currentCurrency = action.payload
    },
    changeProduct(state, action) {
      state.currentProduct = action.payload
    },
    addAllCurrencies(state, action) {
      state.currencies = action.payload
    }
  }
})

export const {changePage, changeCurrency, changeProduct, addAllCurrencies} = ParamsSlice.actions

export default ParamsSlice
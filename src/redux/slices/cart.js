import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  items: JSON.parse(sessionStorage.getItem('cart'))?.items || [],
  totalQuantity: JSON.parse(sessionStorage.getItem('cart'))?.totalQuantity || 0,
  showCart: false,
  cartTotalPrices: JSON.parse(sessionStorage.getItem('cart'))?.cartTotalPrices || []
}

// TODO divide actions into modules
const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      const newItem = action.payload

      const existingItem = state.items.find(item => (
        item.id === newItem.id &&
        item.currentAttr.capacity === newItem.currentAttr.capacity &&
        item.currentAttr.color === newItem.currentAttr.color &&
        item.currentAttr.size === newItem.currentAttr.size
      ))

      if(existingItem) {
        existingItem.quantity++
        existingItem.totalPrices.map((price, i) => price.amount += existingItem.prices[i].amount) // DOUBLE CURRENT ITEM'S TOTAL PRICES
        state.totalQuantity++ 
        newItem.prices.map((price, i) => state.cartTotalPrices[i] += price.amount) // ADD ALL PRICES TO CART TOTAL
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrices: JSON.parse(JSON.stringify(newItem.prices)) // CREATE COPY OF ITEMS IF FIRST ITEM
          
        })

        if(state.totalQuantity === 0) {
          state.cartTotalPrices = newItem.prices.map(price => price.amount) // IF NO ITEMS IN CART - INIT TOTAL CART PRICES
        } else {
          newItem.prices.map((price, i) => state.cartTotalPrices[i] += price.amount) // IF ARE ITEMS - JUST DOUBLE 
        }

        state.totalQuantity++
      }

      sessionStorage.setItem('cart', JSON.stringify({
        items: state.items, 
        totalQuantity: state.totalQuantity,
        cartTotalPrices: state.cartTotalPrices
      }))
    },
    remove(state, action) {
      const productIndex = action.payload

      const existingItem = state.items[productIndex]

      if(existingItem.quantity === 1) {
        // DELETE ITEM BY INDEX FROM ARRAY
        state.items = state.items.filter((item, i) =>
          productIndex !== i
        )
        existingItem.prices.map((price, i) => state.cartTotalPrices[i] -= price.amount)
      } else {      
        // CHANGE ITEM OPTIONS 
        existingItem.quantity--
        existingItem.totalPrices.map((price, i) => price.amount -= existingItem.prices[i].amount) // MINUS CURRENT ITEM'S TOTAL PRICES
        existingItem.prices.map((price, i) => state.cartTotalPrices[i] -= price.amount) // MINUS ALL PRICES OF TOTAL
      }

      state.totalQuantity--

      sessionStorage.setItem('cart', JSON.stringify({
        items: state.items, 
        totalQuantity: state.totalQuantity,
        cartTotalPrices: state.cartTotalPrices
      }))

      if(state.totalQuantity === 0) {
        sessionStorage.removeItem('cart')
      }
    },
    setShowCart(state) {
      state.showCart = !state.showCart
    },
    changeActive(state, action) {
      const {type, value, productIndex} = action.payload

      const currItem = state.items[productIndex]
      
      currItem.currentAttr[type] = value // CHANGE ACTIVE COLOR OR SIZE OR CAPACITY
    }
  }
})

export const {add, remove, setShowCart, changeActive} = CartSlice.actions

export default CartSlice
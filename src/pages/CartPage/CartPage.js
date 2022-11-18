import {
  PageWrapper,
  Title,
  CartContainer,
  ItemContainer,
  OrderContainer,
  OrderInfo,
  OrderLeft,
  OrderName,
  OrderPrice,
  OrderRight,
  Btn,
  BtnTitle
} from './style'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartCard from '../../components/CartCard/CartCard'

class CartPage extends Component {

  foundPercent(value, percent) {
    const res = (value * percent) / 100
    return Number(res.toFixed(2))
  }
  
  render() {
    
    const {currencies, currentCurrency, cartTotalPrices, items} = this.props

    const TAX = 21

    const currentCartTotal = cartTotalPrices[currentCurrency] 

    const percent = currentCartTotal 
      ? this.foundPercent(currentCartTotal, TAX) 
      : 0

    const totalWTax = (currentCartTotal && currentCartTotal > 0
      ? currentCartTotal + percent 
      : 0
    ).toFixed(2)
    
    return (
      <PageWrapper>
        <Title>Cart</Title>
        <CartContainer>
          {items.map((product, i) => {
            return (
              <ItemContainer key={i}>
                <CartCard productIndex={i} product={product}/>
              </ItemContainer>
            )
          })}

          <OrderContainer>
            <OrderInfo>
              <OrderLeft>
                <OrderName>Tax {TAX}%:</OrderName>
                <OrderName>Quantity:</OrderName>
                <OrderName>Total:</OrderName>
              </OrderLeft>
              <OrderRight>
                <OrderPrice>
                  {currencies[currentCurrency]?.symbol}
                  {percent}
                </OrderPrice>
                <OrderPrice>{this.props.totalQuantity}</OrderPrice>
                <OrderPrice>
                  {currencies[currentCurrency]?.symbol}
                  { totalWTax} {/*TODO ALWAYS POSITIVE NUMBER */}
                </OrderPrice>
              </OrderRight>
            </OrderInfo>
            <Btn>
              <BtnTitle>Order</BtnTitle>
            </Btn>
          </OrderContainer>

        </CartContainer>
      </PageWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.cart.items,
  totalQuantity: state.cart.totalQuantity,
  cartTotalPrices: state.cart.cartTotalPrices,
  currentCurrency: state.params.currentCurrency,
  currencies: state.params.currencies
})

export default connect(mapStateToProps)(CartPage)
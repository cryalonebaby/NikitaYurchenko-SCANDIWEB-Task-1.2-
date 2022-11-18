import {
  ButtonCart,
  CartAmount,
  AmountText,
  CartMenu,
  TitleContainer,
  CartTitle,
  ItemsAmount,
  ItemsContainer,
  TotalContainer,
  TotalTitle,
  TotalPrice,
  GhostBtn,
  GreenBtn,
  GreenTitle,
  GhostTitle,
  BottomContainer,
  FlexColumn,
  SymbolContainer
} from './style'
import { setShowCart, add, remove, changeActive } from '../../redux/slices/cart'
import React, { Component } from 'react'
import { BsCart2 } from 'react-icons/bs'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import OverlayCard from '../OverlayCard/OverlayCard'

class CartOverlay extends Component {

  render() {
    const {
      cartTotalPrices,
      totalQuantity: cartItemsAmount, 
      currentCurrency,
      currencies: symbols, 
      isCartOpen, 
      setShowCart
    } = this.props

    const cartTotalAmount = (cartTotalPrices.length > 0 
      ? cartTotalPrices[currentCurrency]
      : 0
    ).toFixed(2)

    return (
      <>
        <ButtonCart>
          <SymbolContainer onClick={this.props.setShowCart}>
            <BsCart2 size={25} fill={'#43464E'} />
            <CartAmount isItem={cartItemsAmount > 0}>
              <AmountText>{cartItemsAmount}</AmountText>
            </CartAmount>
          </SymbolContainer>
          <CartMenu isOpen={isCartOpen}>
            <FlexColumn>
              <TitleContainer>
                <CartTitle>My Bag.</CartTitle>
                <ItemsAmount>{cartItemsAmount} items</ItemsAmount>
              </TitleContainer>
              <ItemsContainer>
                {this.props.items.map((product, productIndex) => {
                  return (
                    <OverlayCard
                      product={product}
                      productIndex={productIndex}
                    />
                  )
                })}
              </ItemsContainer>
            </FlexColumn>

            <BottomContainer>
              <TotalContainer>
                <TotalTitle>Total</TotalTitle>
                <TotalPrice>
                  {symbols[currentCurrency]?.symbol}
                  {cartTotalAmount}
                </TotalPrice>
              </TotalContainer>

              <TotalContainer>
                <GhostBtn>
                  <Link to={'/cart'} onClick={setShowCart}>
                    <GhostTitle>View bag</GhostTitle>
                  </Link>
                </GhostBtn>
                <GreenBtn>
                  <GreenTitle>Check Out</GreenTitle>
                </GreenBtn>
              </TotalContainer>
            </BottomContainer>
          </CartMenu>
        </ButtonCart>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  isCartOpen: state.cart.showCart,
  items: state.cart.items,
  totalQuantity: state.cart.totalQuantity,
  cartTotalPrices: state.cart.cartTotalPrices,
  currentCurrency: state.params.currentCurrency,
  currencies: state.params.currencies
})

const mapDispatchToProps = (dispatch) => ({
    setShowCart: () => dispatch(setShowCart()),
    add: (product) => dispatch(add(product)),
    remove: (obj) => dispatch(remove(obj)),
    changeActive: (obj) => dispatch(changeActive(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlay)
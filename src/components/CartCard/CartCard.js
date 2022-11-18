import {
  Item,
  ItemLeft,
  TitleContainer,
  InfoBoldTitle,
  InfoTitle,
  Price,
  Category,
  CategoryContainer,
  CategoryName,
  SmallFlex,
  SizeBox,
  SizeTitle,
  ColorBox,
  Color,
  ItemRight,
  AmountContainer,
  AmountSwitcher,
  SwitcherText,
  AmountText,
  PicContainer,
  Pic,
  PicSwitchContainer,
  PicSwitch,
  PicSwitchText
} from './style'
import { add, remove, changeActive } from '../../redux/slices/cart'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class CartCard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentImg: 0
    }
  }

  nextImg(gallery) {
    if(this.state.currentImg === gallery.length - 1) {
      this.setState({
        currentImg: 0
      })
      return
    }
    this.setState({
      currentImg: this.state.currentImg + 1
    })
  }

  prevImg(gallery) {
    if(this.state.currentImg === 0) {
      this.setState({
        currentImg: gallery.length - 1
      })
      return
    }
    this.setState({
      currentImg: this.state.currentImg - 1
    })
  }

  handleChangeActive(type, value, productIndex) {
    const reqBody = {
      type,
      value,
      productIndex
    }
    this.props.changeActive(reqBody)
  }

  render() {
    const {product, currentCurrency, productIndex, add, remove} = this.props
    
    return (
      <Item onClick={() => console.log(productIndex)}>
        <ItemLeft>
          <TitleContainer>
            <InfoBoldTitle>{product.brand}</InfoBoldTitle>
            <InfoTitle>{product.name}</InfoTitle>
          </TitleContainer>
          <Price>
            {product.totalPrices[currentCurrency].currency.symbol}
            {product.totalPrices[currentCurrency].amount.toFixed(2)}
          </Price>
          <CategoryContainer>
          {product.attributes.map(attr => {

            if(attr.name === 'Size') return (
              <Category key={attr.id}>
                <CategoryName>{attr.name}:</CategoryName>
                <SmallFlex>
                {attr.items.map((item, i) => (
                  <SizeBox 
                    key={i} 
                    active={product.currentAttr.size === i}
                    onClick={() => this.handleChangeActive('size', i, productIndex)}
                  >
                    <SizeTitle>{item.value}</SizeTitle>
                  </SizeBox>
                ))}
                </SmallFlex>
              </Category>
            )

            if(attr.name === 'Capacity') return (
              <Category key={attr.id}>
                <CategoryName>{attr.name}:</CategoryName>
                <SmallFlex>
                {attr.items.map((item, i) => (
                  <SizeBox 
                    key={i} 
                    active={product.currentAttr.capacity === i}
                    onClick={() => this.handleChangeActive('capacity', i, productIndex)}
                  >
                    <SizeTitle>{item.value}</SizeTitle>
                  </SizeBox>
                ))}
                </SmallFlex>
              </Category>
            )

            if(attr.name === 'Color') return (
              <Category key={attr.id}>
                <CategoryName>{attr.name}:</CategoryName>
                <SmallFlex>
                {attr.items.map((item, i) => (
                  <ColorBox 
                    key={i} 
                    active={product.currentAttr.color === i}
                    onClick={() => this.handleChangeActive('color', i, productIndex)}
                  >
                    <Color color={item.value} />
                  </ColorBox>
                ))}
                </SmallFlex>
              </Category>
            )

          })}
          </CategoryContainer>
        </ItemLeft>
        <ItemRight>
          <AmountContainer>
            <AmountSwitcher onClick={() => add({...product, productIndex})}>
              <SwitcherText>+</SwitcherText>
            </AmountSwitcher>
            <AmountText>{product.quantity}</AmountText>
            <AmountSwitcher onClick={() => remove(productIndex)}>
              <SwitcherText>-</SwitcherText>
            </AmountSwitcher>
          </AmountContainer>
          <PicContainer>
            <Pic src={product.gallery[this.state.currentImg]} alt='cart product' />
            <PicSwitchContainer>
              <PicSwitch onClick={() => this.prevImg(product.gallery)}>
                <PicSwitchText>{'<'}</PicSwitchText>
              </PicSwitch>
              <PicSwitch onClick={() => this.nextImg(product.gallery)}>
                <PicSwitchText>{'>'}</PicSwitchText>
              </PicSwitch>
            </PicSwitchContainer>
          </PicContainer>
        </ItemRight>
      </Item>
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

const mapDispatchToProps = (dispatch) => ({
    add: (product) => dispatch(add(product)),
    remove: (obj) => dispatch(remove(obj)),
    changeActive: (obj) => dispatch(changeActive(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartCard)
import {
  SmallFlex,
  ItemsOptions,
  RightAmount,
  ItemsTitleContainer,
  ItemsTitleBox,
  ItemsTitle,
  ItemsPrice,
  OptionsName,
  OptionsAmount,
  SizeBox,
  SizeTitle,
  ColorContainer,
  ColorBox,
  Color,
  ImgContainer,
  ItemImg,
  CategoryContainer,
  FlexColumn
} from './style'
import { add, remove, changeActive } from '../../redux/slices/cart'
import React, { Component } from 'react'
import {connect} from 'react-redux'

class OverlayCard extends Component {

  handleChangeActive(type, value, productIndex) {
    const reqBody = {
      type,
      value,
      productIndex
    }
    this.props.changeActive(reqBody)
  }

  render() {
    const {product, productIndex, add, remove, currentCurrency} = this.props
    return (
      <SmallFlex key={productIndex}>
        <ItemsOptions>
          <FlexColumn>
            <ItemsTitleContainer>
              <ItemsTitleBox>
                <ItemsTitle>{product.brand} {product.name}</ItemsTitle>
              </ItemsTitleBox>
            </ItemsTitleContainer>
            <ItemsPrice>
              {product.totalPrices[currentCurrency]?.currency.symbol}
              {product.totalPrices[currentCurrency]?.amount.toFixed(2)}
            </ItemsPrice>
          </FlexColumn>
          <CategoryContainer>
            {product.attributes.map(attr => {
              if(attr.name === 'Size') {
                return (
                  <FlexColumn key={attr.id}>
                    <OptionsName>{attr.name}:</OptionsName>
                    <SmallFlex>
                      {attr.items.map((item, i) => (
                        <SizeBox 
                          key={item.id} 
                          active={product.currentAttr.size === i}
                          onClick={() => this.handleChangeActive('size', i, productIndex)}
                        >
                          <SizeTitle>{item.value}</SizeTitle>
                        </SizeBox>
                      ))}
                    </SmallFlex>
                  </FlexColumn>
                )
              }
              if(attr.name === 'Capacity') {
                return (
                  <FlexColumn key={attr.id}>
                    <OptionsName>{attr.name}:</OptionsName>
                    <SmallFlex>
                      {attr.items.map((item, i) => (
                        <SizeBox 
                          key={item.id} 
                          active={product.currentAttr.capacity === i}
                          onClick={() => this.handleChangeActive('capacity', i, productIndex)}
                        >
                          <SizeTitle>{item.value}</SizeTitle>
                        </SizeBox>
                      ))}
                    </SmallFlex>
                  </FlexColumn>
                )
              }
              if(attr.name === 'Color') {
                return (
                  <FlexColumn key={attr.id}>
                    <OptionsName>{attr.name}:</OptionsName>
                    <ColorContainer>
                      <SmallFlex>
                        {attr.items.map((item, i) => (
                          <ColorBox 
                            key={item.id} 
                            active={product.currentAttr.color === i}
                            onClick={() => this.handleChangeActive('color', i, productIndex)}
                          >
                            <Color color={item.value}/>
                          </ColorBox>
                        ))}
                      </SmallFlex>
                    </ColorContainer>
                  </FlexColumn>
                )
              }
            })}
          </CategoryContainer>
        </ItemsOptions>
        <SmallFlex>
          <RightAmount>
            <SizeBox onClick={() => add({...product, productIndex})}>
              <SizeTitle>+</SizeTitle>
            </SizeBox>
            <OptionsAmount>{product.quantity}</OptionsAmount>
            <SizeBox onClick={() => remove(productIndex)}>
              <SizeTitle>-</SizeTitle>
            </SizeBox>
          </RightAmount>
          <ImgContainer>
            <ItemImg src={product.gallery[0]} alt={'cart product'} />
          </ImgContainer>
        </SmallFlex>
      </SmallFlex>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (product) => dispatch(add(product)),
  remove: (obj) => dispatch(remove(obj)),
  changeActive: (obj) => dispatch(changeActive(obj))
})

export default connect(null, mapDispatchToProps)(OverlayCard)
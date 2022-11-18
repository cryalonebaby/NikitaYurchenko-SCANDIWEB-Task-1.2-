import {
  PageWrapper,
  SmallPics,
  Pic,
  BigContainer,
  BigPic,
  InfoContainer,
  TitleContainer,
  InfoBoldTitle,
  InfoTitle,
  CategoryContainer,
  Category,
  CategoryName,
  BigFlex,
  SmallFlex,
  SizeBox,
  SizeTitle,
  ColorBox,
  Color,
  Price,
  Btn,
  BtnTitle,
  Desc
} from './style'
import React, { Component } from 'react'
import {Query} from '@apollo/client/react/components'
import {connect} from 'react-redux'
import { add } from '../../redux/slices/cart';
import { ONE_PRODUCT } from '../../requests';
import DOMPurify from 'dompurify'

class ProductPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentImg: 0,
      currentAttr: {
        size: 0,
        color: 0,
        capacity: 0
      }
    }
  }

  changeCurrent(indx) {
    this.setState({
      currentImg: indx
    })
  }

  changeAttr(type, indx) {
    this.setState({
      currentAttr: {...this.state.currentAttr, [type]: indx}
    })
  }

  addToCart(product) {
    const finalProduct = {
      ...product,
      currentAttr: this.state.currentAttr
    }
    this.props.add(finalProduct)
  }

  render() {
    const productId = window.location.href.split('/')[4] // alternative to useParams hook

    const currentCurrencyNumber = this.props.currentCurrency
    return (
      <PageWrapper>
        <Query query={ONE_PRODUCT} variables={{productId: productId}}>
          {({loading, data}) => {
            if(loading) return <h1>Loading...</h1>

            const {product} = data
            
            return (
              <>
                <SmallPics>
                  {product.gallery.map((link, i) => (
                    <Pic onClick={() => this.changeCurrent(i)} key={i} src={link} alt='small pic' />
                  ))}
                </SmallPics>
                <BigContainer>
                  <BigPic src={product.gallery[this.state.currentImg]} alt='main pic' />
                  <InfoContainer>
                    <TitleContainer>
                      <InfoBoldTitle>{product.brand}</InfoBoldTitle>
                      <InfoTitle>{product.name}</InfoTitle>
                    </TitleContainer>
                    <CategoryContainer>
                      {product.attributes.map(attr => {
                        if(attr.name === 'Size') {
                          return (
                            <Category key={attr.id}>
                              <CategoryName>{attr.name}</CategoryName>
                              <BigFlex>
                                {attr.items.map((item, i) => (
                                  <SizeBox 
                                    key={item.id} 
                                    active={this.state.currentAttr.size === i}
                                    onClick={() => this.changeAttr('size', i)}
                                  >
                                    <SizeTitle>{item.value}</SizeTitle>
                                  </SizeBox>
                                ))}
                              </BigFlex>
                            </Category>
                          )
                        }
                        if(attr.name === 'Capacity') {
                          return (
                            <Category key={attr.id}>
                              <CategoryName>{attr.name}</CategoryName>
                              <BigFlex>
                                {attr.items.map((item, i) => (
                                  <SizeBox 
                                    key={item.id} 
                                    active={this.state.currentAttr.capacity === i}
                                    onClick={() => this.changeAttr('capacity', i)}
                                  >
                                    <SizeTitle>{item.value}</SizeTitle>
                                  </SizeBox>
                                ))}
                              </BigFlex>
                            </Category>
                          )
                        }
                        if(attr.name === 'Color') {
                          return (
                            <Category key={attr.id}>
                              <CategoryName>{attr.name}</CategoryName>
                              <SmallFlex>
                                {attr.items.map((item, i) => (
                                  <ColorBox 
                                    key={item.id}
                                    active={this.state.currentAttr.color === i}
                                    onClick={() => this.changeAttr('color', i)}
                                  >
                                    <Color color={item.value}/>
                                  </ColorBox>
                                ))}
                              </SmallFlex>
                            </Category>
                          )
                        }
                      })}
                    </CategoryContainer>
                    <Category>
                      <CategoryName>Price:</CategoryName>
                      <Price>
                        {product.prices[currentCurrencyNumber]?.currency.symbol}
                        {product.prices[currentCurrencyNumber]?.amount}
                      </Price>
                    </Category>
                    <Btn onClick={() => this.addToCart(product)}>
                      <BtnTitle>Add to Cart</BtnTitle>
                    </Btn>
                    <Desc dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(product.description) // sanitize html from server
                    }}/>
                  </InfoContainer>
                </BigContainer>
              </>
            )
          }}
        </Query>
        
      </PageWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  currentCurrency: state.params.currentCurrency,
})

const mapDispatchToProps = (dispatch) => ({
  add: (index) => dispatch(add(index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)
import {
  CardContent,
  CardTitle,
  CardPrice,
  CardContainer,
  CardImg,
  OutStock,
} from './style'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { changeProduct } from '../../redux/slices/params';

class Card extends Component {
  render() {
    const {isOut, image, id, name, symbol, price, changeProduct} = this.props
    return (
      <CardContent>
        {isOut ? (
          <>
            <CardContainer>
              <CardImg src={image} alt={'product'} outStock/>
            </CardContainer>
            <OutStock>OUT OF STOCK</OutStock>
          </>
        ) : ( 
            <Link to={`/product/${id}`}>
              <CardContainer onClick={() => changeProduct(this.props.id)}>
                <CardImg src={image} alt={'product'}/>
              </CardContainer>
            </Link>   
          )
        }
        <CardTitle>{name}</CardTitle>
        <CardPrice>{symbol}{price}</CardPrice>
      </CardContent>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeProduct: (index) => dispatch(changeProduct(index))
})

export default connect(null, mapDispatchToProps)(Card)
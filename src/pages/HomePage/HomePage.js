import {
  HomeWrapper,
  HomeTitle,
  Gallery
} from './style'
import React, { Component } from 'react'
import {Query} from '@apollo/client/react/components'
import Card from '../../components/Card/Card';
import {connect} from 'react-redux'
import { ALL_PRODUCTS } from '../../requests';

class HomePage extends Component {
  render() {
    const {currentPage, currentCurrency} = this.props
    const currentCurrencyNumber = currentCurrency
    return (
      <HomeWrapper>
        <HomeTitle>
          {currentPage}
        </HomeTitle>

        <Gallery>
          <Query query={ALL_PRODUCTS} variables={{input: {title: currentPage}}}>
            {({loading, data}) => {
              if(loading) return <h1>Loading...</h1>

              const {category} = data

              return category.products.map(product => (
                <Card 
                  id={product.id} 
                  key={product.id} 
                  isOut={!product.inStock}
                  image={product.gallery[0]}
                  brand={product.brand}
                  name={product.name}
                  price={product.prices[currentCurrencyNumber].amount}
                  symbol={product.prices[currentCurrencyNumber].currency.symbol}
                />
              ))
            }}
          </Query>
        </Gallery>
      </HomeWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  currentPage: state.params.currentPage,
  currentCurrency: state.params.currentCurrency,
})

export default connect(mapStateToProps)(HomePage)
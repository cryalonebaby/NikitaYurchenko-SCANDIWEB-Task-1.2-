import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import { Routes, Route, Navigate } from 'react-router-dom'
import React, { Component } from 'react'
import {Query} from '@apollo/client/react/components'
import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/ProductPage';
import CartPage from './pages/CartPage/CartPage';
import Navbar from './components/Navbar/Navbar';
import styled from 'styled-components'
import {connect} from 'react-redux'
import { setShowCart } from './redux/slices/cart';
import { GET_CATEGORIES } from './requests';
import './App.css';

const Overlay = styled.div`
  display: ${(props) => props.isOpen ? 'flex' : 'none'};

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: rgba(57, 55, 72, 0.22);
  z-index: 999;
`

const ContentWrapper = styled.div`
  position: relative;
  min-width: 24.125rem;
`

export const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
})

class App extends Component {
  render() {
    const isCartOpen = this.props.isCartOpen
    document.body.style.overflow = isCartOpen ? 'hidden' : '' // prevent scroll when cart is open
    return (
      <ApolloProvider client={client}>
        <Query query={GET_CATEGORIES}>
          {({loading, data}) => {
            if(loading) return <Navbar loading={true}/>

            const {categories} = data

            return (
              <>
              <Navbar categories={categories}/>
              <ContentWrapper>
                <Routes>
                  <Route exact path={'/'} element={<HomePage categories={categories}/>} />
                  <Route exact path={'/product/:id'} element={<ProductPage />} />
                  <Route exact path={'/cart'} element={<CartPage />} />
                  <Route path={'*'} element={<Navigate to={'/'} />} />
                </Routes>
                {isCartOpen ?
                  <Overlay isOpen={true} onClick={this.props.setShowCart}/> :
                  <Overlay isOpen={false}/>
                }
              </ContentWrapper>
              </>
            )
          }}
        </Query>
      </ApolloProvider>
    )
  }
}

const mapStateToProps = (state) => ({
  isCartOpen: state.cart.showCart
})

const mapDispatchToProps = (dispatch) => ({
  setShowCart: () => dispatch(setShowCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

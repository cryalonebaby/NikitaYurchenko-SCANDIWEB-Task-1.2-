import {
  NavWrapper,
  NavContainer,
  NavUl,
  NavUlLink,
  NavLink,
  ButtonsWrapper
} from './style'
import React, { Component } from 'react'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import CurrencySwitcher from '../CurrencyButton/CurrencySwitcher'
import CartOverlay from '../CartOverlay/CartOverlay'
import { Link } from 'react-router-dom'
import { Query } from '@apollo/client/react/components'
import {connect} from 'react-redux'
import {changePage} from '../../redux/slices/params'
import { GET_CURRENCY } from '../../requests'

class Navbar extends Component {

  render() {
    const {loading, categories, currentPage, changePage} = this.props
    
    return (
      <NavWrapper>
        <NavContainer>
          <NavUl>
            {loading ? 
              (
                <NavUlLink>
                  <NavLink>
                    Loading...
                  </NavLink>
                </NavUlLink>
              ) :
              categories.map((item, i) => {
                // TODO ACTIVE LINKS
                return (
                  <Link to={`/${item.name}`} key={item.name} >
                    <NavUlLink 
                      onClick={() => changePage(item.name)} 
                      active={item.name === currentPage || item.name === window.location.href.split('/')[3]}>
                      <NavLink>
                        {item.name}
                      </NavLink>
                    </NavUlLink>
                  </Link>
                )
              })
            }
          </NavUl>

          <Link to='/'>
            <Logo/>
          </Link>

          <ButtonsWrapper>
            <Query query={GET_CURRENCY}>
              {({loading, data}) => {
                if(loading) return <h5>Loading...</h5>

                const {currencies} = data

                return (
                  <>
                    <CurrencySwitcher 
                      currency={currencies} 
                    />
                    
                  </>
                )
              }}
            </Query>
            <CartOverlay/>
          </ButtonsWrapper>

        </NavContainer>
      </NavWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  currentPage: state.params.currentPage
})

const mapDispatchToProps = (dispatch) => ({
    changePage: (index) => dispatch(changePage(index)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
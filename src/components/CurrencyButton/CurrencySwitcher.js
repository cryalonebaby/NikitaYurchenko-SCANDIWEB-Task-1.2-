import {
  ButtonCurrency,
  BlockText,
  SymbolContainer,
  CurrencyMenu,
  MenuElement
} from './style'
import React, { Component } from 'react'
import {changeCurrency, addAllCurrencies} from '../../redux/slices/params'
import {RiArrowDownSLine} from 'react-icons/ri'
import {connect} from 'react-redux'

class CurrencySwitcher extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }

    this.handleOpen = this.handleOpen.bind(this)
  }
  handleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleChoose(id) {
    this.handleOpen()
    this.props.changeCurrency(id)
  }
  componentDidMount() {
    this.props.addAllCurrencies(this.props.currency)
  }
  render() {
    const {currentCurrency: currentCurrencyNumber, currency} = this.props
    return (
      <ButtonCurrency>
        <SymbolContainer onClick={this.handleOpen}>
          <BlockText>
            {currency[currentCurrencyNumber].symbol}
          </BlockText>
          <RiArrowDownSLine size={15}/>
        </SymbolContainer>
        <CurrencyMenu open={this.state.isOpen}>
          {currency.map((item, i) => (
            <MenuElement 
              key={i} 
              active={currentCurrencyNumber === i}
              onClick={() => this.handleChoose(i)} 
            >
              <BlockText>{item.symbol} {item.label}</BlockText>
            </MenuElement>
          ))}
        </CurrencyMenu>
      </ButtonCurrency>
    )
  }
}

const mapStateToProps = (state) => ({
  currentCurrency: state.params.currentCurrency
})

const mapDispatchToProps = (dispatch) => ({
    changeCurrency: (index) => dispatch(changeCurrency(index)),
    addAllCurrencies: (obj) => dispatch(addAllCurrencies(obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher)
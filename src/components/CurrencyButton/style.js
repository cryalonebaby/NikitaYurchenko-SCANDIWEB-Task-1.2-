import styled from 'styled-components'

// GENERIC STYLES

const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`

const cursorPointer = `
  &:hover {
    cursor: pointer
  }
`

// STYLED COMPONENT

export const ButtonCurrency = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.625rem;
`

export const BlockText = styled.span`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 160%;
  color: #1D1F22;
`

export const SymbolContainer = styled.div`
  ${flexCenter}
  ${cursorPointer}
  gap: 0.5rem;
`

export const CurrencyMenu = styled.div`
  display: ${(props) => props.open === true ? 'flex' : 'none'};

  position: absolute;
  top: 35px;
  left: -15px;
  flex-direction: column;
  width: 7.125rem;
  height: 12.563rem;
  padding: 1.063rem 0; 
  z-index: 99999;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
`

export const MenuElement = styled.div`
  ${flexCenter}
  ${cursorPointer}
  background: #fff;
  height: 2.813rem;
  ${(props) => props.active ? 'background: #EEEEEE' : ''};
`
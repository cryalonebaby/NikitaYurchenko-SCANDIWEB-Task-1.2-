import styled from 'styled-components'

// GENERIC STYLES

const flexColumn = `
  display: flex;
  flex-direction: column;
`

const ralewayNormal = `
  font-family: 'Raleway';
  font-style: normal;
`

const ralewayNormalUppercase = `
  ${ralewayNormal}
  text-transform: uppercase;
`

const raleway24Px = `
  ${ralewayNormal}
  font-size: 24px;
  
`

// STYLED COMPONENT

export const PageWrapper = styled.div`
  ${flexColumn}
  gap: 3.438rem;
  padding: 5rem 6.25rem 17.125rem 6.25rem;
  min-width: 24.125rem;
`

export const Title = styled.span`
  ${ralewayNormalUppercase}
  font-weight: 700;
  font-size: 32px;
  line-height: 125%;
  
`

export const CartContainer = styled.div`
  ${flexColumn}
  border-top: 1px solid #E5E5E5;
`

export const ItemContainer = styled.div`
  padding: 1.5rem 0 1rem 0;
  border-bottom: 1px solid #E5E5E5;
`

export const OrderContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const OrderInfo = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const OrderLeft = styled.div`
  ${flexColumn}
  gap: 0.5rem;
`

export const OrderName = styled.span`
  ${raleway24Px}
  font-weight: 400;
  line-height: 117%;
`

export const OrderPrice = styled.span`
  ${raleway24Px}
  font-weight: 700;
  line-height: 100%;
`

export const OrderRight = styled.div`
  ${flexColumn}
  justify-content: center;
  gap: 0.5rem;
`

export const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17.5rem;
  height: 2.688rem;
  background: #5ECE7B;
`

export const BtnTitle = styled.span`
  ${ralewayNormalUppercase}
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  color: #FFFFFF;
`
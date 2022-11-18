import styled from 'styled-components'

// GENERIC STYLES

const flexColumn = `
  display: flex;
  flex-direction: column;
`

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

const btnTitle = `
  text-transform: uppercase;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
`

const btnParams = `
  height: 2.688rem;
  width: 45%;
`

const normalTitle = `
  line-height: 160%;
  font-style: normal;
`

const ralewayNormal = `
${normalTitle}
font-family: 'Raleway';
`

const raleway16Px = `
${ralewayNormal}
font-size: 16px;
`

// STYLED COMPONENT

export const ButtonCart = styled.div`
  position: relative;
`

export const CartAmount = styled.div`
  display: ${(props) => props.isItem ? 'flex' : 'none'};
  justify-content: center;
  align-items: flex-start;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #000;
  position: absolute;
  top: -6px;
  right: -5px;
`

export const AmountText = styled.span`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
  font-family: 'Raleway', sans-serif;
`

export const CartMenu = styled.div`
  display: ${(props) => props.isOpen ? 'flex' : 'none'};;
  flex-direction: column;
  justify-content: space-between;

  position: fixed;
  right: 4.5rem;
  top: 5rem;
  padding: 2rem 1rem;
  background: white;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  min-width: 20.313rem;
  height: 42.313rem;
  overflow-y: scroll;
  z-index: 9999;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 2rem;
`

export const CartTitle = styled.span`
  ${raleway16Px}
  font-weight: 700;
`

export const ItemsAmount = styled.span`
  ${raleway16Px}
  font-weight: 400;
`

export const ItemsContainer = styled.div`
  ${flexColumn}
  gap: 2.5rem;
`

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TotalTitle = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 112%;
`

export const TotalPrice = styled.span`
  ${raleway16Px}
  font-weight: 700;
`

export const GhostBtn = styled.div`
  ${flexCenter}
  ${btnParams}
  background: #FFFFFF;
  border: 1px solid #1D1F22;
  & a {
    text-decoration: none;
  }
`

export const GreenBtn = styled.div`
  ${flexCenter}
  ${btnParams}
  background: #5ECE7B;
`

export const GreenTitle = styled.span`
  ${btnTitle}
  color: #FFFFFF;
`

export const GhostTitle = styled.span`
  ${btnTitle}
  color: #1D1F22;
`

export const BottomContainer = styled.div`
  ${flexColumn}
  margin-top: 2rem;
  gap: 2rem;
`

export const FlexColumn = styled.div`
  ${flexColumn}
`

export const SymbolContainer = styled.div`
  ${flexCenter}
  ${cursorPointer}
  gap: 0.5rem;
`
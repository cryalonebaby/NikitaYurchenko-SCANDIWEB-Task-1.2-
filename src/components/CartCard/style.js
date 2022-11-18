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

const ralewayNormal = `
  font-family: 'Raleway';
  font-style: normal;
`

// STYLED COMPONENT

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ItemLeft = styled.div`
  ${flexColumn}
`

export const TitleContainer = styled.div`
  ${flexColumn}
  gap: 1rem;
  margin-bottom: 1.25rem;
`

export const InfoBoldTitle = styled.span`
  ${ralewayNormal}
  font-weight: 600;
  font-size: 30px;
  line-height: 90%;
  
`

export const InfoTitle = styled.span`
  ${ralewayNormal}
  font-weight: 400;
  font-size: 30px;
  line-height: 90%;
  
`

export const Price = styled.span`
  ${ralewayNormal}
  font-weight: 700;
  font-size: 24px;
  line-height: 75%;
  margin-bottom: 1.25rem;
`

export const Category = styled.div`
  ${flexColumn}
  gap: 0.5rem;
`

export const CategoryContainer = styled.div`
  ${flexColumn}
  gap: 1rem;
`

export const CategoryName = styled.span`
  text-transform: uppercase;
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  
`

export const SmallFlex = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const SizeBox = styled.div`
  ${flexCenter}
  ${cursorPointer}
  width: 3.938rem;
  height: 2.813rem;
  border: 1px solid #1D1F22;
  background: ${(props) => props.active ? '#1D1F22' : '#fff'};
  color: ${(props) => props.active ? '#fff' : '#1D1F22'};
`

export const SizeTitle = styled.span`
  text-transform: uppercase;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 112%;
  letter-spacing: 0.05em;
`

export const ColorBox = styled.div`
  ${flexCenter} 
  ${cursorPointer}
  width: 36px;
  height: 36px;
  background: white;
  border: ${(props) => props.active ? '1px solid #5ECE7B' : 'none'};
`

export const Color = styled.div`
  width: 32px;
  height: 32px;
  background: ${(props) => props.color};
`

export const ItemRight = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const AmountContainer = styled.div`
  ${flexColumn}
  justify-content: space-between;
  align-items: center;
`

export const AmountSwitcher = styled.div`
  ${flexCenter}
  ${cursorPointer}
  width: 2.813rem;
  height: 2.813rem;
  background: #fff;
  border: 1px solid #1D1F22;
`

export const SwitcherText = styled.span`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 160%;
  
`

export const AmountText = styled.span`
  ${ralewayNormal}
  font-weight: 500;
  font-size: 24px;
  line-height: 160%; 
`

export const PicContainer = styled.div`
  width: 12.5rem;
  position: relative;
`

export const Pic = styled.img`
  width: 100%;
  height: 100%;
`

export const PicSwitchContainer = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  gap: 0.5rem;
`

export const PicSwitch = styled.div`
  ${flexCenter}
  ${cursorPointer}
  width: 1.5rem;
  height: 1.5rem;
  background: rgba(0, 0, 0, 0.73);
`

export const PicSwitchText = styled.span`
  text-transform: uppercase;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 112%;
  letter-spacing: 0.05em;
  color: #FFFFFF;
`
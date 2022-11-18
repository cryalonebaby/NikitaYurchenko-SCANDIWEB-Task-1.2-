import styled from 'styled-components'

// GENERIC STYLES

const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
`

const flexColumn = `
  display: flex;
  flex-direction: column;
`

const Raleway30Px = `
  font-family: 'Raleway';
  font-style: normal;
  font-size: 30px;
  line-height: 90%;
  color: #1D1F22;
`

const cursorPointer = `
  &:hover {
    cursor: pointer;
  }
`

// STYLED COMPONENTS

export const PageWrapper = styled.div`
  display: flex;
  gap: 2.5rem;
  padding: 5rem 13.938rem 11.125rem 6.25rem;
  min-width: 24.125rem;
`

export const SmallPics = styled.div`
  ${flexColumn}
  gap: 2.5rem;
`

export const Pic = styled.img`
  width: 5rem;
  ${cursorPointer}
`

export const BigContainer = styled.div`
  display: flex;
  gap: 6.25rem;
`

export const BigPic = styled.img`
  width: 38.125rem;
`

export const InfoContainer = styled.div`
  ${flexColumn}
`

export const TitleContainer = styled.div`
  ${flexColumn}
  gap: 1rem;
  margin-bottom: 2.688rem;
`

export const InfoBoldTitle = styled.span`
  ${Raleway30Px}
  font-weight: 600;
`

export const InfoTitle = styled.span`
  ${Raleway30Px}
  font-weight: 400;
`

export const CategoryContainer = styled.div`
  ${flexColumn}
  gap: 1.5rem;
  margin-bottom: 2.25rem;
`

export const Category = styled.div`
  ${flexColumn}
  gap: 0.5rem;
`

export const CategoryName = styled.span`
  text-transform: uppercase;
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  color: #1D1F22;
`

export const BigFlex = styled.div`
  display: flex;
  gap: 0.75rem;
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
  ${(props) => props.active ? 'background: #1D1F22; color: #FFFFFF;' : 'background: #FFFFFF; color: #1D1F22;'};
  border: 1px solid #1D1F22;
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

export const Price = styled.span`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 75%;
  color: #1D1F22;
`

export const Btn = styled.div`
  padding: 1rem 5.844rem;
  margin: 2rem 0 2.5rem 0;
  background: #5ECE7B;
  ${cursorPointer}
`

export const BtnTitle = styled.span`
  text-transform: uppercase;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  color: #FFFFFF;
`

export const Desc = styled.div`
  width: 18.25rem;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #1D1F22;
  & p{
    margin-top: 1rem;
    line-height: 159.96%;
  }
  & h1 {
    line-height: 159.96%;
  }
`
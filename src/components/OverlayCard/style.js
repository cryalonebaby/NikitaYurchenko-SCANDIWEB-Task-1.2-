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

export const SmallFlex = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const ItemsOptions = styled.div`
  ${flexColumn}
  justify-content: space-between;
`

export const RightAmount = styled.div`
  ${flexColumn}
  justify-content: space-between;
  align-items: center;
`

export const ItemsTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.25rem;
`

export const ItemsTitleBox = styled.div`
  width: 8.5rem;
`

export const ItemsTitle = styled.span`
  ${raleway16Px}  
  font-weight: 300;
`

export const ItemsPrice = styled.span`
  ${raleway16Px}
  font-weight: 500;
  margin-bottom: 0.5rem;
`

export const OptionsName = styled.span`
  ${ralewayNormal}
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 0.5rem;
`

export const OptionsAmount = styled.span`
  ${raleway16Px}
  font-weight: 500;
`

export const SizeBox = styled.div`
  ${flexCenter}
  ${cursorPointer}
  background: ${(props) => props.active ? '#1D1F22' : '#fff'};
  color: ${(props) => props.active ? '#fff' : '#1D1F22'};
  padding: 0 5px;
  height: 24px;
  border: 1px solid #1D1F22;
`

export const SizeTitle = styled.span`
  ${normalTitle}
  font-family: 'Source Sans Pro';
  font-weight: 400;
  font-size: 14px;
`

export const ColorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ColorBox = styled.div`
  ${flexCenter}
  ${cursorPointer}
  width: 20px;
  height: 20px;
  background: white;
  border: ${(props) => props.active ? '1px solid #5ECE7B' : 'none'};
`

export const Color = styled.div`
  width: 16px;
  height: 16px;
  background: ${(props) => props.color};
`

export const ImgContainer = styled.div`
  ${flexCenter}
  width: 10rem;
  overflow: hidden
`

export const ItemImg = styled.img`
  min-width: 100%;
  min-height: 100%;
`

export const CategoryContainer = styled.div`
  ${flexColumn}
  gap: 1rem;
`

export const FlexColumn = styled.div`
  ${flexColumn}
`
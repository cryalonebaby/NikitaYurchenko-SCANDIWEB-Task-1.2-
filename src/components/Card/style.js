import styled from 'styled-components'

// GENERIC STYLES

const raleway18Px = `
  font-family: 'Raleway';
  font-style: normal;
  font-size: 18px;
  line-height: 160%;
`

// STYLED COMPONENT

export const CardContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 24.125rem;
  min-width: 350px;
  padding: 1rem;
  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
`

export const CardTitle = styled.div`
  ${raleway18Px}
  font-weight: 300;
  margin-top: 1.5rem;
`

export const CardPrice = styled.span`
  ${raleway18Px}
  font-weight: 500;
`

export const CardContainer = styled.div`
  width: 22.25rem;
  height: 21.125rem;
`

export const CardImg = styled.img`
  height: 100%;
  max-width: 100%;
  opacity: ${(props) => props.outStock ? '0.5' : '1'};
`

export const OutStock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 160%;
  color: #8D8F9A;
`
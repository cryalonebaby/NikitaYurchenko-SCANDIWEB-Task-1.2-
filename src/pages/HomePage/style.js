import styled from 'styled-components'

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.438rem;
  padding: 5rem 6.313rem 11.938rem 6.313rem;
  min-width: 24.125rem;
`

export const HomeTitle = styled.span`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 160 %;
  color: #1D1F22;
  text-transform: capitalize;
`

export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 6rem;
  @media(max-width: 1550px) {
    justify-content: space-between;
  }
  @media(max-width: 1075px) {
    justify-content: center;
  }
`
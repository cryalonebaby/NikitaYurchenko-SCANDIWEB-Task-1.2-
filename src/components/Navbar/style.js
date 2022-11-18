import styled from 'styled-components'

// GENERIC STYLES

const raleway16PxUpper = `
  font-family: 'Raleway';
  font-style: normal;
  font-size: 16px;
  line-height: 120%;
  text-transform: uppercase;
`

// STYLED COMPONENT

export const NavWrapper = styled.div`
  display: flex;
  padding: 0 6.313rem 0 7.313rem;
  height: 5rem;
  min-width: 24.125rem;
  background: white;
`

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const NavUl = styled.ul`
  display: flex;
  align-self: flex-end;
  height: 3.25rem;
  margin-right: auto;
  & a{
    text-decoration: none;
  }
`

export const NavUlLink = styled.li`
  ${raleway16PxUpper}
  list-style: none;
  padding: 0 1rem;
  height: 100%;
  font-weight: 400;
  ${(props) => props.active ? 'border-bottom: 2px solid #5ECE7B;font-weight: 600;' : null}
  color: ${(props) => props.active ? '#5ECE7B' : '#1D1F22'};
  
`

export const NavLink = styled.span`
  ${raleway16PxUpper}
`

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  gap: 1.375rem;
`
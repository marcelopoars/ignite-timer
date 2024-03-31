import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 2rem;

    a {
      padding: 0.25rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      color: ${({ theme }) => theme['gray-100']};
      font-weight: 700;
      text-decoration: none;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      transition: border-color 0.2s;

      &:hover {
        border-bottom: 3px solid ${({ theme }) => theme['green-500']};
      }

      &.active {
        color: ${({ theme }) => theme['green-500']};
      }
    }
  }
`

export const LogoContainer = styled(NavLink)`
  display: flex;
  gap: 1rem;
  color: ${({ theme }) => theme['gray-100']};
  text-decoration: none;
  font-family: 'Roboto Mono', monospace;
`

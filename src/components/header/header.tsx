import { NavLink } from 'react-router-dom'
import { Scroll, Timer } from 'phosphor-react'

import { HeaderContainer } from './styles'

import igniteLogo from '../../assets/ignite-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={igniteLogo} alt="" aria-hidden />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} aria-label="Ir para página home" />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} aria-label="Ir para histórico" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

import { NavLink } from 'react-router-dom'
import { Scroll, Timer } from 'phosphor-react'

import { HeaderContainer, LogoContainer } from './styles'

import igniteLogo from '../../assets/ignite-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <img src={igniteLogo} alt="" aria-hidden />
        <h1>Ignite Timer</h1>
      </LogoContainer>

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={26} aria-label="Ir para página home" />
          Timer
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={26} aria-label="Ir para histórico" />
          History
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

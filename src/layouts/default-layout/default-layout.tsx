import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../../components'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <>
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
      <Footer />
    </>
  )
}

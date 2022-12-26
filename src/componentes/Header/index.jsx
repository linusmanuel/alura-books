import './style.css'
import Logo from '../logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'

function Header() {
  return (
    <header className="app-header">
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </header>
  )
}

export default Header
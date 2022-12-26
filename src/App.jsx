import './App.css';
import Logo from './componentes/logo'
import OpcoesHeader from './componentes/OpcoesHeader';
import Perfil from './images/perfil.svg'
import Sacola from './images/sacola.svg'

const icones = [Perfil, Sacola]

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Logo />
        <OpcoesHeader />
        <ul className='icones'>
          {
            icones.map( (icone) => (
              <li className='icone'><img src={icone} alt="" /></li>
            ))
          }
        </ul>

      </header>
    </div>
  );
}

export default App;

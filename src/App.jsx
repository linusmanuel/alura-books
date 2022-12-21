import './App.css';
import Logo from './componentes/logo'
import Perfil from './images/perfil.svg'
import Sacola from './images/sacola.svg'

const textOpcoes = ['Categorias', 'Minha Estande', 'Favoritos']
const icones = [Perfil, Sacola]

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Logo />
        <ul className="opcoes">
         {
          textOpcoes.map( (texto) => (
            <li className='opcao'>{texto}</li>
          ))
         }
        </ul>
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

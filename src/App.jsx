import './App.css';
import Logo from './componentes/logo'
import OpcoesHeader from './componentes/OpcoesHeader';
import IconesHeader from './componentes/IconesHeader';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Logo />
        <OpcoesHeader />
        <IconesHeader />
      </header>
    </div>
  );
}

export default App;

import './App.css';
import logo from './images/logo.svg';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="logo">
          <img src={logo}></img>
          <p><strong>Alura</strong>Books</p>
        </div>
      </header>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Calculator from './components/Calculator';
import Counter from './components/Counter';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL || ""}>
      <div className="App">
        <nav className="app-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/calculadora">Calculadora</NavLink>
          <NavLink to="/contador">Contador</NavLink>
          <NavLink to="/contato">Contato</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculadora" element={<Calculator />} />
          <Route path="/contador" element={<Counter />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

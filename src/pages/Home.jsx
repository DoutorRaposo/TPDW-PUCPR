import { Link } from 'react-router-dom';
import './Pages.css';

function Home() {
  return (
    <div className="page">
      <h1>Home</h1>
      <p>Bem-vindo à aplicação da disciplina TPDW-PUCPR!</p>
      <div className="page-buttons">
        <Link to="/contato" className="page-button">Contato</Link>
        <Link to="/sobre" className="page-button">Sobre</Link>
      </div>
    </div>
  );
}

export default Home;

import { Link } from 'react-router-dom';
import './Pages.css';

function Contato() {
  return (
    <div className="page">
      <h1>Contato</h1>
      <div className="page-info">
        <p><strong>Nome:</strong> Rafael de Andrade</p>
        <p><strong>E-mail:</strong> rafaelvga93@gmail.com</p>
      </div>
      <Link to="/" className="page-button">Voltar para Home</Link>
    </div>
  );
}

export default Contato;

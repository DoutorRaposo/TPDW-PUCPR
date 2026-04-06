import { Link } from 'react-router-dom';
import './Pages.css';

function NotFound() {
  return (
    <div className="page">
      <h1>404</h1>
      <p>Página não encontrada.</p>
      <Link to="/" className="page-button">Voltar para Home</Link>
    </div>
  );
}

export default NotFound;

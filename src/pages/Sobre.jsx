import { Link } from 'react-router-dom';
import './Pages.css';

function Sobre() {
  return (
    <div className="page">
      <h1>Sobre</h1>
      <div className="page-info">
        <p><strong>Linguagem:</strong> JavaScript</p>
        <p><strong>Biblioteca:</strong> React 19.2</p>
        <p><strong>Roteamento:</strong> React Router Dom 6.30</p>
        <p><strong>Bundler:</strong> Create React App (react-scripts 5.0)</p>
        <p><strong>Node.js:</strong> v18+</p>
      </div>
      <Link to="/" className="page-button">Voltar para Home</Link>
    </div>
  );
}

export default Sobre;

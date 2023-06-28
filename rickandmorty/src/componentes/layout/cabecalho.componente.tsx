import { Link } from "react-router-dom";
import "./cabecalho.css";

const Cabecalho = (): JSX.Element => {
  return (
    <header>
      <div>
        <div>
          <h2>Rick and Morty Wiki</h2>
          <p className="sub-title">Checkpoint Frond-end</p>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/favoritos">Favoritos</Link>
            </li>
            <li>
              <Link to="/detalhe">Detalhe</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Cabecalho;
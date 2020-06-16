import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente que muestra el navBar
 */
const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between d-flex mb-4">
        <div className="container">
            <Link to="/" className="navbar-brand text-light font-weight-bold">RECETAS</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link text-decoration-none">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/recetas" className="nav-link text-decoration-none">Listados de Recetas</Link>
                    </li>
                </ul>
            </div>
        </div>
  </nav>
);

export default Header;
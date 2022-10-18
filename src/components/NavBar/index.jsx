import React from 'react';
import CartWidget from '../CartWidget';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
        <Link id="inicio" to="/"><img src="logo.png" alt="Maquillaje" className="navbar-brand navimagen"></img></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse colordrop" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle colordrop" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    MAQUILLAJE
                    </Link>
                    <ul className="dropdown-menu colordrop form-inline" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/category/Bases - Polvos">BASES - POLVOS</Link></li>
                    <li><Link className="dropdown-item" to="/category/Correctores">CORRECTORES</Link></li>
                    <li><Link className="dropdown-item" to="/category/Labiales">LABIALES</Link></li>
                    <li><Link className="dropdown-item" to="/category/Sombras">SOMBRAS</Link></li>
                    <li><Link className="dropdown-item" to="/category/Brochas - Esponjas">BROCHAS - ESPONJAS</Link></li>
                    <li><Link className="dropdown-item" to="/category/Delineadores">DELINEADORES</Link></li>
                    <li><Link className="dropdown-item" to="/category/Pestañas">PESTAÑAS</Link></li>
                    <li><Link className="dropdown-item" to="/category/Cejas">CEJAS</Link></li>
                    <li><Link className="dropdown-item" to="/category/Glitter">GLITTER</Link></li>
                    <li><Link className="dropdown-item" to="/category/Primer - Fijador">PRIMER - FIJADOR</Link></li>
                    <li><Link className="dropdown-item" to="/category/Contornos">CONTORNOS</Link></li>
                    <li><Link className="dropdown-item" to="/category/Iluminadores">ILUMINADORES</Link></li>
                    <li><Link className="dropdown-item" to="/category/Rubores">RUBORES</Link></li>
                    </ul>
                </li>
            <li className="nav-item dropdown colordrop">
                <Link className="nav-link dropdown-toggle colordrop" to="/category/women's cloting" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                SKINCARE
                </Link>
                <ul className="dropdown-menu colordrop" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/category/Accesorios">ACCESORIOS</Link></li>
                    <li><Link className="dropdown-item" to="/category/Esponjas y Aplicadores">ESPONJAS Y APLICADORES</Link></li>
                    <li><Link className="dropdown-item" to="/category/Blanqueadores de Dientes">BLANQUEADORES DE DIENTES</Link></li>
                    <li><Link className="dropdown-item" to="/category/Mascarillas y Serum">MASCARILLAS Y SERUM</Link></li>
                    <li><Link className="dropdown-item" to="/category/Cremas">CREMAS</Link></li>
                    <li><Link className="dropdown-item" to="/category/Desmaquillantes">DESMAQUILLANTES</Link></li>
                </ul>
            </li>
            <li className="nav-item {/*dropdown colordrop">
                <Link className="nav-link dropdown-toggle colordrop" to="/category/electronics" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                NAILS
                </Link>
                <ul className="dropdown-menu colordrop" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/category/Ciudados Manos y Pies">CUIDADOS MANOS Y PIES</Link></li>
                    <li><Link className="dropdown-item" to="/category/Esmaltes">ESMALTES</Link></li>
                    <li><Link className="dropdown-item" to="/category/Decoracion">DECORACION</Link></li>
                    <li><Link className="dropdown-item" to="/category/Herramientas">HERRAMIENTAS</Link></li>
                    <li><Link className="dropdown-item" to="/category/Esculpidas">ESCULPIDAS</Link></li>
                    <li><Link className="dropdown-item" to="/category/Esmaltado Semi y Cabinas">ESMALTADO SEMI Y CABINAS</Link></li>
                </ul>
            </li>
            <li className="nav-item {/*dropdown colordrop">
                <Link className="nav-link dropdown-toggle colordrop" to="/category/electronics" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                ACCESORIOS
                </Link>
                <ul className="dropdown-menu colordrop" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/category/Fragancias">FRAGANCIAS</Link></li>
                    <li><Link className="dropdown-item" to="/category/Porta Cosmeticos">PORTA COSMETICOS</Link></li>
                    <li><Link className="dropdown-item" to="/category/Utilidades">UTILIDADES</Link></li>
                </ul>
            </li>
            </ul>
            <button className='carritoespacio'><Link to="/cart"><CartWidget/></Link></button>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar Producto..." aria-label="Search"></input>
            <button className="btn boton" type="submit">Buscar</button>
            </form>
        </div>
        </div>
    </nav>
        </div>
    )
}

export default NavBar;
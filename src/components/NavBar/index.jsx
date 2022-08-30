import React from 'react';
import CartWidget from '../CartWidget';

const NavBar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
        <a id="inicio" href="#inicio"><img src="logo.png" alt="" className="navbar-brand"></img></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse colordrop" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle colordrop" href="#inicio" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Productos
                    </a>
                    <ul className="dropdown-menu colordrop" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#inicio">Combos</a></li>
                    <li><a className="dropdown-item" href="#inicio">Maquillaje</a></li>
                    <li><a className="dropdown-item" href="#inicio">Nails</a></li>
                    <li><a className="dropdown-item" href="#inicio">Cosmetica Capilar</a></li>
                    <li><a className="dropdown-item" href="#inicio">Mascarillas y Ciudados</a></li>
                    <li><a className="dropdown-item" href="#inicio">Otros</a></li>
                    </ul>
                </li>
            <li className="nav-item dropdown colordrop">
                <a className="nav-link dropdown-toggle colordrop" href="#inicio" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Maquillaje
                </a>
                <ul className="dropdown-menu colordrop" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#inicio">Action</a></li>
                <li><a className="dropdown-item" href="#inicio">Another action</a></li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#inicio">Something else here</a></li>
                </ul>
            </li>
            <li className="nav-item dropdown colordrop">
                <a className="nav-link dropdown-toggle colordrop" href="#inicio" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Nails
                </a>
                <ul className="dropdown-menu colordrop" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#inicio">Action</a></li>
                <li><a className="dropdown-item" href="#inicio">Another action</a></li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#inicio">Something else here</a></li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link colordrop" href="#inicio" role="button" aria-expanded="false">Promos</a>
            </li>
            </ul>
            <button className='carritoespacio'><CartWidget/></button>
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

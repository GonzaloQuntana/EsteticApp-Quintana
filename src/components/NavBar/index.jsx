import React from 'react';
import CartWidget from '../CartWidget';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
        <Link id="inicio" to="/"><img src="logo.png" alt="Maquillaje" className="navbar-brand"></img></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse colordrop" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link colordrop" to="/category/men's clothing" role="button" aria-expanded="false">Men's Clothing</Link>
            </li>
                <li className="nav-item">
                <Link className="nav-link colordrop" to="/category/women's clothing" role="button" aria-expanded="false">Women's Clothing</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link colordrop" to="/category/electronics" role="button" aria-expanded="false">Electronics</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link colordrop" to="/category/jewelery" role="button" aria-expanded="false">Jewelery</Link>
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



/*        <div>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
        <Link id="inicio" to="/"><img src="logo.png" alt="Maquillaje" className="navbar-brand"></img></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse colordrop" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle colordrop" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Men Clothing
                    </Link>
                    <ul className="dropdown-menu colordrop" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/">Combos</Link></li>
                    <li><Link className="dropdown-item" to="/">Maquillaje</Link></li>
                    <li><Link className="dropdown-item" to="/">Nails</Link></li>
                    <li><Link className="dropdown-item" to="/">Cosmetica Capilar</Link></li>
                    <li><Link className="dropdown-item" to="/">Mascarillas y Ciudados</Link></li>
                    <li><Link className="dropdown-item" to="/">Otros</Link></li>
                    </ul>}
                </li>
            <li className="nav-item dropdown colordrop">
                <Link className="nav-link dropdown-toggle colordrop" to="/category/women's cloting" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Women Clothing
                </Link>
                <ul className="dropdown-menu colordrop" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/">Action</Link></li>
                <li><Link className="dropdown-item" to="/">Another action</Link></li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
            </li>
            <li className="nav-item {/*dropdown colordrop">
                <Link className="nav-link dropdown-toggle colordrop" to="/category/electronics" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Electronics
                </Link>
                <ul className="dropdown-menu colordrop" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/">Action</Link></li>
                <li><Link className="dropdown-item" to="/">Another action</Link></li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
            </li>
            <li className="nav-item">
                <Link className="nav-link colordrop" to="/category/jewelery" role="button" aria-expanded="false">Jewelery</Link>
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
    */
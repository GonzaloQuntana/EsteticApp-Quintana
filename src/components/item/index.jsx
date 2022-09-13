import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({product}) => {
const navigate = useNavigate();
const handleNavigate = () => {
    navigate (`/detail/${product.id}`)
}
    return (
    <div className="productos" onClick={handleNavigate}>
    <div className="card">
      <img src={product.image} className="card-img-top imagenCard" alt="maquillaje"/>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button className='BotonAgregarC'>Agregar al Carrito</button>
      </div>
    </div>
    </div>
    )
}

export default Item;
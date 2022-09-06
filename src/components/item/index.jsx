import React from 'react';

const Item = ({product}) => {
    return (
        <div>
        <div className="card producto">
        <img src="{product.image}" className="card-img-top" alt="Maquillaje"/>
        <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">${product.price}</p>
        <a href="index.html" className="btn btn-primary">Agregar al Carrito</a>
  </div>
</div>
        </div>
    )
}

export default Item;
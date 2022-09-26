import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Item from '../../components/item';
import { Shop } from '../../context/ShopProvider';

const Cart = () => {

    const {cart, removeItem, clearCart} = useContext(Shop);

    const filas = []
    cart.forEach(item => {
        filas.push({
            id: item.id,
            image: item.image,
            title: item.title,
            quantity: item.quantity
        })
    })
  return(
    <div className="CartContainer">
    <div className="wholeCart">
    <div className="buttonBack">
        <Link to="/">
        <button className="cartButton">Volver</button>
        </Link>
        <button className="cartButton" onClick={clearCart}>Borrar todo</button>
    </div>
    <div className="titleCartContainer"><h3>Tu carrito</h3></div>
                <div className="dataContainer">
                    <p className="cartText">Id de tu producto: {Item.id} </p>
                    <p className="cartText">Cantidad: {Item.qty}</p>
                    <p className="cartText">Título: {Item.title}</p>
                    <p className="cartText">Precio por unidad: ${Item.price}</p>
                    <p className="cartText">Precio Total: $</p>
                    <button className="deleteButton" onClick={removeItem}>X</button>
                </div>      
    </div>
    <div className="totals">
        <p>Cantidad de Productos:</p>
        <p></p>
        <p>Total Compra:</p>
    </div>
    </div>
)
}

export default Cart
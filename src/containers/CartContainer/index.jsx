import React from 'react'
import { Link } from 'react-router-dom';

const Cart = ({product}) => {

  return(
    <>
    <div className="CartContainer">
    <div className="wholeCart">
    <div className="buttonBack">
        <Link to="/">
        <button className="cartButton">Volver</button>
        </Link>
        <button className="cartButton">Borrar todo</button>
    </div>
    <div className="titleCartContainer"><h3>Tu carrito</h3></div>
                <div className="dataContainer">
                    <p className="cartText">Id de tu producto: </p>
                    <p className="cartText">Cantidad: </p>
                    <p className="cartText">Título: </p>
                    <p className="cartText">Precio por unidad: $</p>
                    <p className="cartText">Precio Total: $</p>
                    <button className="deleteButton">X</button>
                </div>      
    </div>
    <div className="totals">
        <p>Cantidad de Productos:</p>
        <p></p>
        <p>Total Compra:</p>
    </div>
    </div>
    </>
)
}

export default Cart
import React from 'react'
import ItemCount from '../ItemCount'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shop } from '../../context/ShopProvider';
import { useContext } from 'react';

const ItemDetail = ({product}) => {

  const [qty, setQty] = useState(0);
  const navigate = useNavigate();

  const {addItem} = useContext(Shop);

  const addCart = (quantity) => {
    setQty(quantity);
  }

  const handleFinish = () => {
    const productToSave = {...product, quantity: qty}
    addItem(productToSave)
    navigate('/cart');
  }

  return (
    <div>
        <br />
        <img className='image' src={product.image} alt='producto'/>    
        <br /><br /><br /><br /><br />
        <h2 className='TituloProducto'>
        {product.title}
        </h2><br />
        <h4>{product.description}</h4>
        <div className='ContadorCarrito'>
         {!qty ? (<ItemCount stock={product.stock} initial={1} onAdd={addCart}/>) : (
          <button className='BotonAgregarC' onClick={handleFinish}>Finalizar Compra</button>
         )}
        </div>

    </div>
  )
}

export default ItemDetail
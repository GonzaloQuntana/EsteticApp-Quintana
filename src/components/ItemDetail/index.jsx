import React from 'react'
import ItemCount from '../ItemCount'

const ItemDetail = ({product}) => {
  return (
    <div>
        <br />
        <img src={product.image} alt="Maquillaje" className='ImagenProducto' />
        <br /><br /><br /><br /><br />
        <h1 className='TituloProducto'>
        {product.title}
        </h1><br />
        <div className='ContadorCarrito'>
        <ItemCount/>
        </div>

    </div>
  )
}

export default ItemDetail
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({product}) => {
const navigate = useNavigate();
const handleNavigate = () => {
    navigate (`/detail/${product.id}`)
}
    return (
    <div className="card p-4" onClick={handleNavigate}>
        <div className="d-flex align-items-center">
        <div>
            <img className='image' src={product.image} alt='producto'/>    
            <div className="mt-2">
                <h5 className="text-uppercase precio">{product.title}</h5>
            </div>
            <div className="mt-2">
                <h6 className="text-uppercase text-muted mb-0 precio">{product.category}</h6>
                <h6 className="text-muted ml-1">Disponibles: {product.stock}</h6>
                </div>
            <h6 className="precio">${product.price}</h6>
        </div>
    </div>
</div>
    )
}

export default Item;
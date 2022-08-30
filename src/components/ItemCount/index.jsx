import React from 'react';
import {useState} from 'react';

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(1)

    const handleAdd = () => {
        if(count < stock) {
            setCount(count+1);
        }
    else {
    alert("No hay suficiente stock");
}};

    const handleRemove = () => {
        if(count >= 2) {
            setCount(count-1);
        }
    else {
    alert("No puedes poner menos de 1 producto");
}};

    return (
        <div>
            <span><button onClick={handleRemove}>-</button>{count}<button onClick={handleAdd}>+</button></span><br />
            <button onClick={()=>onAdd(count)}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount;
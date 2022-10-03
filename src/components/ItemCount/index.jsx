import React from 'react';
import {useState} from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(1)

    const handleAdd = () => {
        if(count < stock) {
            setCount(count+1);
        }
    else {
        Swal.fire({
            icon: 'error',
            title: 'No hay suficiente stock',
            showConfirmButton: false,
            timer: 1000
          })
}};

    const handleRemove = () => {
        if(count >= 2) {
            setCount(count-1);
        }
    else {
        Swal.fire({
            icon: 'error',
            title: 'No puedes poner menos de 1 producto',
            showConfirmButton: false,
            timer: 1000
          })
}};

    const addCart = () => {
        onAdd(count);
        setCount(initial);
    }

    useEffect(() => {

    }, []);

    useEffect(() => {

    }, [count]);

    return (
        <div>
            <span><button className='BotonesSR' onClick={handleRemove}>-</button> <span className='NumeroSR'> {count} </span> <button className='BotonesSR' onClick={handleAdd}>+</button></span><br />
            <button className='BotonAgregarC' onClick={addCart}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount;
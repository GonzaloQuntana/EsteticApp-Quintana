import React, { useEffect, useState } from 'react';
import ItemList from '../../components/itemList';
import { products } from '../../data/products';

const ItemListContainer = ({greeting}) => {

const [productos, setProductos] = useState([])

    useEffect(()=> {

        ( async ()=> {

            const obtenerProductos = new Promise ((accept, reject)=> {
                setTimeout(()=> {
                    accept(products)
                }, 3000);
            })        
    
         try {
            const productos = await obtenerProductos;
            setProductos(productos)
         } catch (error) {
    
         }
        })()

    },[productos] )

    return (
        <div className="Item-List-container">
            <ItemList products={productos}
            />       
        </div>
    )
}

export default ItemListContainer;
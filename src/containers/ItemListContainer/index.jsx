import React, { useEffect, useState } from 'react';
import ItemList from '../../components/itemList';
//import { products } from '../../data/products';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {

const [productos, setProductos] = useState([])

const {categoryId} = useParams();

    useEffect(()=> {

        ( async ()=> {
    
         try {
            if (categoryId){
                const response = await fetch("https://fakestoreapi.com/products/category/" + categoryId);
                const productos = await response.json();
                setProductos(productos)
            }
            else {
                const response = await fetch("https://fakestoreapi.com/products");
                const productos = await response.json();
                setProductos(productos)
            };
         } catch (error) {
    
         }
        })()

    },[categoryId]);

    return (
        <div className="Item-List-container">
            <ItemList products={productos}/>       
        </div>
    )
}

export default ItemListContainer;
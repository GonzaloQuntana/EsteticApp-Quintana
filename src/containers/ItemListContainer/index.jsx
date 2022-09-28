import React, { useEffect, useState } from 'react';
import ItemList from '../../components/itemList';
//import { products } from '../../data/products';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {

const [productos, setProductos] = useState([])

const {categoryId} = useParams();

    useEffect(()=> {

        ( async ()=> {
    
         try {
                
                const q = categoryId ? 
                    query(collection(db, "products"), where("category", "==", categoryId))
                    :
                    query(collection(db, "products"));

                const querySnapshot = await getDocs(q);
                
                const productosFirebase = [];
    
                querySnapshot.forEach((doc) => {
                  productosFirebase.push({id: doc.id, ...doc.data()})
                });
                
                setProductos(productosFirebase)
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
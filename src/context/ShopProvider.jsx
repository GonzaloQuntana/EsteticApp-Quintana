import React from 'react'
import { createContext } from "react";
import { useState } from 'react';

export const Shop = createContext(null);

 
 export const ShopProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (item) => {
        const productoRepetido = isInCart(item.id);
        if (productoRepetido) {
            const cartModified = cart.map(product => {
                if (product.id === item.id) {
                    product.quantity += item.quantity
                    return product
                }
                return product
            })
            setCart(cartModified)
        } else {
            const cartModificado = [...cart, item]
            setCart(cartModificado)
        }
    };

    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    };

    const removeItem = (id) => {
            cart.splice(
            cart.findIndex((product) => product.id === id),
            1
            );
            setCart([...cart]);
        };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <Shop.Provider value={{cart, addItem, removeItem, clearCart}}>
            {children}
        </Shop.Provider>
    )
}


 export default ShopProvider;
 
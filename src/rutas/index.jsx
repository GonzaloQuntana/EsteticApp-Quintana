import React from 'react'
import NavBar from "../components/NavBar";
import ItemListContainer from "../containers/ItemListContainer";
import ItemDetailContainer from "../containers/ItemDetailContainer";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import Cart from '../containers/CartContainer';
import { Initial } from '../containers/Initial/initial';

export const Rooting = () => {
  return (
    <BrowserRouter>
    <NavBar 
    />
    <Routes>
    <Route path="/" element={<Initial/>}/>
    <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
    <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

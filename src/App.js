import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Cart from "./containers/CartContainer";
import { ShopProvider } from "./context/ShopProvider";
//import { useEffect } from "react";
//import algoritmoGuardadoAutomatico from "./services/guardarProductos";

function App() {

  //useEffect(()=> {
  //  algoritmoGuardadoAutomatico()
  //}, [])
  
/*  const agregarAlCarrito = (cantidad) => {
}*/

  return (
    <ShopProvider>
      <BrowserRouter>
      <NavBar 
      />
      <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
      <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;

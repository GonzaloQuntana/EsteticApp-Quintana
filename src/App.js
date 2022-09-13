import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";

function App() {

  const categorias = ["Maquilaje", "Nails", "Cosmetica Capilar", "Mascarillas y Ciudados", "Otros", "Combos"]
  
/*  const agregarAlCarrito = (cantidad) => {
}*/

  return (
    <BrowserRouter>
    <NavBar 
    categories={categorias} 
    />
    <Routes>
    <Route path="/" element={<ItemListContainer/>}/>
    <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
    <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
    <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

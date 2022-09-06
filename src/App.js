import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./containers/ItemDetailContainer";

function App() {

  const categorias = ["Maquilaje", "Nails", "Cosmetica Capilar", "Mascarillas y Ciudados", "Otros", "Combos"]
  
  const agregarAlCarrito = (cantidad) => {
}

  return (
    <>
    <NavBar 
    categories={categorias} 
    />
    {/*<ItemListContainer greeting={"Bienvenidos a nuestra app"}/>*/}
    {/*<ItemCount initial={1} stock={10} onAdd={agregarAlCarrito}/>*/}
    <ItemDetailContainer/>
    <div className="App">
    </div>
    </>
  );
}

export default App;

import CartWidget from "./components/CartWidget";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";

function App() {

  const categorias = ["Maquilaje", "Nails", "Cosmetica Capilar", "Mascarillas y Ciudados", "Otros", "Combos"]

  return (
    <>
    <NavBar 
    categories={categorias} 
    />
  <ItemListContainer greeting={"Bienvenidos a nuestra app"}/>
    <div className="App">
    </div>

    </>
  );
}

export default App;

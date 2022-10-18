import { Rooting } from "./rutas";
import { useEffect } from "react";
import algoritmoGuardadoAutomatico from "./services/guardarProductos";

function App() {

  useEffect(()=> {
    algoritmoGuardadoAutomatico()
  }, [])

  return (
    <Rooting/>
  );
}

export default App;

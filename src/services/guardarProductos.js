import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

    
    const algoritmoGuardadoAutomatico = async () => {
        
        
        try {
        const productosAGuardar = await Response.json();
        
        productosAGuardar.forEach(async (producto) => {
            const docRef = await addDoc(collection(db, "products"), {
                title: producto.title,
                price: producto.price,
                description: producto.description,
                category: producto.category,
                image: producto.image,
                stock: 20,
            });
        })
        
    } catch (error) {
    }
}

export default algoritmoGuardadoAutomatico;
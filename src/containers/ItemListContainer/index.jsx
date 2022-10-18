import React from "react";
import ItemList from "../../components/itemList";
import { useParams } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const ItemListContainer = () => {

    const { categoryId } = useParams();
    const [loading, productos, error] = useFirebase(categoryId)

    return (
        <>
            {loading ? 
            <h2>Cargando...</h2>
            :
            <ItemList products={productos} />}
            {error && <h2>{error}</h2>}
        </>
    )
};

export default ItemListContainer;
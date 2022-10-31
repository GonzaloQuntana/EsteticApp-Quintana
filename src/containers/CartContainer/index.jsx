import React, { useContext, useState } from "react";
import { Shop } from "../../context/ShopProvider";
import ordenGenerada from "../../services/generarOrden";
import { DataGrid } from "@mui/x-data-grid";
import { Button, CircularProgress } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const Cart = () => {
    const { cart, removeItem, clearCart } = useContext(Shop);

    const [loading, setLoading] = useState(false);

    const total = () => {
        const total = cart.reduce((acc, producto) => acc += producto.quantity * producto.price, 0)
        return total;
    }

    const renderImage = (image) => {
        return (
            <img
                src={image.value}
                alt="cart-product"
                style={{ height: 120, width: 250 }}
            ></img>
        );
    };

    const renderRemoveButton = (item) => {
        const product = item.value;
        return (
            <Button
                onClick={() => removeItem(product)}
                variant="contained"
                color="error"
            >
                Remover
            </Button>
        );
    };

    const handleBuy = async () => {
        setLoading(true)
        const importeTotal = total();
        const orden = ordenGenerada(
            "Sebastián",
            "sebas@live.com",
            11111111111,
            cart,
            importeTotal
        );

        const docRef = await addDoc(collection(db, "orders"), orden);

        cart.forEach(async (productoEnCarrito) => {
            const productRef = doc(db, "products", productoEnCarrito.id);
            const productSnap = await getDoc(productRef);
            await updateDoc(productRef, {
                stock: productSnap.data().stock - productoEnCarrito.quantity,
            });
        });
        setLoading(false);
        alert(
            `¡Gracias por su compra! Se generó la orden generada con ID: ${docRef.id}`
        );
    };

    const columns = [
        {
            field: "image",
            headerName: "Imagen",
            width: 250,
            renderCell: renderImage
        },
        { field: "title", headerName: "Producto", width: 450 },
        { field: "quantity", headerName: "Cantidad", width: 80 },
        { field: "price", headerName: "Precio", width: 450 },
        {
            field: "remove",
            headerName: "Remover",
            renderCell: renderRemoveButton,
            width: 120
        },
    ];

    const filas = [];
    cart.forEach((item) => {
        filas.push({
            id: item.id,
            image: item.image,
            title: item.title,
            quantity: item.quantity,
            price: `$ ${item.price}`,
            remove: item,
        });
    });

    return (
        <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={filas}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
            />
        <h3>Total: $ {total}</h3>
            <Button onClick={clearCart} color="error" variant="outlined">
                Limpiar Carrito
            </Button>
            {loading ? (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%"
                    }}
                >
                    <CircularProgress/>
                </div>
            ) : (
                <Button onClick={handleBuy}>Confirmar compra</Button>
            )}
        </div>
    );
};

export default Cart;
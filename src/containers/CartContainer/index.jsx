import React from 'react'
import { useContext } from 'react';
import { Shop } from '../../context/ShopProvider';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import ordenGenerada from '../../services/generarOrden';

const Cart = () => {

    const {cart, removeItem, clearCart, total} = useContext(Shop);
    
    const renderImage = (image) => {
        return(
            <img src={image.value} alt="cart-product" style={{height: '120px'}} />
        )
    };

    const renderRemoveButton = (item) => {
        const product = item.value;
        return (
            <Button
                onClick={() => removeItem(product)}
                variant="contained"
                color="error"
            >
                X
            </Button>
        );
    };

    const handleBuy = () => {
        const importeTotal = total();
        const orden = ordenGenerada("Sebastian", "sebas@live.com", 123466, cart, importeTotal)
    }



    const columns = [
        { field: 'image', headerName: 'Imagen', width: 250, renderCell: renderImage},
        { field: 'title', headerName: 'Producto', width: 400 },
        { field: 'quantity', headerName: 'Cantidad', width: 100 },
        {
            field: 'remove',
            headerName: '',
            renderCell: renderRemoveButton,
            width: 120,
        },
    ];
    const filas = []
    cart.forEach(item => {
        filas.push({
            id: item.id,
            image: item.image,
            title: item.title,
            quantity: item.quantity
        })
    })
    
      return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={filas}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            rowHeight={100}
          />
            <Button onClick={clearCart} color="error" variant="outlined">Limpiar Carrito</Button>
            <Button onClick={handleBuy}>Confirmar Compra</Button>
        </div>
      );
    };

export default Cart
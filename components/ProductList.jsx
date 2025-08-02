import React from 'react'
import { useState } from 'react';

const ProductList = () => {

    const [addedProducts, setAddedProducts] = useState([])

    console.log(addedProducts)
    const products = [
        { name: 'Mela', price: 0.5 },
        { name: 'Pane', price: 1.2 },
        { name: 'Latte', price: 1.0 },
        { name: 'Pasta', price: 0.7 },
    ];

    const updateProductQuantity = (name, quantity) => {
        setAddedProducts(curr =>
            curr.map(p => p.name === name ? { ...p, quantity } : p)
        )
    }

    function addToCart(product) {
        let esiste = addedProducts.find(p =>
            p.name === product.name
        )
        if (esiste) {
            updateProductQuantity(esiste.name, esiste.quantity + 1)
            return
        } setAddedProducts(now =>
            [...now, { ...product, quantity: 1 }]
        )
    }

    const removeFromCart = (product) => {
        setAddedProducts(curr => curr.filter(p => p.name !== product.name))
    }

    const totalPay = addedProducts.reduce((acc, p) =>
        acc + (p.price * p.quantity)
        , 0)


    const totParziale = (ProdParziale) => {
        const primoParziale = addedProducts.filter(p => p.name === ProdParziale.name)
        const ultimoParziale = primoParziale.reduce((acc, p) => acc + (p.price * p.quantity), 0)
        return ultimoParziale.toFixed(2)
    }

    return (
        <div>
            {products.map((p, i) => (
                <ul>
                    <li key={i}> {p.name} - {p.price.toFixed(2)}  <button onClick={() => addToCart(p)} >Aggiungi al Carrello</button>
                    </li>
                </ul>
            ))}
            <h2>Carrello:</h2>
            {addedProducts.length != 0 && (
                addedProducts.map(add => (
                    <ul>
                        <li>{add.name} - {add.price} - {add.quantity} <button onClick={() => removeFromCart(add)} >Rimuovi dal Carrello</button></li>
                        - tot Parziale : {totParziale(add)} €
                    </ul>
                ))
            )
            }
            <h3>Totale da pagare: {totalPay.toFixed(2)} €  </h3>
        </div>

    )
}

export default ProductList

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

    function addToCart(product) {
        let esiste = addedProducts.some(p =>
            p.name === product.name
        )
        if (esiste) {
            return
        } setAddedProducts(now => [...now, { ...product, quantity: 1 }]
        )
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
                        <li>{add.name} - {add.price} - {add.quantity}</li>
                    </ul>
                ))
            )
            }
        </div>
    )
}

export default ProductList

import React from 'react'

const ProductList = () => {

    const products = [
        { name: 'Mela', price: 0.5 },
        { name: 'Pane', price: 1.2 },
        { name: 'Latte', price: 1.0 },
        { name: 'Pasta', price: 0.7 },
    ];

    return (
        <div>
            {products.map((p) => (
                <ul>
                    <li>{p.name} - {p.price}</li>
                </ul>
            ))}
        </div>
    )
}

export default ProductList

import React from 'react'

export default function Product(props) {

    const { product, onADD } = props;

    return (
        <div>
            <img className='' src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <div>
                <button onClick={() => onADD(product)}>Add To Cart</button>
            </div>
        </div>
    )
}

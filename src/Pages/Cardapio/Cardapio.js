import React from 'react';
import { CardapioStyle } from './Styled-Cardapio.js';
import { useState } from 'react';

import data from '../../data.js';
import '../../App.css';

import ShopCart from '../../Components/Carrinho/ShopCart';
import Main from '../../Components/Main/Main.js';
import Header from '../../Components/Header/Header.js';


export default function Cardapio() {

   
    const { products } = data;
    const [cartItems, setCartItems] = useState([]);

    //Adcionar itens no  carrinho.
    const onADD = (product) => {
        
        const exist = cartItems.find(x => x.id === product.id);
        if (exist) {
            setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    }

    //Remover itens no  carrinho.
    const onREMOVE = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
        }
    }

    return (
        <CardapioStyle

            className='App'>
            <Header></Header>
           

            <div className='row'>
                <Main onADD={onADD} products={products}></Main>
            </div>
            <ShopCart countCartItems={cartItems.length} onADD={onADD} onREMOVE={onREMOVE} cartItems={cartItems}></ShopCart>
        </CardapioStyle>
    )
}

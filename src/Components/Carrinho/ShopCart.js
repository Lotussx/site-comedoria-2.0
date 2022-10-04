import React, { useState } from 'react'
import { ContainerShopCart } from './Styled-ShopCart';
import { MdShoppingCart } from 'react-icons/md';
import seta from '../../Images/seta-baixo.png';

import { Link } from 'react-router-dom';

import Global from '../Global'

export default function ShopCart(props) {


  const { countCartItems } = props;
  const { cartItems, onADD, onREMOVE } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  //expandir o carrnho
  const [openCart, setOpenCart] = useState('false');
  const expandCart = () => {
    setOpenCart(!openCart)
  }

  //finalizar o pedido
  const finalizarPedido = () => {
    Global.msg = [];
    let itensCarrinho = document.querySelectorAll('.item .itemName h4');
    let QTYitensCarrinho = document.querySelectorAll('.itemPrice p');

    for (let i = 0; i < itensCarrinho.length; i++) {
      let cartInfo = QTYitensCarrinho[i].innerHTML + 'x - ' + itensCarrinho[i].innerHTML;
      Global.msg.push(cartInfo);
      Global.newMsg = Global.msg.join(' | ');
      Global.precoTotal = document.querySelector('.precoTotalContainer .preco p').innerHTML;
    }
  }


  return (
    <ContainerShopCart className={`flex-class ${openCart ? '' : 'carrinhoAberto'}`}>

      <div className='cartContent flex-class'>

        <div className='cartIcon flex-class'>
          <MdShoppingCart className='iconCart'></MdShoppingCart>
          <button>
            {countCartItems}
          </button>
          <div className='arrowContainer flex-class' onClick={expandCart}>
            <div><img src={seta} alt='' /></div>
          </div>
        </div>

        {!openCart &&
          <hr className='barraDivisora1'></hr>
        }

        {cartItems.length === 0 &&
          <div className='carrinhoVazio'>
            <div className='carrinhoVazio flex-class'>Carrinho vazio....</div>
          </div>
        }

        {cartItems.length !== 0 &&
          <div className='buttonExpandCart flex-class' onClick={expandCart}>
            <button>Abrir carrinho</button>
          </div>
        }

        {!openCart &&
          <div className='containerItensCart'>
            {
              cartItems.map((item) => (
                <div key={item.id} className="item flex-class">
                  <div className='itemName'><h4>{item.name}</h4></div>
                  <div className='buttonDiv flex-class'>
                    <button onClick={() => onADD(item)}> + </button>
                    <button onClick={() => onREMOVE(item)}> - </button>
                    <div className='itemPrice flex-class'>
                      <p>{item.qty}</p> x R$ {item.price.toFixed(2)}
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        }

        {cartItems.length !== 0 &&
          <div className='precoTotalContainer flex-class'>
            <div>
              <strong>Preço Total:</strong>
            </div>
            <div className='preco'>
              <p>R$ {totalPrice.toFixed(2)}</p>
            </div>
          </div>
        }

        {!openCart &&
          <div className='finalizarPedido flex-class' onClick={finalizarPedido}>
            <Link to='/FinalizarPedido' className='flex-class'> <button>Finalizar Pedido</button> </Link>
          </div>
        }
      </div>




      {/* {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className='row'>
            <div className='col-2'>Items Price</div>
            <div className='col-1 text-right'>${itemsPrice.toFixed(2)}</div>
          </div>
          <div className='row'>
            <div className='col-2'> Tax Price </div>
            <div className='col-1 text-right'>${taxPrice.toFixed(2)}</div>
          </div>
          <div className='row'>
            <div className='col-2'>Shipping Price</div>
            <div className='col-1 text-right'>${shippingPrice.toFixed(2)}</div>
          </div>
          <div className='row'>
            <div className='col-2'>
              <strong>Total Price</strong>
            </div>
            <div className='col-1 text-right'>${totalPrice.toFixed(2)}</div>
          </div>
          <div className='row'>
            <button onClick={() => alert("Tá funfandoooooo")}>
              Chekout
            </button>
          </div>
        </>
      )} */}
    </ContainerShopCart>
  )
}

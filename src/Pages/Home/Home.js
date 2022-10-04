import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import { HomeStyle } from './Styled-Home'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <HomeStyle>
            <Header></Header>
            <div className='mainContainer'>
                <div className='flex-class mainContent'>
                    <div className='logoWrapper'>
                    </div>
                    <div className='legenda flex-class'>
                        <span>(81) 99143-7844</span>
                        Funcionamento: seg. à sex.
                    </div>
                    <Link to='/Cardapio'>
                        <button>
                            FAÇA JÁ SEU PEDIDO!
                        </button>
                    </Link>
                </div>
            </div>
            <Footer></Footer>
        </HomeStyle>
    )
}
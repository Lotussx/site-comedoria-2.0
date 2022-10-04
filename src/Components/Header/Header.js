import React from 'react';
import '../../index.css';
import MenuLateral from '../MenuLateral/MenuLateral';
import { HeaderContainer } from './Styled-Header';

export default function Header(props) {



    return (

        <HeaderContainer className='flex-class'>
            <div className='logo-title flex-class'>
                <div>

                </div>
                <span className='title'>
                    <h3>Maximos Burguer</h3>
                </span>
            </div>
            <div className='menuLateral'>
                <MenuLateral></MenuLateral>
            </div>



        </HeaderContainer>

    )
}

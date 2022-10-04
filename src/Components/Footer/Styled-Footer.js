import styled from "styled-components";

export const FooterContainer = styled.footer`

@media screen and (max-width: 500px) {

    bottom: 0;
    width: 100vw;
    height: 10vh;
    background-color: black;
    font-family: 'Oswald', sans-serif;


    nav{
        height: 70px;
        width: 100%;
        justify-content: space-around;

        .link{
            text-decoration: none;
        }

        div{
            color: white;
            list-style: none;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            width: 100px;
            font-size: .8em;
            margin-top: 15px;

            &:hover .icons-footer{
                color: yellow;
                transition: 0.5s;
            }
            &:hover p{
                color: yellow;
                transition: 0.5s;
            }
    
            .icons-footer{
                font-size: 25px;
                margin-bottom: -5px;
            }
       
        }

    }
}

    
`;
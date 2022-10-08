import styled, { keyframes } from "styled-components";

const animaEnd = keyframes`
    0%{

    }
    100%{
        opacity: 1;
    }
`;

export const FinalizarPedidoContainer = styled.body`

   @media screen and (max-width: 500px) {

        position: absolute;
        width: 100%;
        height: 100%;
        overflow-x: hidden !important;
        transition: all .5s;

        .modalVoltarCardapio{
            min-width: 250px;
            min-height: 150px;
            margin: 0 auto;
            margin-top: -30%;
            box-shadow: 2px 2px 10px black;
            border-radius: 15px;
            font-family: 'Oswald', sans-serif;  
            flex-direction: column;
            justify-content: space-around;

            h3{
                padding: 8px;
                font-size: 1.1em;
            }

            a{
                width: 80%;
                height: 25px !important;
                padding-bottom: 15px;
                text-decoration: none;

                .btn{
                    font-weight: bold;
                    font-family: 'Oswald', sans-serif;  
                    border-radius: 15px;
                    border: 0px solid red;
                    width: 100%;
                    background-color: orangered;
                    color: white;
                    box-shadow: 1px 1px 5px black;
                    padding: 4px;
                    font-size: 1em;

                }
            }

        }

        
        .mainContainer{
            font-family: 'Oswald', sans-serif;  
            width: 100%;
            height: 100%;
            margin-top: 21vh;
            flex-direction: column;
            justify-content: flex-start;
            
            .cardPedido{
                width: 85%;
                margin-top: 40px;
                box-shadow: 2px 2px 10px black;
                border-radius: 10px;
                background-color: white;
                
                .barra{
                    width: 91%;
                    margin: 0 auto;
                    background-color: gray;
                    border-color: gray;
                    border: 1px solid gray;
                    margin-bottom: 3px;
                }
                
                h3{
                    margin: 0;
                    padding: 6px 0 5px 15px;
                    font-weight: bold;
                }

                .infoPedido{
                    padding-left: 15px;
                    padding-right: 15px;

                }

                .precoPedido{
                    width: 100%;
                    padding: 6px 0;
                }
                
                .precoPedido{
                    width: 92%;
                    height: 25%;
                    padding-left: 15px;
                    font-weight: bold;
                }
            }
            
            .formContainer{
                border-radius: 10px;
                background-color: white;
                flex-direction: column;
                width: 85%;
                margin-top: 5%;
                justify-content: flex-start;
                align-items: flex-start;
                box-shadow: 2px 2px 10px black;
                

                label{
                    font-size: 1.1em;
                    font-weight: bold;
                    padding: 15px 0 5px 15px;
                }

                .inputText{
                    margin: 0 auto;
                    width: 92%;
                    height: 30px;
                    border-radius: 10px;
                    font-family: sans-serif;
                    font-size: .9em;
                    
                }

                .inputRadio{
                    margin: 10px auto 15px auto;
                    width: 94%;
                    font-size: 1em;

                    .radio{
                        width: 15px;
                        height: 15px;
                        padding-right: 15px;
                    }
    
                    label{
                        padding: 10px;
                        font-size: 1em;
                    }

                    .enderecoContainer{
                        display: none;
                    }
                }
                
                .inputRadioDeliveryOpen{
                    transition: 1s;
                    
                    .enderecoContainer{
                        font-size: .8em;
                        font-family: sans-serif;
                        opacity: 0;
                        display: block;

                        animation: ${animaEnd};
                        animation-duration: .5s;
                        animation-timing-function: ease-in-out;
                        animation-fill-mode: forwards;
                    }

                    .inputTextEnd{
                        transition: 3s;
                        border-radius: 10px;
                        border-color: black;
                        height: 25px;
                        width: 98%;
                        margin-top: 8px;
                        
                    }

                    .ruaNum{
                        justify-content: space-between;

                        .inputTextEnd{
                            border-radius: 10px;
                            border-color: black;
                            height: 25px;
                            width: 82%;
                            margin-top: 8px;
                        }

                        .inputTextEnd3{
                            border-radius: 10px;
                            border-color: black;
                            height: 25px;
                            width: 12%;
                            margin-left: 5px;
                            margin-top: 8px;
                            
                        }
                    }

                    .bairroCidade{
                        width: 100%;
                        justify-content: space-between;

                        .inputTextEnd{
                            width: 47%;
                        }
                    }

                
                }

                .opcPagamento{
                    margin: 0px auto 15px auto;
                    width: 94%;

                    .radio{
                        border: 1px solid red;
                        width: 15px;
                        height: 15px;
                        padding-right: 15px;
                    }
    
                    label{
                        padding: 10px;
                        font-size: 1em;
                    }
                    .trocoContainer{
                        display: none;
                    }
                }

                .opcPagamentoOPEN{
                    .trocoContainer{
                        margin-top: 5px;
                        display: block;
                        
                        label{
                            font-size: 1.1em;
                            font-weight: bold;
                            padding: 15px 0 15px 5px;
                         }
    
                    .inputText{
                        margin: 0 auto;
                        margin-top: 5px;
                        width: 92%;
                        height: 30px;
                        border-radius: 10px;
                        
                    }
                    }
                    
                }
            }
        
            .buttonFinalizar{
                width: 90%;
                height: 40px;
                margin: 20px auto;

                
                button{
                    box-shadow: 2px 2px 10px black;
                    border-radius: 20px;
                    width: 100%;
                    height: 100%;
                    background-color: orangered;
                    border: 0px solid red;


                    p{
                        font-family: 'Oswald', sans-serif;  
                        margin: 0;
                        font-size: 1.2em;
                        font-weight: bold;
                        color: white;
                    }
                }
            }

            

            }
    
        }


`;
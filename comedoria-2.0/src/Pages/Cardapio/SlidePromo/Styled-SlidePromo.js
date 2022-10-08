import styled from "styled-components";

export const SlideContainer = styled.div`
        
        @media screen and (max-width: 500px) {
            width: 90%;
            margin: 0 auto;
            height: 38%;
            color: red;
            margin-top: 11vh;

            .carousel-indicators{
                margin: 0 !important;
            }
            
            .itemSlide{
                border-radius: 15px;
                background-repeat: no-repeat !important;
                background-size: cover !important;
                height: 300px;
                flex-direction: column;

                .carousel-caption{
                    padding: 0 !important;
                    padding-bottom: 5px !important;
                    text-shadow: 3px 3px 2px black;
                    
                    h3{
                        font-weight: bold;
                        padding-bottom: 6px;
                        font-size: 1.2em;
                        font-family: 'Oswald', sans-serif;  
                    }

                    p{
                        font-family: 'Oswald', sans-serif;  
                        padding: 0;
                    }

                    .precoProduto{
                        font-family: 'Oswald', sans-serif;  
                        font-size: 1.2em;
                        height: 35px;
                    }

                    .btnADD{
                        z-index: 3 !important;
                        height: 25px;
                        

                        button{ 
                            height: 100%;
                            font-size: .9em;
                            text-align: center;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-family: 'Oswald', sans-serif;  
                            font-weight: bold;
                            width: 70%;
                            border: 0px solid red;
                            border-radius: 15px;
                            box-shadow: 1px 1px 10px;
                        }
                    }
                }
            }    
        }

`;
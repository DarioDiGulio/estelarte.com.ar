import React from "react"
import logo from "./logo.png"
import styled from "styled-components";
import { styles } from "../../styles/styles";

export const Galeria: React.FC = () => {
    return <>
        <Header>
            <img src={logo} alt='Estelarte'/>
            <Text>
                El mágico momento de estar frente a un <strong> lienzo blanco</strong> y ser al mismo tiempo protagonista
                y espectadora de la maravillosa transformación de la obra que empieza a vivir desde las
                <strong> pinceladas</strong>, tomando de mi el patrimonio más sensible, para mostrarlo a quien quiera ver
                <strong> mis emociones pintadas.</strong>
            </Text>
        </Header>
    </>
}

const Header = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 15vw;
    
    img {
        width: 60vw;
    }
`

const Text = styled.p`
    text-align: center;
    font-size: 1.5rem;
    line-height: 1.5;
    color: ${styles.colors.grey};
`

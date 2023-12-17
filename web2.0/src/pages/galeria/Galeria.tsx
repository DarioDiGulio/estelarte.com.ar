import React from "react"
import logo from "./logo.png"
import styled from "styled-components"
import { styles } from "../../styles/styles"
import { Card, Carousel, Image } from 'antd'
import './styles.css'
import { Category, Cuadro } from "./Cuadro";
import { categories } from "./Categorias";

export const Galeria: React.FC = () => {
    return <>
        <Header>
            <img src={logo} alt='Estelarte'/>
            <Text>
                El mágico momento de estar frente a un <strong> lienzo blanco</strong> y ser al mismo tiempo
                protagonista
                y espectadora de la maravillosa transformación de la obra que empieza a vivir desde las
                <strong> pinceladas</strong>, tomando de mi el patrimonio más sensible, para mostrarlo a quien quiera
                ver
                <strong> mis emociones pintadas.</strong>
            </Text>
        </Header>
        {renderSections()}
    </>

    function renderSections() {
        return <>
            <Title>Galería</Title>
            <SectionsContainer>
                {categories.map(category => render(category))}
            </SectionsContainer>
        </>
    }

    function render(category: Category) {
        return <Card key={category.id} hoverable title={category.title} style={{width: 300}}>
            {renderImages(category.items)}
        </Card>
    }

    function renderImages(images: Cuadro[]) {
        return <Carousel autoplay autoplaySpeed={3500} dots={{className: 'dots'}}>
            {images.map(image => <Image key={image.src} width={200} src={image.src}/>)}
        </Carousel>;
    }
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
    margin-bottom: 20px;
`

const Title = styled.h1`
    background-color: ${styles.colors.background};
    text-align: center;
`

const SectionsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px;

    & > nav {
        position: sticky;
        display: flex;
        justify-content: center;
        padding: 0 10px;

        & > ol {
            justify-content: center;
        }
    }
`

import React from "react"
import logo from "./logo.png"
import styled from "styled-components"
import { styles } from "../../styles/styles"
import { Breadcrumb, Carousel } from 'antd'
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
        return <SectionsContainer>
            <Title>Galería</Title>
            <Breadcrumb
                items={[
                    {title: <a href="#Hiperrealismo">Hiperrealismo</a>},
                    {title: <a href="#Escencialismo">Escencialismo</a>},
                    {title: <a href="#ArteFigurativo">Arte Figurativo</a>},
                    {title: <a href="#Abstracto">Abstracto</a>},
                    {title: <a href="#Pasteles">Pasteles</a>},
                    {title: <a href="#Año2020">Año 2020</a>},
                    {title: <a href="#Pandemia">Pandemia</a>},
                    {title: <a href="#ActividadesYExposiciones">Actividades y exposiciones</a>},
                ]}
            />
            {categories.map(category => render(category))}
        </SectionsContainer>
    }

    function render(category: Category) {
        return <>
            <SubTitle id={category.id}>{category.title}</SubTitle>
            {renderImages(category.items)}
        </>;
    }

    function renderImages(images: Cuadro[]) {
        return <Carousel autoplay autoplaySpeed={3500} dots={{className: 'dots'}}>
            {images.map((image, index) => <Picture key={index}><img src={image.src} alt={image.alt}/></Picture>)}
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

const SubTitle = styled.h2`
    background-color: ${styles.colors.background};
    text-align: center;
`

const SectionsContainer = styled.div`
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

const Picture = styled.div`
    img {
        margin: auto;
    }
`

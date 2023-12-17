import React, { ReactNode } from "react"
import styled from "styled-components"
import { styles } from "../../baseStyles/styles"
import whatsapp from './whatsapp.png'
import instagram from './instagram.png'
import facebook from './facebook.png'
import upward from './upward.png'
import { MenuOutlined } from '@ant-design/icons'
import { Dropdown } from 'antd'
import { items } from "./MenuItems";

export const Layout: React.FC<Props> = (props) => {
    return <>
        <Nav>
            <Dropdown menu={{items}} trigger={['click', 'hover']}>
                <MenuOutlined/>
            </Dropdown>
            <Redes>
                <a target="_"
                   href="https://api.whatsapp.com/send?phone=541158451062&amp;text=Hola! Quiero hacerte una consulta sobre tus cuadros.">
                    <Icon src={whatsapp}/>
                </a>
                <a target="_" href="https://facebook.com/tallerestelarte/">
                    <Icon src={facebook}/>
                </a>
                <a target="_" href="https://www.instagram.com/tallerestelarte/">
                    <Icon src={instagram}/>
                </a>
            </Redes>
        </Nav>
        {props.children}
        <Footer>
            Creado por
            <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=upwardsd@gmail.com" target="_">
                <img loading="lazy" alt="Upward" src={upward}/>
            </a>
        </Footer>
    </>
}

const Nav = styled.div`
    background-color: ${styles.colors.grey};
    height: 50px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & svg {
        color: ${styles.colors.text};
    }
`

const Footer = styled.div`
    background-color: ${styles.colors.grey};
    padding: 0 10px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: ${styles.colors.text};
`

const Redes = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
`

const Icon = styled.img`
    height: 3.5vh;

    &:hover {
        transform: scale(1.3);
    }
`

interface Props {
    children: ReactNode
}


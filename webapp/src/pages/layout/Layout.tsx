import React, { ReactNode } from "react"

import { MenuOutlined } from '@ant-design/icons'
import { Dropdown } from 'antd'
import { items } from "./MenuItems"

import { Link } from "react-router-dom"

import whatsapp from './images/whatsapp.png'
import instagram from './images/instagram.png'
import facebook from './images/facebook.png'

// Debe llevar lo de UPWARD en el footer?
import upward from './images/upward.png'

const navOptions = [
    { text:'Galería', to: '/'},
    { text:'Catálogo', to: '/catalogo'}
]

const rrss = [
    { to: 'https://api.whatsapp.com/send?phone=541158451062&amp;text=Hola! Quiero hacerte una consulta sobre tus cuadros.', src: whatsapp, alt: 'whatsapp' },
    { to: 'https://facebook.com/tallerestelarte/', src: facebook, alt: 'facebook' },
    {to: 'https://www.instagram.com/tallerestelarte/', src: instagram, alt:'instagram'}
]

export const Layout: React.FC<Props> = (props) => {
    return <>
        <nav className="nav">
            {/* TODO cambiar dropdown */}
            <Dropdown menu={{ items }} trigger={['click', 'hover']}>
                <MenuOutlined />
            </Dropdown>

            <div className="w-full flex justify-between">
            {renderNavOptions(navOptions)}
            {renderNavRrss(rrss)}
            </div>
        </nav>

        {props.children}

        <div className="footer">
            Creado por
            <Link to="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=upwardsd@gmail.com" target='_blank' rel='noopener noreferrer'>
                <img src={upward} alt="Upward" loading="lazy" />
            </Link>
        </div>
    </>

function renderNavOptions(navOptions: any[]) {
    return <div className="navOptions">
        {
            navOptions.map(option => (
                <Link key={option.text} to={option.to}>
                    {option.text}
                </Link>
            ))
        }
    </div>
}

function renderNavRrss(rrss: any[]) {
    return <div className="navRrss">
        {
            rrss.map((rs) => (
                <Link key={rs.alt} to={rs.to} target='_blank' rel='noopener noreferrer'>
                    <img className='rrssIcon' src={rs.src} alt={rs.alt} />
                </Link>
            ))
        }
    </div>
}
}

interface Props {
    children: ReactNode
}

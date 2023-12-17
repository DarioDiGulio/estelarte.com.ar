import React from 'react'
import ReactDOM from 'react-dom/client'
import './baseStyles/normalize.css'
import { Layout } from './components/layout/Layout'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(<Layout>Hola mundo</Layout>)

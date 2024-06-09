import React from "react"

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'

import { Galeria } from "./pages/galeria/Galeria"
import { Layout } from './pages/layout/Layout'
import './App.css';

export const App: React.FC = () => {
    return <Router>
        <Layout>
            <Routes>
                <Route path="/" Component={Galeria} />
            </Routes>
        </Layout>
    </Router>
}

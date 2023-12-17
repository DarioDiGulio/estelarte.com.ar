import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from "react"
import { Galeria } from "./components/galeria/Galeria"
import { Layout } from './components/layout/Layout'

export const App: React.FC = () => {
    return <Router>
        <Layout>
            <Routes>
                <Route path="/" Component={Galeria}/>
            </Routes>
        </Layout>
    </Router>
}
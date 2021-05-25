import React from 'react'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Mission from './components/Mission'
import Topics from './components/Topics'
import Contest from './components/Contest'
import Footer from './components/Footer'

export default function App() {
    return (
        <>
            <Navigation/>
            <Header/>
            <Mission/>
            <Topics/>
            <Contest/>
            <Footer/>
        </>
    )
}

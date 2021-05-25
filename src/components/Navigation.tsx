import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../img/logo_white.png'
import { useEffect, useState } from 'react'

export default function Navigation() {
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > window.innerHeight * 0.89)
        })
    }, [])

    return (
        <Navbar id="navigation" className={scroll ? 'bg-primary' : ''}>
            <Container fluid>
                <Navbar.Brand>
                    <img src={logo} alt="MUΘ" height="80px"/>
                </Navbar.Brand>
                <Nav>
                    <button className="btn-signup">Im Interested!</button>
                </Nav>
            </Container>
        </Navbar>
    )
}
'use client'
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Kayky Matos Santana</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav style={{marginLeft: "25vw"}} className="nav-links-navbar">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">Sobre</Nav.Link>
                        <Nav.Link href="#experience">Experiência</Nav.Link>
                        <Nav.Link href="#projects">Projetos</Nav.Link>
                        <Nav.Link href="#education">Formação</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#interests">Interesses</Nav.Link>
                        <Nav.Link href="#contact">Cotato</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
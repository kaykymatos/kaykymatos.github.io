'use client'
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
    return (
        <Navbar style={{ backgroundColor:'transparent', border:'none',boxShadow: 'none'}}  expand="lg">
            <Container>
               
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler"/>
                <Navbar.Collapse id="basic-navbar-nav" style={{placeContent:'center'}}>
                    <Nav style={{fontSize:'1.5em',justifyContent: 'space-between'}} className="nav-links-navbar">
                        <Nav.Link className='link-hover' href="#home">Home</Nav.Link>
                        <Nav.Link className='link-hover'href="#howAmI">Quem sou</Nav.Link>
                        <Nav.Link className='link-hover'href="#experience">Experiência</Nav.Link>
                        <Nav.Link className='link-hover'href="#projects">Projetos</Nav.Link>
                        <Nav.Link className='link-hover'href="#education">Formação</Nav.Link>
                        <Nav.Link className='link-hover'href="#skills">Skills</Nav.Link>
                        <Nav.Link className='link-hover'href="#contact">Contato</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
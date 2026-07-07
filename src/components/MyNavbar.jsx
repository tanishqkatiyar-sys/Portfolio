// import { Button } from "react-bootstrap"
import { Alert, Navbar, Container, NavDropdown, Nav } from "react-bootstrap"
import styled from "styled-components"
// import Scrollanimation from "./Scrollanimation";

const Content = styled.div`
  background-color: black;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(255,255,255,0.15);
  /* margin: 20px; */
  overflow: hidden; 
  position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 40px;

    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);

    z-index: 1000;
    box-sizing: border-box;

`;

function MyNavbar() {
    

    return (
        <>

            {/*  */}
<Content>
            <Navbar id="navbar" expand="lg">
                <Container>
                    <Navbar.Brand style={{color:"white"}} href="#home">Portfolio</Navbar.Brand>
                    <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link style={{color:"white"}} href="#home">Home</Nav.Link>
                            <Nav.Link style={{color:"white"}} href="#about">About</Nav.Link>
                            <Nav.Link style={{color:"white"}} href="#skills">Skills</Nav.Link>
                            <Nav.Link style={{color:"white"}} href="#projects">Projects</Nav.Link>
                            <Nav.Link style={{color:"white"}} href="#education">Education</Nav.Link>
                            <Nav.Link style={{color:"white"}} href="#contact">Contact</Nav.Link>
                            
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </Content>
        </>)
}
export default MyNavbar;
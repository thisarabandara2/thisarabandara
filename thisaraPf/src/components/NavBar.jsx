import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }
    , []);

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
    }

    
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" :""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1629355719~hmac=5e1f3d3c5c7d5a0a1f1c5c1e1b2d8f4b"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    React Bootstrap
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : "navbar-link"} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : "navbar-link"} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : "navbar-link"} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icons">
                            <a href="#"><img src={""} alt=""/></a>
                            <a href="#"><img src={""} alt=""/></a>
                            <a href="#"><img src={""} alt=""/></a>
                        </div>
                        <button className="vvd" onClick={() => console.log("connect")}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
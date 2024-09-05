import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/igithub.svg";
import { HashLink } from 'react-router-hash-link';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScroll] = useState(false);

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
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                {/* <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        alt="logo"
                    />
                </Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('about')}>About me</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/thisara-bandara-294773240"><img src={navIcon1} alt="" /></a>
                            <a href="https://github.com/thisarabandara2"><img src={navIcon4} alt="" /></a>
                            <a href="https://www.instagram.com/thisara_b/?hl=en"><img src={navIcon3} alt="" /></a>
                            {/* <a href=""><img src={navIcon2} alt="" /></a> */}
                            
                        </div>
                        <HashLink to="#connect">
                            <button className="vvd"><span>Let’s Connect</span></button>
                        </HashLink>

                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
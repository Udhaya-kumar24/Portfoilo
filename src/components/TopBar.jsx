import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import '@fortawesome/fontawesome-free/css/all.min.css';


const TopBar = () => {

    const [colorChange, setColorChange] = useState(false);

    const changeNavbarColor = () => {
        const navBar = document.querySelector('.navbar-collapse');
        const hasClass = navBar.classList.contains('show');
        setColorChange(window.scrollY >= 80 || hasClass);
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNavbarColor);
        return () => {
            window.removeEventListener("scroll", changeNavbarColor);
        };
    }, []);



    return (
        <div className={colorChange ? 'nav_own colorChange' : 'nav_own'}>
            <Navbar collapseOnSelect expand="lg" className="navbar">
                <Navbar.Brand href="#home" className='menu-text bebas logo'>
                    <span className="theme-highlight logo-txt">U</span><span className="logo">Udhay</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='text-color' onClick={() => setColorChange(prevColorChange => !prevColorChange)} />
                <Navbar.Collapse id="responsive-navbar-nav"> 
                    <Nav className="h-100vh align-items-center justify-content-center">
                        <ScrollLink
                            activeClass='active'
                            spy={true}
                            to="homes"
                            className="nav-link menu-text"
                            smooth={true}
                            duration={500}
                        >
                            Home
                        </ScrollLink>
                        <ScrollLink
                            activeClass='active'
                            spy={true}
                            to="about"
                            className="nav-link menu-text"
                            smooth={true}
                            duration={500}
                        >
                            About
                        </ScrollLink>
                        <ScrollLink
                            activeClass='active'
                            spy={true}
                            to="skills"
                            className="nav-link menu-text"
                            smooth={true}
                            duration={500}
                        >
                            Skills
                        </ScrollLink>
                        <ScrollLink
                            activeClass='active'
                            spy={true}
                            to="experience"
                            className="nav-link menu-text"
                            smooth={true}
                            duration={500}
                        >
                            Experience
                        </ScrollLink>
                        <ScrollLink
                            activeClass='active'
                            spy={true}
                            to="contact"
                            className="nav-link menu-text"
                            smooth={true}
                            duration={500}
                        >
                            Contact
                        </ScrollLink>
                    </Nav>
                    <Button type='button' className='btn-primary rounded-pill' href='tel: 9043497797'>Let's Talk</Button>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default TopBar
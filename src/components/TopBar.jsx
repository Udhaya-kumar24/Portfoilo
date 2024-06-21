import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '@fortawesome/fontawesome-free/css/all.min.css';

const TopBar = () => {
    const [colorChange, setColorChange] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const changeNavbarColor = () => {
        setColorChange(window.scrollY >= 80 || expanded);
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNavbarColor);
        return () => {
            window.removeEventListener("scroll", changeNavbarColor);
        };
    }, [expanded]);

    // const toggleNavbarColor = () => {
    //     setColorChange(prevColorChange => !prevColorChange);
    // };

    const handleNavClick = () => {
        setExpanded(false);
        setColorChange(window.scrollY >= 80 || expanded);
    };

    const handleToggleClick = () => {
        setExpanded(!expanded);
        setColorChange(true);
    };
    
    return (
        <div className={colorChange ? 'nav_own colorChange' : 'nav_own'}>
            <Navbar collapseOnSelect expand="lg" className="navbar" expanded={expanded}>
                <Navbar.Brand href="#home" className='menu-text bebas logo'>
                    <span className="theme-highlight logo-txt">U</span><span className="logo">Udhay</span>
                </Navbar.Brand>
                <Navbar.Toggle 
                    aria-controls="responsive-navbar-nav" 
                    className='text-color' 
                    onClick={handleToggleClick}
                />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                    <Nav className="h-100vh align-items-center justify-content-center">
                        {['homes', 'about', 'skills', 'experience', 'contact'].map(section => (
                            <ScrollLink
                                key={section}
                                activeClass='active'
                                spy={true}
                                to={section}
                                className="nav-link menu-text"
                                smooth={true}
                                duration={500}
                                onClick={handleNavClick}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </ScrollLink>
                        ))}
                    </Nav>
                    <Button type='button' className='btn-primary rounded-pill' href='tel:9043497797'>Let's Talk</Button>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default TopBar;
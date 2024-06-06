import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const TopBar = () => {

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);


    return (<div className={colorChange ? 'nav_own colorChange' : 'nav_own'}>
                <Navbar className="navbar">
                    <Navbar.Brand href="#home" className='menu-text bebas logo'>
                        <span className="theme-highlight logo-txt">U</span><span className="logo">Udhay</span>
                    </Navbar.Brand>
                    <Nav className="ml-auto">

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
                </Navbar>
            </div>)
}

export default TopBar
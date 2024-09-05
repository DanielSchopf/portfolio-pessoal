import React, {useState} from 'react';
import { Link } from 'react-scroll';
import './styles/navbar.css';

function Navbar() {

    const[isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className='navbar'>
            <button className='menu-toggle' onClick={toggleMenu}>
                &#9776;
            </button>
            <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <Link to='sobre' className='navbar-link' smooth={true} duration={500}>Sobre mim</Link>
                <Link to='formacao' className='navbar-link' smooth={true} duration={500}>Formação</Link>
            </div>
            <Link to='contato' className='navbar-contato' smooth={true} duration={500}>Contate-me</Link>
        </nav>
    );
}

export default Navbar;

import React from 'react';
import { Link } from 'react-scroll';
import './styles/navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-links'>
                <Link to='sobre' className='navbar-link' smooth={true} duration={500}>Sobre mim</Link>
                <Link to='formacao' className='navbar-link' smooth={true} duration={500}>Formação</Link>
            </div>
            <Link to='contato' className='navbar-contato' smooth={true} duration={500}>Contate-me</Link>
        </nav>
    );
}

export default Navbar;

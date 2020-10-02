import React from 'react';
import { Link } from 'react-router-dom';

import letsRoomie from '../assets/static/lets-roomie-logo.svg';
import DropdownMenu from '../components/DropdownMenu';
import '../assets/styles/components/Navbar.scss';

const Navbar = () => {

    let token=2
    let dropMenu
    if(token===1){
        dropMenu=""
    }
    else{
        dropMenu=<DropdownMenu />
    }
    return(
        <header className='Header'>
<<<<<<< HEAD
            <Link to="/"><img alt="Logo" src={logo} className='Header__logo' /></Link>
            <nav className='Header__nav'>
                <Link to="/login"><button className='Header__nav--buttonLigth'>Login</button></Link>
                <Link to='/select-acount'><button className='Header__nav--button'>Crear cuenta</button></Link>
                {dropMenu}
=======
            <Link to="/"><img alt="Logotipo de Let's Roomie" src={letsRoomie} className='Header__logo' /></Link>
            <nav>
                <ul className='Header__nav'>
                    <Link to="/login"><button className='Header__nav--buttonLigth'>Login</button></Link>
                    <Link to='/select-acount'><button className='Header__nav--button'>Crear cuenta</button></Link>
                    <DropdownMenu />
                </ul>
>>>>>>> accessibility
            </nav>
        </header>
    );
};

export default Navbar;

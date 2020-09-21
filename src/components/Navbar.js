import React from 'react';
import { Link } from 'react-router-dom';



export const Navbar = () => {
    return (
        <nav className='navbar'>
        <div className='nav-center'>
            {/* <img src={logo} alt='cocktail' className='logo' /> */}
            <ul className='nav-links'>
            <li>
               <Link to='/'>Homepage</Link> 
               {/* <Link to='/about'>About</Link>  */}
            </li>
            </ul>
        </div>

        </nav>
    )
}

export default Navbar;
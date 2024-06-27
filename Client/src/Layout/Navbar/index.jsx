import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav>
<div className="MainAllNavbar">
    <div className="PagesInNavbar">
        <ul>
            <li><NavLink to={'/home'}>HOME</NavLink></li>
            <li><NavLink to={'/about'}>ABOUT US</NavLink></li>
            <li><NavLink to={'/gallery'}>GALLERY</NavLink></li>
            <li><NavLink to={'/drivers'}>DRIVERS</NavLink></li>
            <li><NavLink to={'/contact'}>CONTACT</NavLink></li>
        </ul>
    </div>
</div>
            </nav>
        </>
    )
}

export default Navbar
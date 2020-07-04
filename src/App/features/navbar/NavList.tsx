import React, { Fragment } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const NavList = () => {
    const location = useLocation()

    return (
        <Fragment>
            <li className='navmargin'>
                <NavLink
                    to='/Portfolio/'
                    className='list-item'
                    style={location.pathname === '/Portfolio/' ? { color: 'grey' } : { color: 'black' }}>Projects
                </NavLink>
            </li>
            <li className='navmargin'>
                <NavLink
                    to='/services'
                    className='list-item'
                    style={location.pathname === '/services' ? { color: 'grey' } : { color: 'black' }}>Services
                </NavLink>
            </li>
            <li className='navmargin'>
                <NavLink
                    to='/about'
                    className='list-item'
                    style={location.pathname === '/about' ? { color: 'grey' } : { color: 'black' }}>About
                </NavLink>
            </li>
        </Fragment>
    )
}

export default NavList

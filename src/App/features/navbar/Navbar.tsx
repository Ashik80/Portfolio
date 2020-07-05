import React, { useState } from 'react'
import NavToggler from './NavToggler'
import NavList from './NavList'
import SideNav from './SideNav'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <div className='nav'>
            <header className='navbar'>
                <h3 className='logo'>Ashik</h3>
                <ul className='nav-list'>
                    <NavList setToggle={setToggle} />
                </ul>
                <NavToggler setToggle={setToggle} />
            </header>
            {toggle && <SideNav setToggle={setToggle} />}
        </div>
    )
}

export default Navbar

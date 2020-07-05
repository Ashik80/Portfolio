import React from 'react'
import NavList from './NavList'

interface IProps {
    setToggle: (toggle: boolean) => void
}

const SideNav: React.FC<IProps> = ({ setToggle }) => {
    return (
        <div className='sidenav'>
            <div style={{ textAlign: 'right' }}>
                <button className='sidenavbar-btn' onClick={() => setToggle(false)}>
                    <i className='fas fa-times'></i>
                </button>
            </div>
            <ul className='sidenav-list' style={{ textAlign: 'center', padding: 0 }}>
                <NavList setToggle={setToggle} />
            </ul>
        </div>
    )
}

export default SideNav

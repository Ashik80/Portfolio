import React from 'react'

interface IProps {
    setToggle: (toggle: boolean) => void
}

const NavToggler: React.FC<IProps> = ({setToggle}) => {
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <button 
                className='navbar-btn' 
                onClick={() => setToggle(true)}
            >
                <i className='fas fa-bars'></i>
            </button>
        </div>
    )
}

export default NavToggler

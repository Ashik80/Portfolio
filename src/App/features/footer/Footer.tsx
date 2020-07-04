import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className='contact'>
                <i className='fab fa-facebook contact-icon' style={{color: '#3b5998'}}></i>
                <i className='fab fa-github contact-icon'></i>
                <i className='fab fa-whatsapp-square contact-icon' style={{color: '#4fce5d'}}></i>
                <i className='fab fa-discord contact-icon' style={{color: '#7289d9'}} ></i>
                <i className='fab fa-viber contact-icon' style={{color: '#665cac'}}></i>
            </div>
            <small>&copy; 2020 Ashikur Rahman product</small>
        </footer>
    )
}

export default Footer

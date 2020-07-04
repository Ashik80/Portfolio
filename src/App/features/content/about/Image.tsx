import React, { useState, useEffect } from 'react'
import img from './ashik.jpg'

const Image = () => {
    const [windowWidth, setWindowWidth] = useState(0)

    let resizeWindow = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        resizeWindow()
        window.addEventListener('resize', resizeWindow)
        return () =>  window.removeEventListener('resize', resizeWindow)
    }, [])

    return (
        <div className='myimg'>
            <img src={img} alt='' height={windowWidth <= 580 ? '200' : '400'}  />
        </div>
    )
}

export default Image

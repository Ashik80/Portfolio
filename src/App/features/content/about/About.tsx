import React, { useState, useEffect } from 'react'
import Image from './Image'
import Info from './Info'
import AboutMe from './AboutMe'

const About = () => {
    const [loaded, setLoaded] = useState(0)

    const aboutStyle = {
        opacity: loaded,
        transition: 'opacity 0.5s'
    }

    useEffect(() => {
        setLoaded(1)
    }, [])

    return (
        <div className='about' style={aboutStyle}>
            <div className='about-card'>
                <Image />
                <AboutMe />
            </div>
            <Info />
        </div>
    )
}

export default About

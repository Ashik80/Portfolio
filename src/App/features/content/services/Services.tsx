import React, { useState, useEffect } from 'react'
import ServiceCard from './serviceCard/ServiceCard'
import './services.css'
import palette from './serviceCard/palette.jpg'
import development from './serviceCard/development.jpg'
import Skills from './skills/Skills'

const Services = () => {
    const [loaded, setLoaded] = useState(0)

    const serviceStyle = {
        marginBottom: 100,
        opacity: loaded,
        transition: 'opacity 0.5s'
    }

    useEffect(() => {
        setLoaded(1)
    }, [])

    return (
        <div style={serviceStyle}>
            <div className='service-card-container'>
                <ServiceCard
                    icon={palette}
                    header='Web Design'
                    custClass='yellow'
                    description='HTML, CSS, Bootstrap, React and much more! Innovative and eye-catching
                    design. I believe in maintaining a standard.'
                />
                <ServiceCard
                    icon={development}
                    header='Web Development'
                    custClass='purple'
                    description='ASP .NET Core. Powerful, fast and secure webapps. Performance and security
                    is my priority'
                />
            </div>
            <div className='skills-container'>
                <Skills />
            </div>
        </div>
    )
}

export default Services

import React, { useState, useEffect } from 'react'
import Thumbnail from './Thumbnail'
import projectArray from './imgObject'

const Projects = () => {
    const [loaded, setLoaded] = useState(0)

    const projectStyle = {
        marginBottom: 100,
        opacity: loaded,
        transition: 'opacity 0.5s'
    }

    useEffect(() => {
        setLoaded(1)
    }, [])

    return (
        <div style={projectStyle} className='project'>
            {projectArray.map((proj) => (
                <div key={proj.id} className='project-thumbnails'>
                    <Thumbnail
                        thumbnail={proj}
                    />
                </div>
            ))}
        </div>
    )
}

export default Projects

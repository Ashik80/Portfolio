import React, { useEffect, useState } from 'react'
import projectArray from '../imgObject'
import { RouteComponentProps } from 'react-router-dom'
import { IProject } from '../../../../models/thumbnail'
import ImageView from './ImageView'
import '../projects.css'
import ProjectInfo from './ProjectInfo'

interface IProps {
    id: string
}

const Project: React.FC<RouteComponentProps<IProps>> = ({ match }) => {
    const [project, setProject] = useState<IProject | null>(null)

    useEffect(() => {
        setProject(projectArray.filter(project => project.id === parseInt(match.params.id))[0])
        return () => setProject(null)
    }, [match.params.id])

    return (
        <div>
            {project && (
                <>
                    <ImageView photos={project.photos} />
                    <div className='project-info'>
                        <ProjectInfo title={project.title} about={project.about} />
                    </div>
                </>
            )}
        </div>
    )
}

export default Project

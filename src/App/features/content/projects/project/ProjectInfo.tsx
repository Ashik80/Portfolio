import React from 'react'

interface IProps {
    title: string,
    about: string
}

const ProjectInfo: React.FC<IProps> = ({ title, about }) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{about}</p>
        </>
    )
}

export default ProjectInfo

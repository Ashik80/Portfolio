import React from 'react'
import SkillsHeader from './SkillsHeader'
import Progress from './Progress'

const progressData = [
    {
        id: 'HTML',
        bgcolor: 'orangered',
        completed: 95
    },
    {
        id: 'CSS',
        bgcolor: '#2965f1',
        completed: 85
    },
    {
        id: 'JavaScript/jQuery',
        bgcolor: '#f0db4f',
        completed: 64
    },
    {
        id: 'React JS',
        bgcolor: '#61dbfb',
        completed: 72
    },
    {
        id: 'ASP .NET Core',
        bgcolor: '#6020e4',
        completed: 87
    }
]

const Skills = () => {
    return (
        <div className='skills'>
            <SkillsHeader />
            <div className='progress-container'>
                {progressData.map(pro => (
                    <div key={pro.id}>
                        <h3>{pro.id}</h3>
                        <Progress bgcolor={pro.bgcolor} completed={pro.completed} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills

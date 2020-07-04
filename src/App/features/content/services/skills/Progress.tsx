import React, { useState, useEffect } from 'react'

interface IProps {
    bgcolor: string,
    completed: number
}

const Progress: React.FC<IProps> = ({bgcolor, completed}) => {
    const [counter, setCounter] = useState(50)

    const fillerStyles = {
        width: `${counter}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        height: '100%',
        textAlign: 'right' as 'right',
        transition: 'width 1s'
    }

    useEffect(() => {
        setCounter(completed)
    }, [completed])

    return (
        <div className='progress'>
            <div style={fillerStyles}>
                <span className='progress-bar'>{counter}%</span>
            </div>
        </div>
    )
}

export default Progress

import React from 'react'

interface IProps {
    h5?: string,
    p?: string
}

const InfoCard: React.FC<IProps> = ({ h5, p }) => {
    return (
        <div className='infoSize'>
            <h5>{h5}</h5>
            <p>{p}</p>
        </div>
    )
}

export default InfoCard

import React from 'react'

interface IProps {
    icon: string,
    header: string
}

const IconHeader: React.FC<IProps> = ({ icon, header }) => {
    return (
        <div className='icon-header'>
            <img src={icon} height='50' alt='' />
            <h3>{header}</h3>
        </div>
    )
}

export default IconHeader

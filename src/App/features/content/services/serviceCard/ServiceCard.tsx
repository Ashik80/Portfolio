import React from 'react'
import IconHeader from './IconHeader'

interface IProps {
    icon: string,
    header: string,
    custClass: string,
    description: string
}

const ServiceCard: React.FC<IProps> = ({ icon, header, custClass, description }) => {
    return (
        <div className={`service-card ${custClass}`}>
            <IconHeader icon={icon} header={header} />
            <p>{description}</p>
        </div>
    )
}

export default ServiceCard

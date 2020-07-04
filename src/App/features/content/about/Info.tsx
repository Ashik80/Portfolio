import React from 'react'
import InfoCard from './InfoCard'

const Info = () => {
    return (
        <div className='info-card-container'>
            <div className='info-card stu'>
                <h2>STUDIES</h2>
                <InfoCard h5='2006-2012' p='Dhanmondi Tutorial (O Level)' />
                <InfoCard h5='2013-2016' p='Cephalon Internation School (A Level)' />
                <InfoCard h5='2016-continued' p='Independent University, Bangladesh (CS)' />
            </div>

            <div className='info-card exp'>
                <h2>EXPERIENCES</h2>
                <InfoCard h5='2020-continued' p='Fullstack Developer' />
            </div>

            <div className='info-card int'>
                <h2>INTERESTS</h2>
                <InfoCard p='Mobile app development' />
                <InfoCard p='Artificial Intellegence (AI)' />
            </div>
        </div>
    )
}

export default Info

import React, { SyntheticEvent, useState } from 'react'
import { IProject } from '../../../models/thumbnail'
import { history } from '../../../../index'

const labelStyle = {
    textAlign: 'right' as 'right',
    color: 'white',
    position: 'absolute' as 'absolute',
    zIndex: 1,
    right: 15,
    bottom: 0,
    opacity: 1,
    transition: 'opacity 1s'
}

const notActiveLabel = {
    opacity: 0
}

interface IProps {
    thumbnail: IProject
}

const Thumbnail: React.FC<IProps> = ({ thumbnail }) => {
    const [targetId, setTargetId] = useState({ id: '' })

    const hoverHandle = (event: SyntheticEvent<HTMLDivElement>) => {
        setTargetId({ id: event.currentTarget.id })
    }

    return (
        <div
            className='thumbnail'
            id={thumbnail.id.toString()}
            style={{
                height: 250,
                width: thumbnail.width,
                position: 'relative',
                borderRadius: 15,
                overflow: 'hidden'
            }}
            onMouseOver={(e) => hoverHandle(e)}
            onMouseOut={(targetId) => setTargetId({ id: '' })}
            onClick={() => history.push(`/project/${thumbnail.id}`)}
        >
            <img
                src={`./img/projThumbnails/${thumbnail.img}`}
                height='250'
                width={thumbnail.width}
                alt=''
                style={
                    targetId.id === thumbnail.id.toString() ?
                        { position: 'absolute' as 'absolute', filter: 'brightness(60%)' } :
                        {}
                }
            />
            <div style={targetId.id === thumbnail.id.toString() ? labelStyle : notActiveLabel}>
                <h3>{thumbnail.title}</h3>
                <p>{thumbnail.description}</p>
            </div>
        </div>
    )
}

export default Thumbnail

import React, { useState, useEffect } from 'react'
import { IPhoto } from '../../../../models/thumbnail'

interface IProps {
    photos: IPhoto[]
}

const ImageView: React.FC<IProps> = ({ photos }) => {
    const [width, setWidth] = useState(0)

    let resizeWindow = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        resizeWindow()
        window.addEventListener('resize', resizeWindow)
        return () => window.removeEventListener('resize', resizeWindow)
    }, [])

    return (
        <div className='image-view'>
            {photos.map(photo => (
                <div key={photo.id} className='photo-container'>
                    <img
                        src={process.env.PUBLIC_URL + `/img/projects/${photo.title}`}
                        alt=''
                        height={width <= 580 && width > 420 ? '250'
                            : width <= 420 ? '180'
                                : '350'
                        }
                        width={width <= 580 && width > 420 ? '490'
                            : width <= 420 ? '350'
                                : photo.width}
                    />
                </div>
            ))}
        </div>
    )
}

export default ImageView

import * as React from 'react'

export default ({ link }) => (
    <iframe
        className='mx-auto w-full max-h-screen'
        height='512'
        src={link}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
    />
)

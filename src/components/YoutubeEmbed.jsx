import * as React from 'react'

export default ({ link }) => {
    // https://youtube.com/embed/{videoID}
    let youtubeLink = ''
    if (link.includes('embed')) youtubeLink = link
    else {
        if (link.includes('watch')) {
            const videoID = link.substring(
                link.indexOf('v=') + 2,
                link.indexOf('&')
            )
            youtubeLink = `https://youtube.com/embed/${videoID}`
        }
        if (link.includes('youtu.be')) {
            const videoID = link.split('/')[3]
            youtubeLink = `https://youtube.com/embed/${videoID}`
        }
    }

    return (
        <iframe
            className='mx-auto w-full max-h-80 sm:max-h-screen'
            height='512'
            title='Youtube Video'
            src={youtubeLink}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
        />
    )
}

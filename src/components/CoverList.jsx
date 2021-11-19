import * as React from 'react'
import YoutubeEmbed from './YoutubeEmbed'
import Img from 'gatsby-image'

const Video = ({src}) => (
    <video className="mx-auto max-w-full max-h-screen md:py-4 lg:py-8" controls>
        <source src={src} type="video/mp4" />
    </video>
)


export default ({ covers }) => (
    <div className='w-full max-w-4xl flex flex-col items-center space-y-16 md:space-y-12 py-12'>
        {covers &&
            covers.edges.map(({ node }) => (
                <div className='w-full' key={node.id}>
                    {node.type === 'youtube' ? (
                        <YoutubeEmbed link={node.youtube} />
                    ) : node.type === 'image' ? (
                        <Img
                            fluid={node.image.fluid}
                            title={node.titre}
                            alt={node.titre}
                        />
                    ) : <Video src={node.image.file.url} />}
                </div>
            ))}
    </div>
)

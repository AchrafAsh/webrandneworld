import * as React from 'react'
import YoutubeEmbed from './YoutubeEmbed'
import Img from 'gatsby-image'

export default ({ covers }) => (
    <div className='w-full max-w-4xl flex flex-col items-center space-y-24 md:space-y-12 py-12'>
        {covers &&
            covers.edges.map(({ node }) => (
                <div className='w-full' key={node.id}>
                    {node.type === 'youtube' ? (
                        <YoutubeEmbed link={node.youtube} />
                    ) : (
                        <Img
                            fluid={node.image.fluid}
                            title={node.titre}
                            alt={node.titre}
                        />
                    )}
                </div>
            ))}
    </div>
)

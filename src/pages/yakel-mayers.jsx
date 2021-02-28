import * as React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import { TopTitle, YoutubeEmbed } from '../components/index'

export const data = graphql`
    {
        covers: allContentfulCover(filter: { artist: { eq: "Yakel Mayers" } }) {
            edges {
                node {
                    id
                    titre
                    type
                    youtube
                    image {
                        fixed(width: 250, height: 200) {
                            ...GatsbyContentfulFixed
                        }
                        fluid {
                            ...GatsbyContentfulFluid_tracedSVG
                        }
                    }
                }
            }
        }
    }
`

export default ({ data }) => {
    return (
        <Layout title='Yakel Mayers' back>
            <div className='flex flex-col items-center'>
                <TopTitle artist='yakel-mayers' />
                <div className='w-full max-w-4xl flex flex-col items-center space-y-12 py-12'>
                    {data &&
                        data.covers &&
                        data.covers.edges.map(({ node }) => (
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
            </div>
        </Layout>
    )
}

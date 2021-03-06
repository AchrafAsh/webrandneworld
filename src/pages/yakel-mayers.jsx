import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { CoverList, TopTitle } from '../components/index'

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
                {data && <CoverList covers={data.covers} />}
            </div>
        </Layout>
    )
}

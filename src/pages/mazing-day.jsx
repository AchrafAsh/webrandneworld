import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { TopTitle, CoverList } from '../components/index'

export const data = graphql`
    {
        covers: allContentfulCover(filter: { artist: { eq: "Mazing Day" } }) {
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
        <Layout title='Mazing Day' back>
            <div className='flex flex-col items-center font-lemon font-medium'>
                <TopTitle artist='mazing-day' />
                {data && <CoverList covers={data.covers} />}
            </div>
        </Layout>
    )
}

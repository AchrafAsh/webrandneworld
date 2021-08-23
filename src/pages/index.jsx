import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout title='Home' hide>
            <div
                className='h-screen md:p-24 lg:max-w-8xl lg:mx-auto bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url(/background.gif)` }}
            >
                <div className='grid grid-cols-1 justify-items-stretch md:grid-cols-2 h-full'>
                    <ArtistCard
                        href='/mazing-day'
                        title='Mazing Day'
                        image='/MAZING_DAY.gif'
                    />
                    <ArtistCard
                        href='/yakel-mayers'
                        title='Yakel Mayers'
                        image='/yakel_mayers.gif'
                    />
                </div>
            </div>
        </Layout>
    )
}

const ArtistCard = ({ href, image, title }) => (
    <Link to={href}>
        <div
            className='h-full w-full bg-center bg-cover bg-no-repeat'
            style={{ backgroundImage: `url(${image})` }}
            alt={title}
            title={title}
        />
    </Link>
)

export default IndexPage

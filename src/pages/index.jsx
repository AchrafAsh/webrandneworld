import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

// import mazingDayGif from '../images/mazing-day.gif'
// import yakelMayersGif from '../images/yakel-mayers.gif'
import mazingDayGif from '../images/small_mazing_day.gif'
import yakelMayersGif from '../images/small_yakel_mayers.gif'

const IndexPage = () => {
    return (
        <Layout title='Home' hide>
            <div className='h-screen md:max-h-screen md:p-24 lg:max-w-7xl lg:mx-auto'>
                <div className='h-full w-full grid grid-cols-1 md:grid-cols-2 md:gap-1'>
                    <ArtistCard
                        href='/mazing-day'
                        title='Mazing Day'
                        image={mazingDayGif}
                    />
                    <ArtistCard
                        href='/yakel-mayers'
                        title='Yakel Mayers'
                        image={yakelMayersGif}
                    />
                </div>
            </div>
        </Layout>
    )
}

const ArtistCard = ({ href, image, title }) => (
    <Link to={href} className='w-full h-full'>
        <img src={image} alt={title} title={title} className='h-full w-full' />
    </Link>
)

export default IndexPage

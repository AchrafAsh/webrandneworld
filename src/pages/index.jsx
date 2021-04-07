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
            <div className='h-screen md:max-h-screen lg:p-12 lg:max-w-4xl lg:mx-auto'>
                <div className='h-full w-full grid grid-cols-1 md:gap-2'>
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
    <Link to={href} className='w-full h-full overflow-hidden'>
        <img
            src={image}
            alt={title}
            title={title}
            className='h-full w-full transform hover:scale-150 transition-all duration-700'
        />
    </Link>
)

export default IndexPage

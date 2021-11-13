import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const LoadingScreen = () => (
    <main className='h-screen w-full bg-gray-100 flex items-center justify-center'>        
        <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-600"></div>
        </div>
    </main>
)


const IndexPage = () => {
    const [mazingDayImageSrc, setMazingDayImageSrc] = React.useState('')
    const [yakelMayersImageSrc, setYakelMayersImageSrc] = React.useState('')

    React.useEffect(() => {
        const bgImgMazingDay = new Image()
        const bgImgYakelMayers = new Image()
        
        bgImgMazingDay.onload = () => {
            setMazingDayImageSrc(bgImgMazingDay.src)
        }
        bgImgMazingDay.src = '/mazing_day.gif'

        bgImgYakelMayers.onload = () => {
            setYakelMayersImageSrc(bgImgYakelMayers.src)
        }
        bgImgYakelMayers.src = '/yakel_mayers.gif'
    })

    if(mazingDayImageSrc === '' || yakelMayersImageSrc === ''){
        return <LoadingScreen />
    }

    return (
        <Layout title='Home' hide>
            <div className='h-screen md:p-24 lg:max-w-8xl lg:mx-auto'>
                <div className='grid grid-cols-1 justify-items-stretch md:grid-cols-2 h-full'>
                    <ArtistCard
                        href='/mazing-day'
                        title='Mazing Day'
                        image={mazingDayImageSrc}
                    />
                    <ArtistCard
                        href='/yakel-mayers'
                        title='Yakel Mayers'
                        image={yakelMayersImageSrc}
                    />
                </div>
            </div>
        </Layout>
    )
}

const ArtistCard = ({ href, image, title }) =>  (
    <Link to={href}>
        <div
            className='h-full w-full bg-center bg-cover bg-no-repeat artist-3d-model'
            style={{ backgroundImage: `url(${image})` }}
            alt={title}
            title={title}
        />
    </Link>
)

export default IndexPage

import * as React from 'react'
import Layout from '../components/layout'
import ArtistCard from '../components/ArtistCard'
import LoadingScreen from '../components/LoadingScreen'


const IndexPage = () => {
    const [loading, setLoading] = React.useState({ yakelMayers:true, mazingDay:true })

    React.useEffect(() => {
        const mazingDayThumbnail = new Image()
        const yakelMayersThumbnail = new Image()

        mazingDayThumbnail.onload = () => { setLoading(prev => ({...prev, mazingDay:false}))}
        yakelMayersThumbnail.onload = () => { setLoading(prev => ({...prev, yakelMayers: false})) }

        mazingDayThumbnail.src = 'mazing_day_thumbnail.png'
        yakelMayersThumbnail.src = 'yakel_mayers_thumbnail.png'
    })

    if (loading.yakelMayers || loading.mazingDay) return <LoadingScreen />

    return (
        <Layout title='Home' hide>
            <div className='h-screen md:p-24 lg:max-w-8xl lg:mx-auto'>
                <div className='grid grid-cols-1 justify-items-stretch md:grid-cols-2 h-full'>
                    <ArtistCard
                        href='/mazing-day'
                        title='Mazing Day'
                        slug='mazing_day'
                    />
                    <ArtistCard
                        href='/yakel-mayers'
                        title='Yakel Mayers'
                        slug='yakel_mayers'
                    />
                </div>
            </div>
        </Layout>
    )
}


export default IndexPage

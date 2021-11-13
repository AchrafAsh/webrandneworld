import * as React from 'react'
import Layout from '../components/layout'
import ArtistCard from '../components/ArtistCard'
import LoadingScreen from '../components/LoadingScreen'


const IndexPage = () => {
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

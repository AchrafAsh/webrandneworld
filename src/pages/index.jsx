import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

// import mazingDayGif from '../images/mazing-day.gif'
// import yakelMayersGif from '../images/yakel-mayers.gif'
import cover from '../images/cover.png'

const IndexPage = () => {
    return (
        <Layout title='Home' hide>
            <div className='w-full h-screen md:h-full flex justify-center items-center'>
                <div className='w-full h-full flex flex-col md:flex-row justify-center items-center md:space-x-1'>
                    <Link to='/mazing-day' className='h-1/2 md:h-auto'>
                        <div className='max-h-full relative w-full overflow-hidden flex items-center justify-center'>
                            <img
                                src={cover}
                                alt='Mazing Day'
                                title='Mazing Day'
                                className='bg-contain transform hover:scale-125 transition-all duration-700'
                            />
                            <span className='font-lemon absolute bottom-14 inset-x-0 text-center text-white text-3xl'>
                                Mazing Day
                            </span>
                        </div>
                    </Link>
                    <Link to='/yakel-mayers' className='h-1/2 md:h-auto'>
                        <div className='max-h-full relative w-full overflow-hidden flex items-center justify-center'>
                            <img
                                src={cover}
                                alt='Yakel Mayers'
                                title='Yakel Mayers'
                                className='transform hover:scale-125 transition-all duration-700'
                            />
                            <span className='absolute bottom-14 inset-x-0 text-center text-white text-3xl'>
                                Yakel Mayers
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage

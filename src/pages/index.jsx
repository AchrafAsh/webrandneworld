import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

import cover from '../images/cover.png'

const IndexPage = () => {
    return (
        <Layout title='Home' hide>
            <div className='w-full h-full flex justify-center items-center'>
                <div className='w-full flex flex-row justify-center items-center space-x-12'>
                    <Link to='/mazing-day'>
                        <div className='relative w-full overflow-hidden'>
                            <img
                                src={cover}
                                alt='Mazing Day'
                                title='Mazing Day'
                                className='transform hover:scale-125 transition-all duration-700'
                            />
                            <span className='absolute bottom-14 inset-x-0 text-center text-white text-3xl'>
                                Mazing Day
                            </span>
                        </div>
                    </Link>
                    <Link to='/yakel-mayers'>
                        <div className='relative w-full overflow-hidden'>
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

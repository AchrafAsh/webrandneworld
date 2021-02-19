import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

import cover from '../images/cover.png'

// markup
const IndexPage = () => {
    return (
        <Layout>
            <div className='w-full h-full flex justify-center items-center'>
                <div className='w-full flex flex-row justify-center items-center space-x-12'>
                    <Link to='/mazing-day'>
                        <div className='relative'>
                            <img src={cover} />
                            <span className='absolute bottom-14 inset-x-0 text-center text-white text-3xl'>
                                Mazing Day
                            </span>
                        </div>
                    </Link>
                    <Link to='/yakel-mayers'>
                        <div className='relative'>
                            <img src={cover} />
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

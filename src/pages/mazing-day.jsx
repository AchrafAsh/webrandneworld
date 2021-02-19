import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Cover1 from '../images/cover_1.png'
import Cover2 from '../images/cover_2.png'
import Cover3 from '../images/cover_3.png'

export default () => (
    <Layout back>
        <div className='flex flex-col items-center'>
            <div className='flex flex-row space-x-4 items-center text-2xl p-12'>
                <Link to='/mazing-day'>
                    <h1>Mazing Day</h1>
                </Link>
                <span>|</span>
                <Link to='/yakel-mayers'>
                    <h1>Yakel Mayers</h1>
                </Link>
            </div>
            <div className='w-full flex flex-col items-center space-y-12 py-12'>
                <img src={Cover1} />
                <img src={Cover2} />
                <img src={Cover3} />
            </div>
        </div>
    </Layout>
)

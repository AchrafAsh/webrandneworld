import * as React from 'react'
import Layout from '../components/layout'
import Cover1 from '../images/cover_1.png'
import Cover2 from '../images/cover_2.png'
import Cover3 from '../images/cover_3.png'
import TopTitle from '../components/TopTitle'

export default () => (
    <Layout back>
        <div className='flex flex-col items-center'>
            <TopTitle artist='yakel-mayers' />
            <div className='w-full flex flex-col items-center space-y-12 py-12'>
                <img src={Cover1} alt='' title='Cover' />
                <img src={Cover2} alt='' title='Cover' />
                <img src={Cover3} alt='' title='Cover' />
            </div>
        </div>
    </Layout>
)

import * as React from 'react'
import { Link } from 'gatsby'

import snapchat from '../images/snapchat.svg'
import instagram from '../images/instagram.svg'
import facebook from '../images/facebook.svg'
import cover from '../images/cover.png'

export const SideBar = () => (
    <div className='flex flex-col items-center space-y-12 px-12 py-24'>
        <div className='border border-black flex-1' />
        <div className='flex flex-col items-center space-y-6'>
            <a className='w-6'>
                <img src={snapchat} />
            </a>
            <a className='w-6'>
                <img src={instagram} />
            </a>
            <a className='w-6'>
                <img src={facebook} />
            </a>
        </div>
        <div className='border border-black flex-1' />
    </div>
)

// markup
const IndexPage = () => {
    return (
        <main className='flex flex-row min-h-screen w-full'>
            <SideBar />
            <div className='w-full flex flex-row justify-center items-center space-x-12'>
                <Link to='/artista'>
                    <div className='relative'>
                        <img src={cover} />
                        <span className='absolute bottom-14 inset-x-0 text-center text-white text-3xl'>
                            Cyril Kanini
                        </span>
                    </div>
                </Link>
                <Link to='/artistb'>
                    <div className='relative'>
                        <img src={cover} />
                        <span className='absolute bottom-14 inset-x-0 text-center text-white text-3xl'>
                            Cyril Kanini
                        </span>
                    </div>
                </Link>
            </div>
        </main>
    )
}

export default IndexPage

import * as React from 'react'
import { Link } from 'gatsby'

import cover from '../images/cover.png'
import { SideBar } from '.'

export default () => (
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

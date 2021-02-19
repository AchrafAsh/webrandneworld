import * as React from 'react'
import { Link } from 'gatsby'

export default ({ artist }) => (
    <div className='flex flex-row space-x-4 items-center text-2xl p-12'>
        <Link to='/mazing-day'>
            <h1
                className={
                    artist === 'mazing-day' ? 'font-medium' : 'font-light'
                }
            >
                Mazing Day
            </h1>
        </Link>
        <span className='font-light text-gray-300'>|</span>
        <Link to='/yakel-mayers'>
            <h1
                className={
                    artist === 'yakel-mayers' ? 'font-medium' : 'font-light'
                }
            >
                Yakel Mayers
            </h1>
        </Link>
    </div>
)

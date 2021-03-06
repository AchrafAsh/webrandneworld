import * as React from 'react'
import { Link } from 'gatsby'

export default ({ artist }) => (
    <div className='text-2xl px-6 pt-12'>
        {artist === 'yakel-mayers' ? (
            <Link to='/yakel-mayers'>
                <h1>Yakel Mayers</h1>
            </Link>
        ) : (
            <Link to='/mazing-day'>
                <h1>Mazing Day</h1>
            </Link>
        )}
    </div>
)

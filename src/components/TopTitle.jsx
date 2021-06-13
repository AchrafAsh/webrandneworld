import * as React from 'react'

const capitalize = (s) =>
    (s && s[0].toUpperCase() + s.slice(1)).replace('-', ' ') || ''

const TopTitle = ({ artist, classes }) => (
    <div className='text-3xl px-6 pt-12'>
        <h1 className={classes}>{capitalize(artist)}</h1>
    </div>
)

export default TopTitle

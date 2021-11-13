import * as React from 'react'
import { Link } from 'gatsby'

const ArtistCard = ({ href, title, slug }) =>  {
    const [src, setSrc] = React.useState(`${slug}_thumbnail.png`)
    
    React.useEffect(() => {
        const image = new Image()
        image.onload = () => setSrc(image.src)
        image.src = `${slug}.gif`
    })
    
    return (
        <Link to={href}>
            <div
                className='h-full w-full bg-center bg-cover bg-no-repeat artist-3d-model'
                style={{ backgroundImage: `url(${src})` }}
                alt={title}
                title={title}
            />
        </Link>
)}

export default ArtistCard
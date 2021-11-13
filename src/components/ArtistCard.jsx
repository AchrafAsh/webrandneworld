import * as React from 'react'
import { Link } from 'gatsby'
import LoadingScreen from './LoadingScreen'

const ArtistCard = ({ href, title, slug }) =>  {
    const [src, setSrc] = React.useState(`${slug}_thumbnail.png`)
    const [status, setStatus] = React.useState('LOADING') // LOADING > THUMBNAIL > GIF

    React.useEffect(() => {
        const image = new Image()
        switch(status){
            case 'LOADING':
                image.onload = () => setSrc(image.src)
                image.src = `${slug}_thumbnail.png`
                setStatus('THUMBNAIL')
                break
            case 'THUMBNAIL':
                image.onload = () => setSrc(image.src)
                image.src = `${slug}.gif`
                setStatus('GIF')
                break
            
            default: break
        }
    }, [status, slug])
    
    if (status === 'LOADING') return <LoadingScreen />

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
import * as React from 'react'
import Layout from '../components/layout'

const useTimeout = (callback, delay) => {
    const savedCallback = React.useRef()

    React.useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    React.useEffect(() => {
        function tick() {
            savedCallback.current()
        }
        if (delay !== null) {
            let id = setTimeout(tick, delay)
            return () => clearTimeout(id)
        }
    }, [delay])
}

// markup
const NotFoundPage = () => {
    useTimeout(() => {
        if (typeof window !== 'undefined') {
            window.location = '/'
        }
    }, 3000)
    return (
        <Layout title='Ooops' hide>
            <div className='h-full flex flex-col space-y-2 items-center justify-center'>
                <h1 className='text-8xl font-black'>404</h1>
                <h1 className='text-5xl font-black'>Page not found</h1>
            </div>
        </Layout>
    )
}

export default NotFoundPage

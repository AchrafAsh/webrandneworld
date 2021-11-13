import * as React from 'react'

const LoadingScreen = () => (
    <main className='h-screen w-full bg-gray-100 flex items-center justify-center'>        
        <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-600"></div>
        </div>
    </main>
)

export default LoadingScreen
import * as React from 'react'
import Sidebar from './sidebar'

export default ({ back, children }) => (
    <>
        <main className='flex flex-row min-h-screen w-full'>
            <Sidebar back={back} />
            <section className='w-full pl-24'>{children}</section>
        </main>
        <footer className='w-full border-t border-gray-200 mt-24'>
            <div className='max-w-5xl mx-auto py-12 text-gray-600'>
                <small>
                    © {new Date().getFullYear()} - Mazing Day & Yakel Mayers
                </small>
            </div>
        </footer>
    </>
)

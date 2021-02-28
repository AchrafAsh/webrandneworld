import * as React from 'react'
import Sidebar from './sidebar'
import SEO from './SEO'

export default ({ title, back, children, hide }) => (
    <>
        <SEO title={title} />
        <main className='flex flex-row min-h-screen w-full'>
            {!hide && <Sidebar back={back} />}
            <section className={`w-full ${hide ? '' : 'pl-24'}`}>
                {children}
            </section>
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

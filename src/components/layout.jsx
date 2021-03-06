import * as React from 'react'
import { Topbar, Sidebar } from './sidebar'
import SEO from './SEO'

export default ({ title, back, children, hide }) => (
    <div className='min-h-screen flex flex-col'>
        <SEO title={title} />
        <main className='flex-1 flex flex-col-reverse sm:flex-row'>
            {!hide && (
                <>
                    <div className='hidden sm:block'>
                        <Sidebar back={back} />
                    </div>
                    <div className='sm:hidden'>
                        <Topbar back={back} />
                    </div>
                </>
            )}
            <section className={`w-full ${hide ? '' : 'sm:pl-24'}`}>
                {!hide && <div className='mb-12 sm:mb-0' />}
                {children}
            </section>
        </main>
        <footer className='w-full border-t border-gray-200'>
            <div className='max-w-5xl mx-auto p-6 sm:p-12 text-gray-600'>
                <small>
                    © {new Date().getFullYear()} - Mazing Day & Yakel Mayers
                </small>
            </div>
        </footer>
    </div>
)

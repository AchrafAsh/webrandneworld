import * as React from 'react'
import { Topbar, Sidebar } from './sidebar'
import SEO from './SEO'

export default ({ title, back, children, hide }) => {
    let artist
    if (title === 'Yakel Mayers') artist = 'yakel-mayers'
    if (title === 'Mazing Day') artist = 'mazing-day'

    return (
        <div
            className='min-h-screen flex flex-col bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: hide ? '' : `url(/background.gif)` }}
        >
            <SEO title={title} />
            <main
                className={`flex-1 ${
                    hide ? '' : 'flex flex-col-reverse sm:flex-row'
                }`}
            >
                {!hide && (
                    <>
                        <div className='hidden sm:block'>
                            <Sidebar back={back} artist={artist} />
                        </div>
                        <div className='sm:hidden'>
                            <Topbar back={back} artist={artist} />
                        </div>
                    </>
                )}
                {hide ? (
                    <>{children}</>
                ) : (
                    <section className={`w-full ${hide ? '' : 'sm:pl-24'}`}>
                        {!hide && <div className='mb-12 sm:mb-0' />}
                        {children}
                    </section>
                )}
            </main>
        </div>
    )
}

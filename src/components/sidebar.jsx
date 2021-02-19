import * as React from 'react'
import { Link } from 'gatsby'
import Facebook from '../images/Facebook.png'
import Instagram from '../images/Instagram.png'
import Snapchat from '../images/Snapchat.png'

export default ({ back }) => (
    <div className='fixed flex flex-col items-center justify-center space-y-12 px-12 py-24 h-screen'>
        {back && (
            <Link to='/'>
                <div className='absolute top-10 left-10 flex flex-col space-y-1 items-center text-center'>
                    <svg
                        className='w-6 fill-current'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M10 19l-7-7m0 0l7-7m-7 7h18'
                        />
                    </svg>
                    <span className='text-xs font-light'>Back Home</span>
                </div>
            </Link>
        )}
        <div className='flex flex-col items-center space-y-6'>
            <a
                target='_blank'
                rel='noreferrer noopener'
                href='https://snapchat.com'
                className='w-6'
            >
                <img
                    src={Snapchat}
                    alt='Snapchat'
                    title='Follow us on Snapchat'
                />
            </a>
            <a
                target='_blank'
                rel='noreferrer noopener'
                href='https://instagram.com'
                className='w-6'
            >
                <img
                    src={Instagram}
                    alt='Instagram'
                    title='Follow us on Instagram'
                />
            </a>
            <a
                target='_blank'
                rel='noreferrer noopener'
                href='https://facebook.com'
                className='w-6'
            >
                <img
                    src={Facebook}
                    alt='Facebook'
                    title='Follow us on Facebook'
                />
            </a>
        </div>
    </div>
)

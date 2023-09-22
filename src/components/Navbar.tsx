import React from 'react'
import { Container } from './Container'
import Image from 'next/image'
import Link from 'next/link'
import { type } from 'os'


export const Navbar = () => {
  return (
    <nav className='flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 py-7 text-white'
    >
        <Container className=''>
            <div className='w-full flex-between'>
                <Link href='/'>
                    <Image  src='/jsm-logo.svg'
                            width={55}
                            height={40}
                            alt='Brand logo of JSM'
                    />
                </Link>

                <Image  src='/hamburger-menu.svg'
                        width={30}
                        height={30}
                        alt='menu logo'
                        className='block md:hidden'
                />

                <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10'
                >
                    <li className='body-text text-gradient_blue-purple font-bold'>
                        <Link   href="https://jsmastery.pro/nextjs13"
                                target="_blank"
                        >
                            Next.Js 13.4 Course
                        </Link>
                    </li>

                    <li className='body-text !font-normal'>
                        <Link   href="https://jsmastery.pro/masterclass"
                                target="_blank"
                        >
                            Masterclass
                        </Link>
                    </li>
                </ul>
            </div>
        </Container>
    </nav> 
  )
}
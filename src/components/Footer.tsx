import React from 'react'
import { Container } from './Container'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='text-white-800 flex-between  body-text w-full gap-y-10 border-t border-black-400 bg-black-100 text-center'
    >
        <Container className='px-20 py-12'>
            <div className='flex-between max-md:flex-col w-full'>
                <p>Copyright © 2023 JS MASTERY PRO | All Rights Reserved</p>

                <div className='flex gap-x-9'
                >
                    <Link href='/terms-of-use'>
                        Terms & Conditions
                    </Link>

                    <Link href='/privacy-policy'>
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </Container>
    </footer>
  )
}

'use client'

import Image from 'next/image';
import { Input } from "@/components/ui/input"
import { useState } from 'react';


export const SearchForm = () => {

    const [search, setSearch] = useState('')
  return (
    <form className='flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5'>
        <label className='flex-center relative w-full max-w-3xl'>
            <Image  src='/magnifying-glass.svg'
                    width={32}
                    height={32}
                    alt='search icon'
                    className='absolute left-8'
            />

            <Input type='text'
                    placeholder='Search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800'
            />
        </label>
    </form>
  )
}

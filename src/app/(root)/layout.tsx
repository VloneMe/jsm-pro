import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ReactNode } from 'react';

interface layoutProp {
    children: ReactNode
}

export default function layout({ children }: layoutProp) {
  return (
    <>
        <Navbar />
          {children}
        <Footer />
    </>
  )
}
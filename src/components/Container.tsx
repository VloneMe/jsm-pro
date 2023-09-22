import React, { ReactNode } from 'react';

type ContainerProps = {
    children: ReactNode;
    className?: string;
}

export const Container = ({ 
    children, className 
}: ContainerProps) => {
  return (
    <div className={`container max-w-screen-2xl 
                     h-full mx-auto flex 
                    //  px-6 xs:px-8 sm:px-16 
                     ${className}`}
    >{children}</div>
  )
}

import React from 'react'
import paperimage from '@/assets/Design-image/paper.svg'

// This component will accept children and display them in a paper-like style
// It can be used to display text, images, or any other content in a paper-like

interface PaperProps {
    children: React.ReactNode;
    classname?: string
}

const Paper:  React.FC<PaperProps> = ({children, classname}) => {
  return (
        <div className={`relative w-full max-h-full h-screen  ${classname}`}>
            <img src={paperimage} alt="paper" className='absolute top-0 left-0 w-full h-full object-cover' />
            <div className='relative z-10 p-4'>
            {children}
            </div>
        </div>
    
  )
}

export default Paper
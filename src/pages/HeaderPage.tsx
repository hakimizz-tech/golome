

import {useState} from 'react'
import { Header } from '@/components/Header'
import { MobileSheet } from '@/components/MobileSheet'

interface HeaderPageProps {
    className?: string
}

function HeaderPage({className} : HeaderPageProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const handleMenuClick = () => {
        setIsMobileMenuOpen(true)
    }
    const handleMenuClose = () => {
        setIsMobileMenuOpen(false)
    }
  return (
    <div>
        <Header onMenuClick={handleMenuClick}  classname={`${className}`}/>
        <MobileSheet isOpen={isMobileMenuOpen} onClose={handleMenuClose} />
    </div>
  )
}

export default HeaderPage
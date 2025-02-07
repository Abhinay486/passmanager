import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-end bg-foreground h-8 text-white'>
        <span>NOPASS</span>
        <ul className='flex justify-center gap-2'>
            
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
        </ul>
    </nav>
  )
}

export default Navbar


















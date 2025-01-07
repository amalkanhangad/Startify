import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { auth } from '@/auth'

const Navbar = async () => {
    const session = await auth()
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between tems center"></nav>
      <Link href="/">
        <Image src= "/startify_logo.png" alt="logo" width={144} height={30}/>
      </Link>
    </header>
  )
}

export default Navbar

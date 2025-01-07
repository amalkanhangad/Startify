import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { auth } from '@/auth'
import { signOut } from 'next-auth/react'

const Navbar = async () => {
    const session = await auth()
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between tems center"></nav>
      <Link href="/">
        <Image src= "/startify_logo.png" alt="logo" width={144} height={30}/>
      </Link>

      <div className="flex items-center gap-5">
        {session && session.user?(
            <>
            <Link href="/startup/create">
            <span>Create</span>
            </Link>
            <button onClick={signOut}>
                <span>Logout</span>
            </button>

            <Link href ={`/user/${session?.id}`}>
            <span>{session?.user?.name}</span>
            </>
        )}
      </div>
    </header>
  )
}

export default Navbar

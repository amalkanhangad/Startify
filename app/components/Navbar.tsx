import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { auth, signIn, signOut } from '@/auth'

interface Session {
  user: {
    name: string;
    id: string;
  } | null;
}

const Navbar = async () => {
  const session = await auth() as Session;

  const handleSignIn = async () => {
    'use server'
    await signIn('github')
  }

  const handleSignOut = async () => {
    'use server'
    await signOut()
  }

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={104} height={10} />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <form action={handleSignOut}>
                <button type="submit">
                  <span>Logout</span>
                </button>
              </form>
              <Link href={`/user/${session.user.id}`}>
                <span>{session.user.name}</span>
              </Link>
            </>
          ) : (
            <form action={handleSignIn}>
              <button type="submit">
                <span>Login</span>
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { signIn, signOut, getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'

const NavButton = ({ nama, href }) => {
  return (
    <Link href={href} className='flex align-middle p-2'>
      {nama}
    </Link>
  );
};

function Navbar() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session);
    };
    fetchSession();
  }, []);

  return (
    <div className='flex flex-row font-semibold align-middle bg-white justify-between py-2 bg-gradient-to-b from-blue-800 px-40 pb-20 pt-5'>
      <div>
        <img className='flex h-20' src="/logo_solusi.png" alt="logo" />
      </div>
      <div className='flex align-middle space-x-6 m-8 '>
        <NavButton nama="Home" href="/" />
        <NavButton nama="Paket Tour" href="/paket" />
        <NavButton nama="Armada" href="/armada" />
        <NavButton nama="Gallery" href="/gallery" />
        {session ? (
          <button onClick={() => signOut()}>Sign Out</button>
        ) : (
          <button onClick={() => signIn()}>Sign In</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;

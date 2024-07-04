
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { usePathname } from "next/navigation";
import { Navbar as FlowbiteNavbar, Button, Dropdown } from "flowbite-react";
import { getEmailUserFromLocalStorage, getNameUserFromLocalStorage, getTokenUserFromLocalStorage, removeEmailUserFromLocalStorage, removeNameUserFromLocalStorage, removeTokenUserFromLocalStorage } from '@/utils/TokenManager';

const NavButton = ({ nama, href }) => {
  return (
    <Link href={href} className='flex align-middle p-2'>
      {nama}
    </Link>
  );
};

function ItemNavbarGuest({isLogin}) {
  const router = useRouter();
  if (isLogin) {
    router.push('/');
  }
  return (
    <>
    <Button href='/auth/login' className='bg-blue-700 my-2'>
      Login
    </Button>
    </>
  );
}

function ItemNavbarAuth({pathname}) {
  const router = useRouter();
  const name = getNameUserFromLocalStorage();
  const email = getEmailUserFromLocalStorage();

  const logOutPress = () => {
    removeNameUserFromLocalStorage();
    removeEmailUserFromLocalStorage();
    removeTokenUserFromLocalStorage();
    router.push('/');
  }

  return (
    <>
      <Dropdown label={name} inline>
      <Dropdown.Header>
        <span className="block text-sm">{name}</span>
        <span className="block truncate text-sm font-medium">{email}</span>
      </Dropdown.Header>
      <Dropdown.Divider />
      <Dropdown.Item onClick={logOutPress}>Sign out</Dropdown.Item>
    </Dropdown>
    </>
  )
}

function Navbar() {
  const pathname = usePathname();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = getTokenUserFromLocalStorage();
    if (token) {
      setIsLogin(true);
    }
  }, [isLogin])

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
        {isLogin ? <ItemNavbarAuth pathname={pathname} /> : <ItemNavbarGuest pathname={pathname} isLogin={isLogin} />}

      </div>
    </div>
  );
}

export default Navbar;

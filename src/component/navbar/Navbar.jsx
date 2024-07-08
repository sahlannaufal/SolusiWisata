
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { usePathname } from "next/navigation";
import { Navbar as FlowbiteNavbar, Button, Dropdown } from "flowbite-react";
import { getEmailUserFromLocalStorage, getNameUserFromLocalStorage, getTokenUserFromLocalStorage, removeEmailUserFromLocalStorage, removeNameUserFromLocalStorage, removeTokenUserFromLocalStorage } from '@/utils/TokenManager';

function ItemNavbarGuest({isLogin}) {
  const router = useRouter();
  if (isLogin) {
    router.push('/');
  }
  return (
    <>
    <Button href='/auth/login' 
    className='bg-blue-700 my-2'>
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
    <FlowbiteNavbar className='h-24'>
      <FlowbiteNavbar.Brand 
        href="/">
        <img src="/logo_solusi.png" 
        className="h-10 sm:h-9" 
        alt="Solusi Wisata Logo" />
      </FlowbiteNavbar.Brand>
      <FlowbiteNavbar.Toggle />
      <FlowbiteNavbar.Collapse className='items-center'>
        <FlowbiteNavbar.Link href="/">
          Home
        </FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="/paket">
          Paket
        </FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="/armada">Armada</FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="/article">Article</FlowbiteNavbar.Link>
        <FlowbiteNavbar.Link href="/gallery">Gallery</FlowbiteNavbar.Link>
        {isLogin ? <ItemNavbarAuth pathname={pathname} /> : <ItemNavbarGuest pathname={pathname} isLogin={isLogin} />}
      </FlowbiteNavbar.Collapse>
    </FlowbiteNavbar>

  );
}

export default Navbar;

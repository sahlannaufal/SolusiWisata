
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { usePathname } from "next/navigation";
import { getEmailUserFromLocalStorage, getNameUserFromLocalStorage, getTokenUserFromLocalStorage, removeEmailUserFromLocalStorage, removeNameUserFromLocalStorage, removeTokenUserFromLocalStorage } from '@/utils/TokenManager';

const NavButton = ({nama, href}) => {
  return (
    <Link href={href} className='flex align-middle p-2'>
    {nama}
    </Link>
  )
}

function ItemNavbarGuest({isLogin}) {
  const router = useRouter();
  if (isLogin) {
    router.push('/');
  }
  return (
    <>
    <NavButton nama="Login" href='/auth/login'/>
    </>
  );
}

function ItemNavbarAuth({pathname}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const name = getNameUserFromLocalStorage();
  const email = getEmailUserFromLocalStorage();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  const logOutPress = () => {
    removeNameUserFromLocalStorage();
    removeEmailUserFromLocalStorage();
    removeTokenUserFromLocalStorage();
    router.push('/');
  }

  return (
    <>
      {/* <Dropdown label={name} inline>
      <Dropdown.Header>
        <span className="block text-sm">{name}</span>
        <span className="block truncate text-sm font-medium">{email}</span>
      </Dropdown.Header>
      <Dropdown.Divider />
      <Dropdown.Item onClick={logOutPress}>Sign out</Dropdown.Item>
    </Dropdown> */}
    <div className="relative inline-block text-left">
      <div>
        <button type="button" 
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="options-menu">
          {name}
        </button>
      </div>

      {dropdownOpen && (
      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div className="py-1" role="none">
          <div className="px-4 py-3">
            <p className="text-sm">{name}</p>
            <p className="text-sm font-medium text-gray-900 truncate">{email}</p>
          </div>
          <div className="border-t border-gray-100"></div>
          <button
            onClick={logOutPress}
            className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Sign out
          </button>
        </div>
      </div>
      )}
    </div>
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
    // <FlowbiteNavbar className='h-24'>
    //   <FlowbiteNavbar.Brand 
    //     href="/">
    //     <img src="/logo_solusi.png" 
    //     className="h-10 sm:h-9" 
    //     alt="Solusi Wisata Logo" />
    //   </FlowbiteNavbar.Brand>
    //   <FlowbiteNavbar.Toggle />
    //   <FlowbiteNavbar.Collapse className='items-center'>
    //     <FlowbiteNavbar.Link href="/">
    //       Home
    //     </FlowbiteNavbar.Link>
    //     <FlowbiteNavbar.Link href="/paket">
    //       Paket
    //     </FlowbiteNavbar.Link>
    //     <FlowbiteNavbar.Link href="/armada">Armada</FlowbiteNavbar.Link>
    //     <FlowbiteNavbar.Link href="/article">Article</FlowbiteNavbar.Link>
    //     <FlowbiteNavbar.Link href="/gallery">Gallery</FlowbiteNavbar.Link>
    //     {isLogin ? <ItemNavbarAuth pathname={pathname} /> : <ItemNavbarGuest pathname={pathname} isLogin={isLogin} />}
    //   </FlowbiteNavbar.Collapse>
    // </FlowbiteNavbar>

<div className='flex flex-row font-semibold align-middle bg-white justify-between py-2 bg-gradient-to-b from-blue-800 px-24 pt-5'>
    <div className=''>
      <img className='flex h-20' src="/logo_solusi.png" alt="logo"/>
    </div>
    <div className='flex align-middle space-x-6 m-8 '>
      <NavButton nama="Home" href="/" />
      <NavButton nama="Paket Tour" href="/paketTour" />
      <NavButton nama="Armada" href="/armada" />
      <NavButton nama="Gallery" href="/gallery" />
      <NavButton nama="Articles" href="/article" />
      {isLogin ? <ItemNavbarAuth pathname={pathname} /> : <ItemNavbarGuest pathname={pathname} isLogin={isLogin} />}
    </div>
    </div>
  );
}

export default Navbar;

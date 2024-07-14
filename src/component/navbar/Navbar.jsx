
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
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2" id="options-menu">
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const token = getTokenUserFromLocalStorage();
    if (token) {
      setIsLogin(true);
    }
  }, [isLogin]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  }

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


    <div className='bg-gradient-to-b from-blue-800 px-6 lg:px-40 pb-5 pt-5'>
      <div className='flex justify-between items-center'>
        <div>
          <img className='h-20' src="/logo_solusi.png" alt="logo" />
        </div>
        <div className='lg:hidden'>
          <button onClick={toggleMenu} className='text-white focus:outline-none'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </button>
        </div>
        <div className='hidden lg:flex lg:items-center lg:space-x-6'>
          <NavButton nama="Home" href="/" />
          <NavButton nama="Paket Tour" href="/paket" />
          <NavButton nama="Armada" href="/armada" />
          <NavButton nama="Gallery" href="/gallery" />
          <NavButton nama="Articles" href="/article" />
          {isLogin ? <ItemNavbarAuth pathname={pathname} /> : <ItemNavbarGuest isLogin={isLogin} />}
        </div>
      </div>
      {menuOpen && (
        <div className='block lg:hidden mt-4'>
          <div className='flex flex-col items-start'>
            <NavButton nama="Home" href="/" onClick={closeMenu} />
            <NavButton nama="Paket Tour" href="/paket" onClick={closeMenu} />
            <NavButton nama="Armada" href="/armada" onClick={closeMenu} />
            <NavButton nama="Gallery" href="/gallery" onClick={closeMenu} />
            <NavButton nama="Articles" href="/article" onClick={closeMenu} />
            {isLogin ? <ItemNavbarAuth pathname={pathname} onClick={closeMenu} /> : <ItemNavbarGuest isLogin={isLogin} onClick={closeMenu} />}
          </div>
        </div>
      )}
    </div>

  );
}

export default Navbar;

import { Button, Navbar, TextInput } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { FaMoon } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { useApi } from "../context/ContextApi";
import { FaSearch,FaBlog  } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import IconButton from './IconButton';
export default function Header() {
    const path = useLocation().pathname
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { toggleTheme, theme} = useApi();
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        setIsLoggedIn(true);
      }
    }, []);
   

  
    return (
        <div>
            <Navbar className='border-b-4 font-semibold text-sm'>
                <Link to='/' className='whilespace-nowrap  font-semibold text-sm sm:text-2xl'>
                    <span className='px-2 py-1 '><FaBlog style={{color:"blue"}}/> </span>Blog
                </Link>
                <TextInput placeholder='search...' rightIcon={FaSearch} className=' hidden lg:inline'
                />
                <Button className='lg:hidden' gradientDuoTone='purpleToBlue' outline color='gray' pill >
                    <FaSearch />
                </Button>
                <div className='flex gap-2 md:order-2'>
                    <Button className='hidden sm:inline dark:text-yellow-400 text-black ' gradientDuoTone='purpleToBlue' color='gray' pill onClick={toggleTheme}>
                    {   theme==='dark'?<IoSunny className=" w-5 h-5" />: <FaMoon   />}
                    </Button>
                    {!isLoggedIn ? (
          <Link to='/signin'>
            <Button gradientDuoTone='purpleToBlue' outline>Sign In</Button>
          </Link>
        ):<IconButton />}
                    <Navbar.Toggle />
                </div>
                {/* increase text size */}

                                <Navbar.Collapse >
                    <Navbar.Link active={path==='/'}as={'div'}>
                        <Link to='/' className='text-lg  ' >Home</Link>
                    </Navbar.Link>
                    <Navbar.Link active={path==='/about'} as={'div'}>
                        <Link to='/about' className='text-lg ' >About</Link>
                    </Navbar.Link>
                    <Navbar.Link active={path==='/projects'} as={'div'}>
                        <Link to='/projects' className='text-lg ' >Projects</Link>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
           
        </div>
    )
}

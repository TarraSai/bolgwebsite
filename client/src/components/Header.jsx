import { Button, Navbar, TextInput } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { FaMoon } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
export default function Header() {
    const path = useLocation().pathname
  
    return (
        <div>
            <Navbar className='border-b-4 font-semibold text-sm'>
                <Link to='/' className='whilespace-nowrap  font-semibold text-sm sm:text-2xl'>
                    <span className='px-2 py-1 bg-gradient-to-r from-purple-500  to-blue-500 rounded-md'>Sai&#39;s</span>Blog
                </Link>
                <TextInput placeholder='search...' rightIcon={FaSearch} className=' hidden lg:inline'
                />
                <Button className='lg:hidden' gradientDuoTone='purpleToBlue' outline color='gray' pill>
                    <FaSearch />
                </Button>
                <div className='flex gap-2 md:order-2'>
                    <Button className='hidden sm:inline ' gradientDuoTone='purpleToBlue' color='gray' pill>
                        <FaMoon  />
                    </Button>
                    <Link to='/signin'>
                        <Button gradientDuoTone='purpleToBlue' outline>sign In</Button>
                    </Link>
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

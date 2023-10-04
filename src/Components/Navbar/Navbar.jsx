import React, { useState } from 'react';
import Link from '../Link/Link';
import { XMarkIcon,Bars3Icon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open,setOpen]=useState(false);
    const navItems = [
        { id: 1, navigationName: 'Home', link: '/home' },
        { id: 2, navigationName: 'About Us', link: '/about' },
        { id: 3, navigationName: 'Services', link: '/services' },
        { id: 4, navigationName: 'Contact', link: '/contact' }
      ];

    return (
        <nav className=' p-9 bg-slate-600 text-white'>
            <div onClick={()=>setOpen(!open)} className=' md:hidden'>
                <span>{
                    open===true?<XMarkIcon className='h-6 w-6 text-red-500'/>
                    :<Bars3Icon className="h-6 w-6 text-red-500" />
                    }</span>

            </div>
            
            <ul className={`md:flex absolute md:static duration-500 ${open?'top-20':'-top-48'} bg-slate-600 `}>
                {
                    navItems.map(navItem=> <Link item={navItem}></Link> )
                }
            </ul>
        </nav>
    );
};

export default Navbar;
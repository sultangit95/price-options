import { useState } from "react";
import Link from "./Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
const Navbar = () => {

  const [open, setOpen] = useState(false)
  const routes = [
    { id: 1, path: '/', name: 'Home'},
    { id: 2, path: '/about', name: 'About'},
    { id: 3, path: '/services', name: 'Services'},
    { id: 4, path: '/contact', name: 'Contact'},
    { id: 5, path: '/blog', name: 'Blog'}
  ]
  return (
    <nav>
      <div className="md:hidden duration-1000 bg-purple-600 z-10 relative pl-3 py-2" onClick={() => setOpen(!open)}>
        {
          open === false ? <AiOutlineMenu className="text-5xl"></AiOutlineMenu> : <AiOutlineClose className="text-5xl text-red-600"></AiOutlineClose>
        }
      
      </div>
      <ul className={`w-full text-2xl text-center md:flex gap-5 z-0 ${open ? 'top-16': '-top-60'} bg-amber-600 px-6 shadow-lg absolute md:static duration-1000`}>
        {
          routes.map(route => <Link key={route.id} route={route}></Link>)
        }
      </ul>
    </nav>
  );
};

export default Navbar;
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
      <div className="md:hidden duration-1000 bg-yellow-200" onClick={() => setOpen(!open)}>
        {
          open === false ? <AiOutlineMenu className="text-5xl text-red-600"></AiOutlineMenu> : <AiOutlineClose className="text-5xl text-red-600"></AiOutlineClose>
        }
      
      </div>
      <ul className={`md:flex gap-3 ${open ? 'left-0': '-left-60'} bg-yellow-200 px-6 shadow-lg absolute md:static duration-1000`}>
        {
          routes.map(route => <Link key={route.id} route={route}></Link>)
        }
      </ul>
    </nav>
  );
};

export default Navbar;
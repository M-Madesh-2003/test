import { navItems } from '../data/navdata.js'
import { Link, useLocation } from 'react-router-dom';
import { GiWorld } from "react-icons/gi";

const NavBar = () => {
    const path = useLocation();
  return (
    <nav className='bg-white flex justify-between items-center w-full h-20 shadow-md sticky top-0 left-0 px-10 z-20'>
        <Link to='/'>
        <div className='cursor-pointer flex items-center'>
        <p className='text-2xl font-medium tracking-wider'>GoE<span className='text-primary font-semibold'>X</span>plore</p><span className='text-lg relative top-1 pl-1'><GiWorld /></span>
        </div>
        </Link>
            <ul className='flex space-x-5'>
                {
                    navItems.map((data,ind) => (
                        <Link key={ind} to={data.route}><li className={`text-base cursor-pointer ${path.pathname === data.route ? 'bg-primary hover:bg-primary' : 'bg-transparent'} hover:bg-gray-200 px-5 py-1 rounded-full transition-colors duration-300`}>{data.title}</li></Link>
                    ))
                }
            </ul>
    </nav>
  )
}

export default NavBar

import { Link } from 'react-router-dom'

import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdExplore } from "react-icons/md";

import { PiSignInBold } from "react-icons/pi";
import { MdEditDocument } from "react-icons/md";

import Logout from './Logout'


const Sidebar = () => {
  const authUser = true;
  const size = 26;
  return (
    <aside className="flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8 overflow-y-auto border-r bg-glass hover:bg-gray-600/10">
      <nav className="h-full flex flex-col gap-3 ">

        <Link to="/" className='flex justify-center'>
          <img src="/github.svg" alt="logo" className='h-8' />
        </Link>

        <Link to="/" className='flex justify-center p-1.5 transition-colors duration-200 rounded-lg hover:bg-gray-800 mt-1' title="Home Page">
          <FaHome size={size} />
        </Link>

        {authUser && (
          <Link to="/likes" className='flex justify-center p-1.5 transition-colors duration-200 rounded-lg hover:bg-gray-800 mt-1' title="Like Page">
            <FaHeart size={size} />
          </Link>
        )}

        {authUser && (
          <Link to="/explore" className='flex justify-center p-1.5 transition-colors duration-200 rounded-lg hover:bg-gray-800 mt-1' title="Explore Page">
            <MdExplore size={size} />
          </Link>

        )}

        {!authUser && (
          <Link to="/login" className='flex justify-center p-1.5 transition-colors duration-200 rounded-lg hover:bg-gray-800 mt-1' title="Login">
            <PiSignInBold size={size} />
          </Link>
        )}

        {!authUser && (
          <Link to="/signup" className='flex justify-center p-1.5 transition-colors duration-200 rounded-lg hover:bg-gray-800 mt-1' title="Sign In">
            <MdEditDocument size={size} />
          </Link>

        )}

        {authUser && (
          <div className='flex flex-col gap-2 mt-auto'>
            <Logout />
          </div>
        )}


      </nav>
    </aside>
  )
}

export default Sidebar

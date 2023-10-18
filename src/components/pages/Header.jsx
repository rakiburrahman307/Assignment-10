import { Link, NavLink } from "react-router-dom";
import { IoCarSport } from "react-icons/io5";

const Header = () => {
    const navLinks = <>


        <li><NavLink to='/' className='focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out mr-3'>Home</NavLink></li>
        <li><NavLink to='/about' className='focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out mr-3'>About</NavLink></li>
        <li><NavLink to='/contact' className='focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out mr-3'>Contact</NavLink></li>
        {/* <li><NavLink>Item 1</NavLink></li> */}

    </>

    return (
        <div className="navbar bg-gradient-to-r from-black via-gray-600 to-indigo-800 text-white sticky top-0 shadow-lg z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><IoCarSport className="text-3xl"></IoCarSport>Ethereal Autos</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
            <Link to='/login'><button className="bg-gradient-to-r from-indigo-800 via-gray-600 to-black text-white px-4 py-2 rounded-lg hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out">
        Login
      </button></Link>
      </div>
        </div>
    );
};

export default Header;
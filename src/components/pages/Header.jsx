import { Link, NavLink } from "react-router-dom";
import { IoCarSport } from "react-icons/io5";
import { AuthContext } from "../AuthProvidar/AuthProvider";
import { useContext } from "react";

const Header = () => {
    const { user, logOut, toggleDarkMode, darkMode } = useContext(AuthContext);

    const navLinks = <>


        <li><NavLink to='/' className={`focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out ${darkMode ? 'text-gray-400' : 'text-white'}`}>Home</NavLink></li>
        <li><NavLink to='/about' className={`focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out ${darkMode ? 'text-gray-400' : 'text-white'}`}>About</NavLink></li>
        <li><NavLink to='/contact' className={`focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out ${darkMode ? 'text-gray-400' : 'text-white'}`}>Contact</NavLink></li>


        {user ? (
            <>
                <li><NavLink to='/add_product' className={`focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out ${darkMode ? 'text-gray-400' : 'text-white'}`}>Add Product</NavLink></li>
                <li><NavLink to='/my_cart' className={`focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out ${darkMode ? 'text-gray-400' : 'text-white'}`}>My Cart</NavLink></li>
                <li><NavLink to='/feedback' className={`focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out ${darkMode ? 'text-gray-400' : 'text-white'}`}>Feedback</NavLink></li>
            </>
        ) : null}

    </>

    return (
        <div className={`navbar ${darkMode ? 'bg-black' : 'bg-gradient-to-r from-black via-gray-600 to-indigo-800'} sticky top-0 shadow-lg z-20`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                        {navLinks}
                        <button
                            onClick={toggleDarkMode}
                            className="btn btn-ghost btn-circle ml-2"
                        >
                            {darkMode ? '☀️' : '🌙'}
                        </button>
                        {
                            user ? (
                                <button onClick={logOut} className={`bg-gradient-to-r from-red-700 via-red-600 to-black ${darkMode ? 'text-gray-300' : 'text-white'} px-4 py-2 rounded-lg hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out hidden md:flex lg:flex`}>
                                    <Link to='/login'>Log Out</Link>
                                </button>
                            ) : (
                                <button className={`bg-gradient-to-r from-indigo-800 via-gray-600 to-black ${darkMode ? 'text-gray-300' : 'text-white'} px-4 py-2 rounded-lg hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out hidden md:flex lg:flex`}>
                                    <Link to='/login'>Log In</Link>
                                </button>

                            )
                        }
                    </ul>
                </div>
                <Link to='/' className={`btn btn-ghost normal-case text-xl ${darkMode ? 'text-gray-400' : 'text-white'}`}><IoCarSport className="md:text-3xl"></IoCarSport>Ethereal Autos</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className='flex justify-center items-center'>
                        <button
                            onClick={toggleDarkMode}
                            className="btn btn-ghost btn-circle ml-2"
                        >
                            {darkMode ? '☀️' : '🌙'}
                        </button>
                        <h2 className={`text-xl text-block mr-2 font-semibold hidden md:flex lg:flex ${darkMode ? 'text-gray-400' : 'text-white'}`}>{user.displayName}</h2>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2">
                            <div className="w-10 rounded-full">
                                <img
                                    className="mx-auto rounded-full"
                                    src={user.photoURL ? user.photoURL : "https://i.ibb.co/Qvvqdt9/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"}
                                    alt="User Avatar"
                                />

                            </div>
                        </label>
                        <button onClick={logOut} className={`bg-gradient-to-r from-red-700 via-red-600 to-black ${darkMode ? 'text-gray-300' : 'text-white'} px-4 py-2 rounded-lg hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out hidden md:flex lg:flex`}>
                            <Link to='/login'>Log Out</Link>
                        </button>

                    </div>
                ) : (
                    <div className="flex justify-end items-center gap-2">
                        <button
                            onClick={toggleDarkMode}
                            className="btn btn-ghost btn-circle ml-2"
                        >
                            {darkMode ? '☀️' : '🌙'}
                        </button>
                        <button className={`bg-gradient-to-r from-indigo-800 via-gray-600 to-black ${darkMode ? 'text-gray-300' : 'text-white'} px-4 py-2 rounded-lg hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out hidden md:flex lg:flex`}>
                            <Link to='/login'>Log In</Link>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
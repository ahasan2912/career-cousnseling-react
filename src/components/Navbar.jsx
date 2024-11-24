import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../routes/AuthProvider';
const Navbar = () => {
    const { user, handleLogOut } = useContext(AuthContext);
    return (
        <div className="navbar bg-[#fff4d9] px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-60 h-32 p-4 shadow">
                        <NavLink to='/' className="text-base">Home</NavLink>
                        <NavLink to='/profile' className="text-base">My Profile</NavLink>
                        <NavLink to='/resources' className="text-base">Resources</NavLink>
                    </ul>
                </div>
                <Link to="/" className="text-xl font-bold">
                    <h1 className='text-2xl'>Career <span className='text-[#4dc879]'>Counseling</span> </h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6">
                    <NavLink to='/' className="text-base">Home</NavLink>
                    <NavLink to='/profile' className="text-base">My Profile</NavLink>
                    <NavLink to='/resources' className="text-base">Resources</NavLink>
                </ul>
            </div>
            <div className='navbar-end'>
                {
                    user && user?.email ?
                        <div className='flex items-center justify-center gap-2'>
                            <div className='flex gap-2 items-center justify-center'>
                                <div className="tooltip  tooltip-bottom z-50" data-tip={user?.displayName}>
                                    <img className='w-12 h-12 rounded-full object-cover' src={user.photoURL} alt="" />
                                </div>
                            </div>
                            <Link onClick={handleLogOut} to="/" className="btn text-black">Logout</Link>
                        </div>
                        :
                        <Link to='/login' className="btn text-black">Login</Link>
                }
            </div >

        </div >
    );
};

export default Navbar;
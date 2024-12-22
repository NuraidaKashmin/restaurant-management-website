import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="all-foods">All Foods</NavLink></li>
                        <li><NavLink to="food-purchased">Food Purchased</NavLink></li>
                        <li><NavLink to="gallery">Gallery</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Restaurant</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="all-foods">All Foods</NavLink></li>
                    <li><NavLink to="food-purchased">Food Purchased</NavLink></li>
                    <li><NavLink to="gallery">Gallery</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div>
                    {!user && (
                        <NavLink to='login' className="btn btn-success" >Login</NavLink>
                    )}
                </div>

                {user && (
                    <div className='dropdown dropdown-end z-50'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost btn-circle avatar'
                        >
                            <div title={user?.displayName} className='w-10 rounded-full'>
                                <img
                                    referrerPolicy='no-referrer'
                                    alt='User Profile Photo'
                                    src={user?.photoURL}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                        >
                            <li>
                                <NavLink to='my-food'>
                                    My Foods
                                </NavLink>
                            </li>
                            <li className="mt-1">
                                <NavLink to='add-food'>
                                    Add food
                                </NavLink>
                            </li>
                            <li className="mt-1">
                                <NavLink to='my-orders'>
                                    My Orders
                                </NavLink>
                            </li>
                            <li className='mt-1'>
                                <button
                                    onClick={logOut}
                                    className='btn btn-error'
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                )}







            </div>
        </div>
    );
};

export default Navbar;
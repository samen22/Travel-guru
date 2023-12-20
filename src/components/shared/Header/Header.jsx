import { Link, NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";



const Header = () => {

    const navLinks =
        <>
            <li className="text-white font-medium"><NavLink to={'/'}>Home</NavLink></li>
            <li className="text-white font-medium"><NavLink to={'/news'}>News</NavLink></li>
            <li className="text-white font-medium"><NavLink to={'/destination'}>Destination</NavLink></li>
            <li className="text-white font-medium"><NavLink to={'/blog'}>Blog</NavLink></li>
            <li className="text-white font-medium"><NavLink to={'/contact'}>Contact</NavLink></li>
        </>

    return (
    <div className="navbar space-x-12">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
            </div>
            <div className="mr-10">
                <Link to={'/'}> <img className="w-32 h-10" src={`/public/logo.png`} alt="" /> </Link>
            </div>
            <div className="form-control">
                <div className="relative">
                    <input type="text" placeholder={`Search your Destination...`} className="text-white rounded-md bg-transparent border solid border-rounded border-white w-80 h-10 pl-10 object-cover" />
                </div>
                <div className="absolute inset-y-50 mt-2 flex items-center pl-3 pointer-events-none">
                    <IoSearch className="text-white w-5 h-5" />
                </div>
            </div>

        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {navLinks}
            </ul>
        </div>
        <div className="navbar-center">
            <Link to={'/login'}><a className=" bg-[#dd8e10] text-[#000000] pr-7 pl-7 pt-3 pb-3 rounded-md font-medium">Login</a></Link>
        </div>
    </div>
);
};

export default Header;
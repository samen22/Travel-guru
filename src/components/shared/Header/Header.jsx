import { Link, NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";



const Header = () => {

    const navLinks =
        <>
            <NavLink to={'/news'}><li><a>News</a></li></NavLink>
            <NavLink to={'/destination'}><li><a>Destination</a></li></NavLink>
            <NavLink to={'/blog'}><li><a>Blog</a></li></NavLink>
            <NavLink to={'/contact'}><li><a>Contact</a></li></NavLink>
        </>

    return (
        <div className="navbar space-x-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="">
                    <Link to={'/'}> <img className="w-32 h-11" src={`/public/logo.png`} alt="" /> </Link>
                </div>
                <div className="form-control ml-5">
                    <input type="text" placeholder={`Search your Destination...`} className="text-white rounded-md bg-transparent border solid border-rounded border-white w-80 h-11 pl-12" />
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default Header;
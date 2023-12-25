import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const firstName = form.get('first');
        const lastName = form.get('last');
        const email = form.get('email');
        const password = form.get('password');
        console.log(firstName, lastName, email, password);

        // navigate to login
        navigate('/login');

        createUser(email, password)
        .then(result =>{
            alert('You have registered successfully!', result.user);
        })
        .catch(error =>{
            console.error(error);
        })
    }



    const navLinks =
        <>
            <li className="text-black font-medium font-montserrat"><NavLink to={'/'}>Home</NavLink></li>
            <li className="text-black font-medium font-montserrat"><NavLink to={'/news'}>News</NavLink></li>
            <li className="text-black font-medium font-montserrat"><NavLink to={'/destination'}>Destination</NavLink></li>
            <li className="text-black font-medium font-montserrat"><NavLink to={'/blog'}>Blog</NavLink></li>
            <li className="text-black font-medium font-montserrat"><NavLink to={'/contact'}>Contact</NavLink></li>
        </>


    return (
        <div className="max-w-6xl mx-auto mt-2">
            {/* Nav menu */}
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
                        <Link to={'/'}> <img className="w-32 h-10" src={`/public/logo2.png`} alt="" /> </Link>
                    </div>
                    <div className="form-control">
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-center">
                    <Link to={'/login'}><a className=" bg-[#dd8e10] text-[#000000] pr-7 pl-7 pt-3 pb-3 rounded-md">Login</a></Link>
                </div>
            </div>

            {/* Register section */}
            <div className="flex justify-center items-center mt-16">
                <div className="w-1/2 h-1/2 p-14 border border-[#ABABAB] bg-base-100 rounded">
                    <form onSubmit={handleRegister} className="">
                        <h1 className="text-2xl font-bold text-black font-montserrat mb-12">Create an account</h1>
                        <div className="form-control">
                            <input type="text" placeholder="First Name" name="first" className="input input-bordered mb-6" required />
                            <input type="text" placeholder="Last Name" name="last" className="input input-bordered mb-6" required />
                            <input type="email" placeholder="Username or Email" name="email" className="input input-bordered mb-6" required />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="Password" name="password" className="input input-bordered mb-6" required />
                            <input type="password" placeholder="Confirm Password" name="confirm" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-8">
                            <button className="w-full bg-[#F9A51A] p-3 text-black">Create an account</button>
                        </div>
                        <span className="flex items-center justify-center mt-4 gap-1">
                            <p>Already have an account?</p>
                            <Link to={'/login'}>
                                <a href="#" className="text-[#F9A51A] underline font-montserrat link-hover">Login</a>
                            </Link>
                        </span>
                    </form>
                </div>
            </div>

            <div className="mt-8 flex items-center justify-center mb-1">
                <div className="relative">
                    <button className="border text-black border-[#C7C7C7] w-[360px] h-[50px] rounded-full">Continue with Facebook</button>
                    <FaFacebook className="text-[#3076FF] w-9 h-9 absolute bottom-2 left-2"></FaFacebook>
                </div>
                <div className="relative">
                    <button className="border text-black border-[#C7C7C7] w-[360px] h-[50px] rounded-full">Continue with Google</button>
                    <FaGoogle className="w-9 h-9 absolute bottom-2 left-2"></FaGoogle>
                </div>
            </div>

        </div>
    );
};

export default Register;
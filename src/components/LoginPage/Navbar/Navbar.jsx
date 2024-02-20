import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Navbar = () => {
    console.log(localStorage.getItem("token"))


    const navigate = useNavigate()
    const { cart } = useContext(AuthContext)
    console.log(cart)
    const handleLogOut = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }
    return (
        <div className="navbar bg-[#bebcbc] fixed top-0 z-10 mb-20 px-10">
            <div className="flex-1 w-full">
                <span className="text-black font-bold uppercase flex items-center"><span className="text-4xl">O</span>nline Shop</span>
                {/* <a className="btn btn-ghost text-xl text-white"> */}
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item font-semibold text-lg">{cart.length}</span>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="User Profile Picture" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            localStorage.getItem("token") ? <li onClick={handleLogOut}><a>Logout</a></li> :
                                <li><Link to="/login">Login</Link> </li>
                        }

                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Navbar;
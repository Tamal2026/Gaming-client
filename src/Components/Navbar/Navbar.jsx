import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Navbar = () => {
  const [singInUser,setSingInUser] = useState(null);
  const [loggedInUserInfo, setLoggedInUserInfo] = useState({
    email: "",
    photoURL: "https://i.ibb.co/ZTFfkFc/user.png", // Default User Image URL
  });
const {user,logOut} = useContext(AuthContext)
Aos.init({duration:'2000'});
useEffect(() => {
  if (user) {
    setLoggedInUserInfo({
      email: user.email || "",
      photoURL: user.photoURL || "https://i.ibb.co/ZTFfkFc/user.png",
    });
  }
}, [user]);
const handleSignout = ()=>{
logOut()
.then()
.catch()
}
const navLinks = 
    <>
    
    <li><NavLink to="/">Home</NavLink></li>
    


    {user ? (
  <>

    <li><NavLink to="/contact">Contact</NavLink></li>
    <li><NavLink to="/blog">Blog</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
  </>
) : (
  <>
    <li><NavLink to="/login">Login</NavLink></li>
    <li><NavLink to="/register">Register</NavLink></li>
  </>
)}



    
    </>


    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navLinks}
            </ul>
          </div>
          <div data-aos = "fade-left">
                <h1 className="bg-red-600 mr-3 px-2 rounded-lg  text-white py-2 font-bold" >Welcome</h1>
            </div>
          <div data-aos = "zoom-in">
                <h1 className="bg-blue-600 mr-3 px-2 rounded-lg  text-white py-2 " >Gaming Event</h1>
            </div>
          <div data-aos = "fade-right" className=""  >
                <h1 className="bg-cyan-700  px-2 rounded-lg   text-white py-2  " >2023</h1>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navLinks}
          </ul>
        </div>
        
        <div className=" navbar-end gap-3">
        {user && (
          <div className="flex  pr-4 gap-4 items-center">
            <div><p>{loggedInUserInfo.email}</p></div>
            <img className="rounded-full w-10" src={loggedInUserInfo.photoURL} alt="User" />
          </div>
        )}
        {
          user ?  <button onClick={handleSignout} className="btn btn-primary bg-red-600">Logout
          </button> :
          <Link to="/login">
          <button className="btn btn-primary bg-orange-500">Login</button>
          </Link>
        }
        </div>
      </div>
    );
};

export default Navbar;

import React from "react";
import { BiChevronRight, BiSearchAlt2, BiMenu } from "react-icons/bi";
import { FaChevronCircleDown } from "react-icons/fa";



// navbar for Small Devices
const NavSm = () => {

    return (
        <>
        <div className="text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold">It All Starts here !</h3>
                    <span className="text-gray-400 text-xs flex items-center">Bengluru <BiChevronRight /></span>
                   
                </div>
                <div className="w-7 h-7">
                <BiSearchAlt2 className="w-full h-full"/>
                </div>
        </div>
        </>

    );
};
 

// NavBar For Medium Devices
const NavMd = () => {
    return (
        <>
            <div className="w-full flex items-center gap-3 bg-white px-3 py-2">
                <BiSearchAlt2/>
                <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search For Movies,Events,Plays,Sports and Activities"/>
            </div>
            
        </>
    );
};


//NavBar For Large Devices
const NavLg = () => {
    return (
        <>
            <div className="container mx-auto px-2 flex items-center justify-between">
                <div className="flex gap-3 items-center w-3/5">
                {/**For logo and Serach bar */}
                    <div className="w-21 h-30">
                        <img src="https://o.remove.bg/downloads/922de3e4-9310-4d57-94af-f539e39d68a8/logo-on-gray-removebg-preview.png"
                            alt="logo"
                            className="w-full h-full" />
                    </div>
                    <div className="w-full flex items-center gap-3 bg-white px-3 py-2">
                <BiSearchAlt2/>
                <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search For Movies,Events,Plays,Sports and Activities"/>
            </div>
                </div>
                
                <div className="flex items-center gap-3">
                    {/**For City dropdown and menu */}
                    <span className="text-gray-400 text-xs flex items-center gap-2 cursor-pointer">Bengluru <FaChevronCircleDown /></span>
                    <button className="bg-red-400 text-white px-2 py-1 rounded">Sign In</button>
                    <div className="text-white w-9 h-9 px-2 py-1">
                    <BiMenu className="w-full h-full cursor-pointer"/>
                    </div>
                   
                
                </div> 
            </div>
        </>
    );
 };




// This Fuction is for Navbar (All navbars including mobile,tabs,PC)
const Navbar = () => {
    
    return (
        <>
            <nav className="bg-NavbarBg-800 px-1">

                <div className="md:hidden">{ /* For Mobile Screen*/
                <NavSm/>
                }</div>

                <div className="hidden md:flex lg:hidden">{
                <NavMd/>
                /* For Tab or MEdium Devices*/}</div>

                <div className="hidden lg:flex">{
                <NavLg/>
                
                /* For PC Screen*/}</div>
            </nav>
        </>
    )
};

export default Navbar;
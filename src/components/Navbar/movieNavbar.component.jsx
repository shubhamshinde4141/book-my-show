
import React from "react";
import { BiChevronRight, BiSearchAlt2, BiMenu,BiShareAlt } from "react-icons/bi";
import { FaChevronCircleDown } from "react-icons/fa";
//import logo from "";



// Movie page navbar for Small Devices
const NavSm = () => {

    return (
        <>
        <div className="text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold">It All Starts here !</h3>
                   
                   
                </div>
                <div className="w-7 h-7">
                <BiShareAlt className="w-full h-full"/>
                </div>
        </div>
        </>

    );
};
 

// Movie Page NavBar For Medium Devices
const NavMd = () => {
    return (
        <>
            <div className="w-full m-4 flex items-center gap-3 bg-white px-2 py-3 ">
                <BiSearchAlt2/>
                <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search For Movies,Events,Plays,Sports and Activities"/>
            </div>
            
        </>
    );
    
   // #2C2D3B
};


// Movie Page NavBar For Large Devices
const NavLg = () => {
    return (
        <>
            <div className="container mx-auto px-2 flex items-center justify-between">
                <div className="flex gap-3 items-center w-3/5">
                {/**For logo and Serach bar */}
                    <div className="w-21 h-24">
                        <img src="https://www.crafin.in/wp-content/uploads/2019/04/bookmyshow.png"
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
const MovieNavbar = () => {
    
    return (
        <>
            <nav className="absolute inset-x-0 z-40 bg-opacity-10 backdrop-filter backdrop-blur-lg  lg:relative lg:bg-NavbarBg-800 px-1">{/** absolute is used so that in mobile the image will take whole area of navbar */}

                <div className="md:hidden">{
                 /* For Mobile Screen*/
                <NavSm/>
                }</div>

                <div className="hidden md:block lg:hidden">{
                
                /* For Tab or MEdium Devices*/}
                <NavSm/>
                </div>

                <div className="hidden lg:flex">
                    {/* For PC Screen*/}
                    <NavLg />
                
                </div>
            </nav>
        </>
    )
};

export default MovieNavbar;
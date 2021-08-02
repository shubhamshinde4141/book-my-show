import React from "react";
import HeroCarousal from "../components/HeroCorousal/heroCorousal.component";

//Import components (Navbar)
import Navbar from "../components/Navbar/navbar.layout";


const DefaultLayout = (props) => {
    return (
        <>
            <Navbar />
            <HeroCarousal/>
            {/* We have to access that layout using parent-child relationship. Hence we used props.children.*/}
           {props.children}; 
         </>
    );
};

export default DefaultLayout;
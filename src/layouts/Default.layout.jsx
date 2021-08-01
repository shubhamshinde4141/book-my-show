import React from "react";

//Import components (Navbar)
import Navbar from "../components/Navbar/navbar.layout";


const DefaultLayout = (props) => {
    return (
        <>
            <Navbar/>
            {/* We have to access that layout using parent-child relationship. Hence we used props.children.*/}
           {props.children}; 
         </>
    );
};

export default DefaultLayout;
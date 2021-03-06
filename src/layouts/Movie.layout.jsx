import React from 'react';
//Import components (Navbar)
import Navbar from "../components/Navbar/navbar.layout";
import MovieNavbar from '../components/Navbar/movieNavbar.component';
export const Movielayout = (props) => {
    return (
        <>
            <MovieNavbar  />
            
            {/* We have to access that layout using parent-child relationship. Hence we used props.children.*/}
            {props.children};
        </>
    );
};

export default Movielayout;
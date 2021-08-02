import React from 'react';
import Slider from "react-slick";


// import poster
import Poster from '../Poster/poster.component';
//Import Settings
import PosterSettings from '../../Config/PosterCorosual.config';
// Import Posters
import PosterImages from '../../Config/PosterImages.config';

export const Posterslider = (props) => {
    return (
        <>
          <div className="flex flex-col items-start">
                <h1 className={`text-lg font-bold ${props.isDark ? "text-white" : "text-gray-800"}`}>{ props.title}</h1>
                <h3 className={`text-xl ${props.isDark ? "text-white" : "text-gray-800"}`}>{ props.subtitle}</h3>
            </div>
            <Slider {...PosterSettings}>
                {props.images.map((image) => (
                    <Poster {...image} isDark={props.isDark} />
                ))}
            </Slider>  
        </>
    )
}

export default Posterslider;

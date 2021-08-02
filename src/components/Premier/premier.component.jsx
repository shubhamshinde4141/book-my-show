import React from 'react'
import Slider from "react-slick";


// import poster
import Poster from '../Poster/poster.component';

//Import Settings
import PosterSettings from '../../Config/PosterCorosual.config';
// Import Posters
import PosterImages from '../../Config/PosterImages.config';


const Premier = () => {
   
    return (
        <>
            {/* <div className="flex flex-col items-start">
            <h1 className="text-2xl font-bold text-white">Premiers</h1>
            <h3 className="text-xl text-white py-1">Brand New Releases every Friday</h3>
            </div> */}
            <Slider {...PosterSettings}>
                {PosterImages.map((image) => (
                    <Poster {...image} isDark />
                ))}
            </Slider>
        </>
    );
};

export default Premier;

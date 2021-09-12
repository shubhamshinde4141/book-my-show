import React from 'react'
import MovieHeroComponent from '../components/MovieHero/movieHero.component';
import { FaCcVisa } from "react-icons/fa";

import Cast from '../components/Cast/Cast.component';

// Import Posters
import PosterImages from "../Config/PosterImages.config";

// Import PosterSlider
import Posterslider from "../components/PosterSlider/Posterslider.component";
export const Movie = () => {

    // We will redefine the setting of the posters
    // Like somewhere we require 4 posters in a row and somewhere we required 5 posters. So we can customize the setting wherever we want
    


var Settings = {
    //Infinity: false,
    slidesToShow: 4,
    slidesToScroll: 5,
    autoplay: false,
    InitialSlide: 0,
    responsive: [
        // For Large Screen
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                autoplay: false,
                Infinity: false,
            }
        },
        
        // For Mobile Screen
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                InitialSlide: 2,
               
                
                
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                
                

            }
        }


    ],
    

};





    return (
        <>
        <MovieHeroComponent />
            <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">  {/** whole Container For movie Information */}
                
                <div className="flex flex-col gap-3 items-start"> {/** This div for Heading and para */}
                <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
                <p>Shang-Chi and The Legend of The Ten Rings features Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film is directed by Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.
                </p>
                </div>

                {/** This is for that thin line */}
                <div className="mt-8">
                    <hr/>
                </div>

                {/** This block is for Applicable Offers */}
                <div className="my-8">
                    <h1 className="font-bold text-2xl ">Applicable Offers</h1>

                    <div className="flex flex-col gap-3 lg:flex-row">

                    <div className="flex items-start gap-2 bg-yellow-100 m-3 px-2 py-3 border-yellow-400 border-dashed border-4 rounded-md">
                        {/** For That Applicable Offers */}
                        <div className="w-6 h-6">
                            <FaCcVisa className="w-full h-full" />{/** Icon */}
                        </div>
                        
                        
                        <div className="flex flex-col items-start"> 
                            <h3 className="text-gray-700 text-xl font-bold">Visa Pass</h3>
                            <p className="text-gray-600">
                            Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99
                            </p>
                        </div>
                    </div>
                        
                        <div className="flex items-start gap-2 bg-yellow-100 m-3 px-2 py-3 border-yellow-400 border-dashed border-4 rounded-md">
                        {/** For That Applicable Offers */}
                        <div className="w-6 h-6">
                            <FaCcVisa className="w-full h-full" />{/** Icon */}
                        </div>
                        
                        
                        <div className="flex flex-col items-start"> 
                            <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                            <p className="text-gray-600">
                            Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99
                            </p>
                        </div>
                        </div>
                        


                    </div>

                   
                </div>

                {/** This is for that thin line */}
                <div className="mt-8">
                    <hr/>
                </div>

                {/** This block-code is for cast and crew */}
                <div className="my-8">
                    
                    <div>
                        <h1 className="text-2xl font-bold mb-3">Cast</h1>
                    </div>

                <div className="flex flex-wrap gap-5">
                    
                    <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg" castname="Henry Cavil" castname_in_movie="as Superman" />
                    <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ben-affleck-292-12-09-2017-05-12-16.jpg" castname="Ben Affleck" castname_in_movie="as Batman" />
                    <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg" castname="Gal Gadot" castname_in_movie="as Wonder Woman" />
                    <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/ray-fisher-1072729-17-10-2017-12-14-18.jpg" castname="Ray Fisher" castname_in_movie="as Cyborg" />
                    <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg" castname="Henry Cavil" castname_in_movie="as Superman" />
                    <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg" castname="Henry Cavil" castname_in_movie="as Superman"/>


                </div>
                </div>
                
                {/** his block is for recommandation posters ( Posters You may Like ) */}
                <div className="my-8">
                    <Posterslider
                        config={Settings}  // Custom settings for posters ( 4 or 3 Posters in a row)
                        images={PosterImages}
                        title="You might also like"
                        subtitle="Check this Out"
                        isDark={ false} />
                </div>
           

            </div>
               

        </>
    )
};

export default Movie;

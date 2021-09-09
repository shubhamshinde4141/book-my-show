import React from 'react'
import MovieHeroComponent from '../components/MovieHero/movieHero.component';
import { FaCcVisa } from "react-icons/fa";
export const Movie = () => {
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

              
           

            </div>
               

        </>
    )
};

export default Movie;

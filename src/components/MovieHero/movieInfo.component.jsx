import React from 'react'

const MovieInfo = () => {
    return (
        <>
            <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">{/** For Parent DIv */}
            
                <div className="w-40 h-8">
                    {/** For Premier Image and all*/}
                    <img
                        src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
                        alt="premier"
                        className="w-full h-full"

                    />
               
                </div>

                    <span className="bg-NavbarBg-700 p-2 text-xs text-white">Streaming Now</span>

                </div>
                

                <h1 className="lg:text-4xl text-white font-bold p-4 hidden lg:block">Zack Snyder`s Justice League</h1>{/** For Heading of the Movie */}
                
                <div className="flex flex-col-reverse lg:flex-col gap-3 lg:gap-5">
                <div className="sm:text-xs lg:text-xl text-white font-light flex flex-col gap-2">
                    {/** For Extra Information */}
                    <h4>English • Languages: Audio(1), Subtitles(1)</h4>
                    <h4>4h 1m • Action, Adventure, Fantasy • 16+ • 18 Mar, 2021</h4>
                
                </div>



                <div className="flex items-center gap-2 py-2 md:px-4 md:w-screen lg:w-full">
                    {/** For Buttons and all */}
                    <button className="bg-ButtonColor-300 py-3 w-full text-white font-semibold rounded-lg">Rent ₹149</button>
                    <button className="bg-ButtonColor-300 py-3 w-full text-white font-semibold rounded-lg">Buy ₹689</button>
                
                </div>
                </div>
                
            
               
             </div>
        </>
    )
}

export default MovieInfo;

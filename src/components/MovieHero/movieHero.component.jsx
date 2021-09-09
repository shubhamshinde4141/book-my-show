import React from 'react'
import MovieInfo from './movieInfo.component'



// So this file components is used to display movie page content
// Movie Page content is different for mobile and large screen,
// So we will code here and use it at movie page

const MovieHeroComponent = () => {
    return (
        <>
            <div className="relative md:hidden w-full" style={{ height: "calc(180vw)" }}>
                {/** This is for Mobile Screen */}
                
                <div className="w-full h-48 bg-opacity-30 absolute bg-black z-10 bottom-0"/>

                <img
                    src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
                    alt="BackgroundPoster"
                    className="w-full h-full"               
                />

                
                     <div className="absolute z-20 bottom-5 left-3 right-3">
                        {/** This is the information of the movie which we will take from movieinfo.components.jsx page */}
                        <MovieInfo/>
                    </div>
               

               
            </div>

            <div className=" relative hidden md:block lg:hidden" style={{ height: "calc(100vw)" }}>
                {/** This is for Medium Screen */}

                <div className="w-full h-48 bg-opacity-30 absolute bg-black z-10 bottom-0"/>
                
            <img
                    src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
                    alt="BackgroundPoster"
                    className="w-full h-full"
                />

                    <div className="absolute z-20 bottom-5">
                        {/** This is the information of the movie which we will take from movieinfo.components.jsx page */}
                        <MovieInfo/>
                    </div>
                
            </div>

            <div className=" relative hidden w-full lg:block" style={{ height: "30rem" }}>
                {/** This is for PC Screen */}

                {/** That backgroundmage gradient code is added because image background is somewhat black  */}
                <div className="absolute z-10 w-full h-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(34,34,34) 24.97% , rgb(34,34,34) 38.3% ,rgba(34,34,34,0.04) 97.47% , rgb(34,34,34) 100%" }} />
                
                <div className="absolute z-30 left-24 top-10 flex items-center gap-10 ">
                     {/** Now This Div will add the poster in the front */}
                <div className="w-64 h-96">
                    <img
                        src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
                        alt="FrontPoster"
                        className="w-full h-full rounded-xl "
                    />
                    </div>
                    
                    <div>
                        {/** This is the information of the movie which we will take from movieinfo.components.jsx page */}
                        <MovieInfo/>
                    </div>
                </div>
               



                <img
                    src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
                    alt="BackgroundPoster"
                    className="w-full h-full"
                />
            </div>
        </>
    )
}

export default MovieHeroComponent;

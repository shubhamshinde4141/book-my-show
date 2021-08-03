import React from "react";

// Import entertainment Card 
import EntertainmentCardSlider from "../components/Entertainment/entertainment.component";

// Import Posters
import PosterImages from "../Config/PosterImages.config";

// Import PosterSlider
import Posterslider from "../components/PosterSlider/Posterslider.component";


const HomePage = () => {
    return (
        <>
            <div className="flex flex-col gap-6">


            <div className="container mx-auto w-4/5"> 
                    <img
                        src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png"
                        alt="middle_Image"
                        className="w-full h-full" />
                </div>

            <div className="container mx-auto px-5">
                <h1 className="text-2xl font-bold px-4 py-3 text-gray-800">The Best of Entertainment</h1>
                <EntertainmentCardSlider />  
                </div>


                
                
            {/**This Block is for Premier of Movies Block ---- Friday premier */}
            <div className="bg-PremierBg-700 py-6">
                <div className="container mx-auto px-4 flex flex-col gap-3">
                <div className="hidden md:flex">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="premier_logo" className="w-full h-full" />
                        </div>
                        <Posterslider
                            images={PosterImages}
                            title="Premier"
                            subtitle="Brand New Releases every Saturday" isDark/>
                    </div>
                </div>
                
                 {/**This Block is for Online Streaming Section */}
                <div className="bg-PremierBg-100 py-6">
                    <div className="container mx-auto px-4 flex flex-col gap-3">
                        <Posterslider
                            images={PosterImages}
                            title="Online Streaming Events" 
                            subtitle="New Online Events For You" />
                    </div>
                </div>

            </div>
           
            
            
        </>
    );
};




export default HomePage;

//#303650


// Now we have made another file for poster images and setings . so we dont need premier.components.jsx file
// Also there is No need for Online Streaming File 
import React from "react";

// Import entertainment Card 
import EntertainmentCardSlider from "../components/Entertainment/entertainment.component";
import  Premier  from "../components/Premier/premier.component";


const HomePage = () => {
    return (
        <>
            <div className="flex flex-col gap-6">

            <div className="container mx-auto px-5">
                <h1 className="text-2xl font-bold px-4 py-3 text-gray-800">The Best of Entertainment</h1>
                <EntertainmentCardSlider />  
            </div>
            
            <div className="bg-PremierBg-700 py-6">
                <div className="container mx-auto px-4 flex flex-col gap-3">
                <div className="hidden md:flex">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="premier_logo" className="w-full h-full" />
                </div>
                <Premier/>
                </div>
               
               
            </div>
            </div>
           
            {/* <div className="container mx-auto py-5">
                <div className="container mx-auto">
                <div className="bg-gray-700 h-auto py-6">
                    <h1 className="text-2xl font-bold px-4 py-2 text-white">Premiers</h1>
                    <h3 className="text-xl text-white px-2 py-2">Brand New Releases every Friday</h3>
                <Premier/>
                </div>
                </div>
           
            </div> */}
            
        </>
    );
};




export default HomePage;

//#303650
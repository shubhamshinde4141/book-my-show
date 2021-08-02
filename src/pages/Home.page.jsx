import React from "react";

// Import entertainment Card 
import EntertainmentCardSlider from "../components/Entertainment/entertainment.component";

const HomePage = () => {
    return (
        <>
            <div className="container mx-auto px-3">
                <h1 className="text-2xl font-bold px-4 py-3 text-gray-800">The Best of Entertainment</h1>
            <EntertainmentCardSlider />
             </div>
            
        </>
    );
};




export default HomePage;
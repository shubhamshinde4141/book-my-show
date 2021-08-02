import React from "react";
import HeroSlider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {

    const SettingsLG = {
        centerMode: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerPadding: "300px",
        slidesToShow: 1,
        infinite: true,


    }

    const Settings = {   
    speed:500,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    };

    const images = [
        "https://images.unsplash.com/photo-1563990308267-cd6d3cc09318?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1618307147562-8b3b1b1957f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
        "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
        "https://images.unsplash.com/photo-1582556103222-69d09785392a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
       
    ]

    return (
        <>
            <div className="lg:hidden">
                {/*  For Medium and Mobile Devices */ }
            <HeroSlider {...Settings}>
                {
                    images.map((image) => (
                        <div className="w-full h-44 md:h-64 py-4 rounded:md">
                            <img src={ image} alt="test" className="w-full h-full rounded-md"/>
                        </div>
                    ))
                }
                
        </HeroSlider>
            </div>


            <div className="hidden lg:block">
                {/*  For Large Devices */ }
            <HeroSlider {...SettingsLG}>
                {
                    images.map((image) => (
                        <div className="w-full h-96 px-2 py-3 ">
                            <img src={ image} alt="test" className="w-full h-full rounded-md"/>
                        </div>
                    ))
                }
                
        </HeroSlider>
            </div>
        </>
    );
};

export default HeroCarousal;

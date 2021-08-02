import React from "react";
import HeroSlider from "react-slick";



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
        "https://in.bmscdn.com/promotions/cms/creatives/1627726259946_wdweb2a.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1626372121139_bsm_1280x500_romcom_1.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1627630928738_ispweb.jpg",
        "https://in.bmscdn.com/promotions/cms/creatives/1627630928738_ispweb.jpg",
       
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

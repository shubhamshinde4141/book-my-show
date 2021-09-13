import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import HeroSlider from "react-slick";



const HeroCarousal = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const requestNowPlayingMovies = async () => {
            const getImages = await axios.get("/movie/now_playing");
            //console.log(getImages);
            setImages(getImages.data.results);
        };
        requestNowPlayingMovies();
    }, []);

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

    

    return (
        <>
            <div className="lg:hidden">
                {/*  For Medium and Mobile Devices */ }
            <HeroSlider {...Settings}>
                {
                    images.map((image) => (
                        <div className="w-full h-44 md:h-64 py-4 rounded:md">
                            <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="test" className="w-full h-full rounded-md"/>
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
                            <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="test" className="w-full h-full rounded-md"/>
                        </div>
                    ))
                }
                
        </HeroSlider>
            </div>
        </>
    );
};

export default HeroCarousal;

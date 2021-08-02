import React from 'react'
import Slider from "react-slick";


// import poster
import Poster from '../Poster/poster.component';


const Premier = () => {
   
    var Settings = {
        //Infinity: false,
        slidesToShow: 5,
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
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    centerMode: true,
                    //rows: 2,
                    infinite: true,
                    centerPadding: "20px",
                    swipeToSlide: true,
                    

                }
            }


        ],
        

    };

    const PremierImages = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-appgcvtkry-portrait.jpg",
            alt: "Zack",
            title: "Snyder-Cut",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00304964-sppgefaccr-portrait.jpg",
            alt:"Rewind",
            title: "Rewind",
            subtitle: "Kannada",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00138770-kfmhzakdwj-portrait.jpg",
            alt: "TailGate",
            title: "TailGate",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODMlICA0Mmsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00305671-fhqjrmplxa-portrait.jpg",
            alt: "Karnan",
            title: "Karnan",
            subtitle: "Telugu",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-evsmpzefqs-portrait.jpg",
            alt: "The Secrets We Keep",
            title: "The Secrets We Keep",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00308446-jldllpekyw-portrait.jpg",
            alt: "Mortal Kombat",
            title: "Mortal Kombat",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00077622-ltlsaebkxh-portrait.jpg",
            alt: "Wonder Woman 1984",
            title: "Wonder Woman 1984",
            subtitle: "English",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137324-sbpncjcxff-portrait.jpg",
            alt: "The Courier",
            title: "The Courier",
            subtitle: "English",
        },

    ];
   
   
   
    return (
        <>
            <div className="flex flex-col items-start">
            <h1 className="text-2xl font-bold text-white">Premiers</h1>
            <h3 className="text-xl text-white py-1">Brand New Releases every Friday</h3>
            </div>
            <Slider {...Settings}>
                {PremierImages.map((image) => (
                    <Poster {...image} isDark />
                ))}
            </Slider>
        </>
    );
};

export default Premier;




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
export default Settings;
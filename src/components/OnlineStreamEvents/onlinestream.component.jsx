import React from 'react';
import Slider from "react-slick";


// import poster
import Poster from '../Poster/poster.component';

//Import Settings
import PosterSettings from '../../Config/PosterCorosual.config';

export const Onlinestream = () => {

    const OnlineStreamImages = [
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNSBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00131881-artwyfqtbr-portrait.jpg",
            alt: "Vipul Goyal Live",
            title: "Vipul Goyal Live",
            subtitle: "Watch On Zoom",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAzMSBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00304013-buydxgaljh-portrait.jpg",
            alt:"Free Online Courses From UpGrad",
            title: "Free Online Courses From UpGrad",
            subtitle: "Online Streaming",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA2IEF1ZyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00312849-qjlnapxmvl-portrait.jpg",
            alt: "Tug Of Jokes",
            title: "Tug of Jokes",
            subtitle: "Watch On Zoom",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAyIEF1ZyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00137585-qchvednjde-portrait.jpg",
            alt: "Learn Data Analytics",
            title: "Learn Data Analytics",
            subtitle: "Online Streaming",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEF1ZyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00305161-dxwnycekgb-portrait.jpg",
            alt: "Ruskin Bond Teaches Writing",
            title: "Ruskin Bond Teaches Writing",
            subtitle: "Online Streaming",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA3IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313180-rxkzwljxaw-portrait.jpg",
            alt: "LockDown Wale Frustrations",
            title: "LockDown Wale Frustrations",
            subtitle: "Watch On Zoom",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCA1IEF1ZyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00310085-tyjrlqlknf-portrait.jpg",
            alt: "Pencil Sketching",
            title: "Pencil Sketching",
            subtitle: "Watch On Zoom",
        },
        {
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAzIEF1ZyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00310934-cpkfwxaccw-portrait.jpg",
            alt: "Earn Money By Android Development",
            title: "Earn Money By Android Development",
            subtitle: "Watch On Zoom",
        },

    ];




    return (
        <>
             <div className="flex flex-col items-start">
            <h1 className="text-2xl font-bold text-black">Online Streaming Events</h1>
            </div>
            <Slider {...PosterSettings}>
                {OnlineStreamImages.map((image) => (
                    <Poster {...image} />
                ))}
            </Slider>
        </>
    )
};

export default Onlinestream;

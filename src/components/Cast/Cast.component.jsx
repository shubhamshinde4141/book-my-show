import React from 'react'

const Cast = (props) => {
    return (
        <>
            
            

                { /** For Photos and names of the cast */}
                <div className="flex flex-col items-center">
                <div className="w-28 h-28">
                    <img src={props.image} alt="crew-man" className="w-full h-full rounded-full" />
                    
                </div>
                <h1 className="text-base font-normal text-gray-800">{ props.castname}</h1>
                <h2 className="text-base font-medium text-gray-400">{ props.castname_in_movie}</h2>
            </div>


            

           
            

        </>
    )
}

export default Cast;

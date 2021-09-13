import React from 'react';
import PlayesFilter from '../components/PlayesFilter/PlayesFilter.component';


// import poster component 
import Poster from '../components/Poster/poster.component';

const Plays = () => {
    return (
        <>
            {/** This is main div */}
            <div className="container auto mx-2 my-2">
           
                 
                <div className="w-full lg:flex lg:flex-row-reverse gap-5">
                    {/** This is right side of the page ( Posters of Plays ) */}
                    <div className="lg:w-3/5">
                        <h2 className="text-xl font-medium mb-3">Playes in Bengluru</h2>
                    
                    <div className="flex flex-wrap ">
                    {/** For Posters */}
                    <div className="w-1/2 md:w-1/3 my-3">
                    <Poster
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:…F,oy-620,ox-24/et00314410-jmpjuwpczx-portrait.jpg"
                        title="Love is in the Air"
                        subtitle="Prabhat English"
                    />      
                    </div>
                    
                    <div className="w-1/2 md:w-1/3 my-3">
                    <Poster
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:…F,oy-620,ox-24/et00314410-jmpjuwpczx-portrait.jpg"
                        title="Love is in the Air"
                        subtitle="Prabhat English"
                    />      
                    </div>
                        
                    <div className="w-1/2 md:w-1/3 my-3">
                    <Poster
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:…F,oy-620,ox-24/et00314410-jmpjuwpczx-portrait.jpg"
                        title="Love is in the Air"
                        subtitle="Prabhat English"
                    />      
                    </div>
                            
                    <div className="w-1/2 md:w-1/3 my-3">
                    <Poster
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:…F,oy-620,ox-24/et00314410-jmpjuwpczx-portrait.jpg"
                        title="Love is in the Air"
                        subtitle="Prabhat English"
                    />      
                    </div>
                        
                    </div>
                    </div>
                    
                    
                    
                    {/** This is left side of the page ( Categories) */}
                    <div className="lg:w-3/12">
                        <h2 className="text-xl font-medium mb-3">Filters</h2>
                        <PlayesFilter
                            title="Date"
                            tags={["Tomorrow","Today","This Weekend"]}
                        />

                        <PlayesFilter
                            title="Languages"
                            tags={["Tamil","Telugu","Hindi"]}
                        />
                        <PlayesFilter
                            title="Categories"
                            tags={["Theater","Drama","Comic"]}
                        />

                    </div>
                </div>


              
                 



            </div>
        </>
    )
}

export default Plays;

import React from 'react';
import { Disclosure } from '@headlessui/react';

import { BiChevronUp ,BiChevronDown} from 'react-icons/bi';
// F5F5F5

const PlayesFilter = (props) => {
    return (
        <>
            <Disclosure>
                {
                    ({ open }) => (
                        <>
                            {/** Container to contain all the material including button and panel */}
                            <div className={open ? "container mx-3 mt-2 ml-6 bg-gray-50 pl-8 pt-2 w-4/5 h-40 rounded" : "container mx-3 mt-2 ml-6 bg-gray-50 pl-8 pt-2 w-4/5 h-14 rounded"}> 

                            <Disclosure.Button className="py-2 flex items-center gap-2">
                                {open ? <BiChevronUp /> : <BiChevronDown />}
                                <span className={open ? "text-red-600" : "text-gray-800"}>
                                {props.title}
                                </span>
                               
                                
                            </Disclosure.Button>

                            {/** This is the panel which will appear after clicking the arrow */}
                          
                                <Disclosure.Panel>
                                    
                                    <div className="flex items-center gap-3 flex-wrap">
                                {
                                    props.tags.map((tag) =>
                                    <>
                                        <div className="border border-gray-400 px-3 py-2 ">
                                            <span className="text-base text-red-600">
                                                 {tag}  {/** This are tags */}
                                            </span>
                                        </div>
                                    </>
        
                                     )
                                }
                                </div>

                                    
                                 
                            </Disclosure.Panel>    

                           </div>
                            

                            
                            
                        </>
    
                    )
                }
            </Disclosure> 
        </>
    )
}

export default PlayesFilter;






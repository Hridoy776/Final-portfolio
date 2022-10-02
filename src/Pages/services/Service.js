import React from 'react';
import {MdPlayArrow} from 'react-icons/md'
const Service = () => {
    return (
        <div className='w-full'>
            <div className='flex  items-center'>
            <p className='text-2xl font-bold tracking-widest mx-3 my-3'>Services</p>
            <div className='h-[2px] bg-accent w-full '></div>
            </div>
            
            <div className='flex justify-start items-center'>
               <MdPlayArrow  className='w-8 mr-2'/>
               <p className='text-lg uppercase'>web design</p> 
            </div>
            <div className='flex justify-start items-center'>
               <MdPlayArrow  className='w-8 mr-2'/>
               <p className='text-lg uppercase'>web development</p> 
            </div>
            <div className='flex justify-start items-center'>
               <MdPlayArrow  className='w-8 mr-2'/>
               <p className='text-lg uppercase'>web hosting</p> 
            </div>
            <div className='flex justify-start items-center'>
               <MdPlayArrow  className='w-8 mr-2'/>
               <p className='text-lg uppercase'>on-page seo</p> 
            </div>
        </div>
    );
};

export default Service;
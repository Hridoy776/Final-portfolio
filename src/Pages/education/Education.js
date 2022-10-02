import React from 'react';
import './Education.css'
const Education = () => {
    return (
        <div className='univ'>
            <p className='text-2xl uppercase tracking-widest font-bold mb-3'>Education</p>
           
                <ul >
                    <li>
                        <div className='flex justify-start  items-start mt-2'>
                            <span className='bg-accent px-2 lg:mr-12 mr-6 rounded-lg text-white '>2010-2016</span>
                            <div className='text-lg'>
                                <p className='font-bold uppercase'>RB govt High School</p>
                                <p className='capitalize'>secondary school sertificate</p>
                            </div>
                        </div>
                    </li>
                    <li><div className='flex justify-start items-start mt-2'>
                        <span className='bg-accent px-2 lg:mr-12 mr-6 rounded-lg text-white'>2010-2016</span>
                        <div className='text-lg'>
                            <p className='font-bold uppercase'>joypurhat govt college</p>
                            <p className='capitalize'>higher secondary sertificate</p>
                        </div>
                    </div></li>
                    <li className='pb-0'><div className='flex justify-start items-start  mt-2'>
                        <span className='bg-accent px-2 lg:mr-12 mr-6 rounded-lg text-white'>2019-2024</span>
                        <div className='text-lg'>
                            <p className='font-bold uppercase'>HSTU</p>
                            <p className='capitalize '>graduation</p>
                        </div>
                    </div></li>
                </ul>
            </div>
       
    );
};

export default Education;
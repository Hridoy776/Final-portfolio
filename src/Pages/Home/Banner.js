import React from 'react';
import Typewriter from 'typewriter-effect';
import pdf from '../../Asset/final resume2.pdf'

import image from '../../Image/aboutme/aboutme.png'
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-[] ">
            <div className="lg:flex justify-around items-center ">
                <div

                    className='flex-1 justify-center lg:mr-48 items-center max-w-lg mb-20 '>
                    <img src={image} className="max-w-lg rounded-b-full   my-auto" alt='' />
                </div>
                <div className='flex-1'>
                    <div className='text-5xl text-secondary font-bold'><Typewriter
                        options={{
                            strings: ['Hello', 'Im Redoy'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></div>

                    <p className="py-6 text-4xl font-medium text-accent">React Developer</p>
                    <button className="btn rounded-none text-accent   hover:bg-secondary   btn-outline "><a href={pdf} download>download resume</a></button>
                </div>

            </div>

        </div>)
};

export default Banner;
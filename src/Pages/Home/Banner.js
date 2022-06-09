import React from 'react';

import pdf from '../../Asset/final resume2.pdf'
const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                
                </div>
                <div className='flex-1'>
                    <h1 class="text-5xl font-bold">Hello Im Redoy</h1>
                    <p class="py-6 text-4xl font-medium">React Developer</p>
                    <button class="btn btn-primary bg-[#6E59BC]"><a href={pdf} download>download resume</a></button>
                </div>
            </div>
            <svg viewBox="0 0 1440 200" class="wave">
                <path fill="#ffffff" fill-opacity="1" d="M0,128L40,117.3C80,107,160,85,240,90.7C320,96,400,128,480,154.7C560,181,640,203,720,192C800,181,880,139,960,106.7C1040,75,1120,53,1200,58.7C1280,64,1360,96,1400,112L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
        </div>)
};

export default Banner;
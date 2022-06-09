import React from 'react';
import Typewriter from 'typewriter-effect';
import pdf from '../../Asset/final resume2.pdf'
import image from '../../Image/banner/pngtree-abstract-playful-portfolio-pink-memphis-image_593415.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen " style={{ backgroundImage: `url(${image})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <img src={image2} alt="" />
                </div>
                <div className='flex-1'>
                    <div className='text-5xl text-secondary font-bold'><Typewriter
                        options={{
                            strings: ['Hello', 'Im Redoy'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></div>

                    <p className="py-6 text-4xl font-medium">React Developer</p>
                    <button className="btn btn-primary bg-[#6E59BC]"><a href={pdf} download>download resume</a></button>
                </div>
            </div>

        </div>)
};

export default Banner;
import React from 'react';
import Typewriter from 'typewriter-effect';
import pdf from '../../Asset/final resume2.pdf'
import image from '../../Image/banner/pngtree-abstract-playful-portfolio-pink-memphis-image_593415.jpg'
import dev from '../../Image/banner/young-flat-businessman-glasses-computer-work-young-flat-businessman-glasses-computer-work-concept-160516833-removebg-preview.png'
const Banner = () => {
    return (
        <div className="hero min-h-screen " style={{ backgroundImage: `url(${image})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <img src={dev} alt="" />
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
                    <button className="btn rounded-none   btn-primary btn-outline "><a href={pdf} download>download resume</a></button>
                </div>
            </div>

        </div>)
};

export default Banner;
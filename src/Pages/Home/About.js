import React from 'react';
import image from '../../Image/aboutme/aboutme.png'
import {FaFacebook,FaInstagram,FaGithub,FaLinkedinIn} from 'react-icons/fa'
const About = () => {
    return (

        <div className=" lg:w-[90%] w-[95%] lg:h-[450px] px-4 mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-10  justify-center  items-center">
            
            <div className=''>
            <p className=' text-7xl z-0 opacity-10 font-bold tracking-widest absolute '>About</p>
                <p className="py-6 mt-3 lg:text-xl text-accent relative ">Hello there, my name is Rakib Hasan Redoy. A passionate and dedicated front end developer.I really enjoy programming.Always remain excited to learn new things.</p>
                <button className="btn rounded-none px-6  btn-secondary btn-outline ">Hire me</button>

                <ul className='mt-8 flex text-3xl text-accent  '>
                    <li className='mr-3 hover:text-black '><FaFacebook/></li>
                    <li className='mr-3 hover:text-black'><FaInstagram/></li>
                    <li className='mr-3 hover:text-black'><FaGithub/></li>
                    <li className='hover:text-black delay-100 '><FaLinkedinIn/></li>
                </ul>
            </div>

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
        </div>

    );
};

export default About;
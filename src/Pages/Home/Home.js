import { ArrowUpIcon } from '@heroicons/react/solid';
import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import About from './About';
import Banner from './Banner';
import Skill from './Skill';
import  './Home.css'
import Service from '../services/Service';
import Interest from '../services/Interest';
import Education from '../education/Education';
const Home = () => {
    return (
        <div id='top' className='min-h-screen bg-neutral'>
            <Banner />

            <section id='about' className='' >
                
                <section >
                    <About />
                    
                </section>
            </section>
            <section className='mt-16 bg-[#F6FBFF]' id='skill'>
                <div className='flex justify-center mx-auto items-center my-10'>
                    
                    <div className='text-6xl mx-4  lg:mx-16'><h1 className='strok'>Skill</h1></div>
                    
                </div>
                <section className='' >
                    <Skill />
                </section>
            </section>
            <section className=' mx-10 lg:flex items-center justify-around'>
                <Service/>
                <Interest/>
            </section>
            <section className='mt-16' id='project'>
                <div className='flex justify-center mx-auto items-center my-10'>
                    
                    <div className=' text-2xl lg:text-6xl mx-4  lg:mx-16'><h1 className='strok'>Projects</h1></div>
                    
                </div>
                <section >
                    <Projects />
                </section>
                <section className='my-16 bg-[#F6FBFF] p-3 ' id="contact">
                    <Contact />
                </section>
            </section>
            <ScrollToTop
                color='red'
                component={<ArrowUpIcon className='p-2 rounded-lg text-white bg-accent' />}
                smooth ></ScrollToTop>
        </div>
    );
};

export default Home;
import { ArrowUpIcon } from '@heroicons/react/solid';
import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import About from './About';
import Banner from './Banner';
import Skill from './Skill';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner />

            <section id='project'>
                <div className='flex justify-center mx-auto items-center my-10'>
                    <div className='border-t-4 border-primary mt-2 w-1/4'></div>
                    <div className='text-6xl mx-4  lg:mx-16'>About</div>
                    <div className='border-t-4 border-primary mt-2 w-1/2'></div>
                </div>
                <section >
                    <About />
                </section>
            </section>
            <section id='project'>
                <div className='flex justify-center mx-auto items-center my-10'>
                    <div className='border-t-4 border-primary mt-2 w-1/4'></div>
                    <div className='text-6xl mx-4  lg:mx-16'>Skill</div>
                    <div className='border-t-4 border-primary mt-2 w-1/2'></div>
                </div>
                <section >
                    <Skill />
                </section>
            </section>
            <section id='project'>
                <div className='flex justify-center mx-auto items-center my-10'>
                    <div className='border-t-4 border-primary mt-2 w-1/4'></div>
                    <div className='text-6xl mx-4  lg:mx-16'>Projects</div>
                    <div className='border-t-4 border-primary mt-2 w-1/2'></div>
                </div>
                <section >
                    <Projects />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </section>
            <ScrollToTop
                color='red'
                component={<ArrowUpIcon className='p-2 rounded-lg text-secondary bg-primary' />}
                smooth ></ScrollToTop>
        </div>
    );
};

export default Home;
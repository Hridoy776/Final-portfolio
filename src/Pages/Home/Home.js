import { ArrowUpIcon } from '@heroicons/react/solid';
import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <section>
                <div className='flex justify-center mx-auto items-center my-10'>
                    <div className='border-t-4 border-primary mt-2 w-1/4'></div>
                    <div className='text-6xl  mx-3'>Projects</div>
                    <div className='border-t-4 border-primary mt-2 w-1/2'></div>
                </div>
                <section id='project'>
                <Projects />
                </section>
                <Contact/>
            </section>
            <ScrollToTop 
            color='red'
            component={<ArrowUpIcon className='p-2 rounded-lg text-secondary bg-primary'/>}
             smooth ></ScrollToTop>
        </div>
    );
};

export default Home;
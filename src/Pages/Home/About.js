import React from 'react';
import image from '../../Image/banner/young-flat-businessman-glasses-computer-work-young-flat-businessman-glasses-computer-work-concept-160516833-removebg-preview.png'
const About = () => {
    return (

        <div class=" lg:w-[70%] w-[95%] p-4 mx-auto my-16 grid grid-cols-1 lg:grid-cols-2 gap-10  justify-center items-center">
            <div className='flex justify-center items-center h-[500px]'>
                <img src={image} class=" w-[95%] rounded-[50%] shadow-2xl my-auto" alt='' />
            </div>
            <div className=''>

                <p class="py-6 text-2xl ">Hello there, my name is Rakib Hasan Redoy. A passionate front end developer.I really enjoy programming.Always remain excited to learn new things.</p>
                <button class="btn btn-primary">Hire me</button>
            </div>
        </div>

    );
};

export default About;
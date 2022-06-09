import React from 'react';
import Image from '../../Image/projects/drill destructor.png'
import Image2 from '../../Image/projects/pristine-perfumes1.png'
import Image3 from '../../Image/projects/tech-world.png'
const Projects = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-4 w-[80%] mx-auto my-10'>
            <div className=" card-compact max-w-lg bg-[#9E7777] shadow-xl">
                <figure><img src={Image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Drill Destructor</h2>

                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
            <div className=" card-compact max-w-lg bg-[#9E7777] shadow-xl">
                <figure><img src={Image2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Pristine Perfumes</h2>

                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
            <div className=" card-compact max-w-lg bg-[#9E7777] shadow-xl">
                <figure ><img src={Image3} className='h-[200px] w-[100%]' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Tech World</h2>

                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
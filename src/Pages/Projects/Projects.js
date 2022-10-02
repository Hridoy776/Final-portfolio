import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import useProject from '../../Hook/useProject';
const Projects = () => {

    const [projects] = useProject()
    const [onHover, setOnHover] = useState(-1)
    const navigate = useNavigate()

    const handleDetails = (id) => {
        navigate(`/details/${id}`)
    }
    const hideButton = (index) => {
        return ` grid grid-cols-4 gap-8 ${onHover === index ? " " : 'hidden'}   `
    }

    return (
        <div

            className=' w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center items-center'>

            {
                projects.map(project => {
                    return (
                        <div>
                            <div
                                onClick={() => handleDetails(project._id)}
                                onMouseEnter={() => setOnHover(project._id)}
                                onMouseLeave={() => setOnHover(-1)}
                                className='shadow-lg flex items-end p-3  ' key={project._id} style={{ backgroundImage: `url(${project.img[0]})`, width: '350px', height: "350px" }}>
                                <div className={hideButton(project._id)} >
                                    <p

                                    >

                                        <button
                                            onClick={() => handleDetails(project._id)}
                                            className='btn bg-secondary    rounded-none    '>Details</button>
                                    </p>
                                    <p

                                    >

                                        <a href={project.glink1}
                                            className='btn bg-secondary    rounded-none    '>client</a>
                                    </p>
                                    <p

                                    >

                                        <a href={project.glink2}
                                            className='btn bg-secondary    rounded-none    '>server</a>
                                    </p>
                                    <p

                                    >

                                        <a href={project.live}
                                            className='btn bg-secondary    rounded-none    '>Live</a>
                                    </p>
                                </div>

                            </div>
                            <p className='text-xl capitalize mt-4 font-bold text-accent'>{project.name}</p>
                        </div>



                    )
                })
            }

        </div>
    );
};

export default Projects;


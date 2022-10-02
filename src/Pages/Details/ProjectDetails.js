import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProject from '../../Hook/useProject';
const port = process.env.PORT || 3000;

const ProjectDetails = () => {
    const [project, setProject] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://hridoy-final-portfolio.herokuapp.com/project/${id}`)
        .then(data => {
            setProject(data.data)
            setLoading(false)
        })
    }, [id])
    if (loading) {
        return <p>loading</p>
    }
    

    return (
        <div className=' h-full  flex flex-col justify-center items-start p-10 mt-32'>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
            {
                project.img.map((im,index)=>{
                    return(
                        <img className='w-[325px] border-2 rounded-sm h-[325px] shadow-lg' src={im} alt={index} />
                    )
                })
            }
            </div>
            <div className='w-[95%] h-fit'>
            <p className='text-xl mt-4 font-bold text-accent '>{project.name}</p>
            <p className='text-2xl font-medium text-accent capitalize'>{project.catagory}</p>
                <div className='grid grid-cols-3 gap-4 w-fit mt-4  items-center'>
                
                <a className='link text-secondary text-md font-bold' href={project.live}>live-link</a>
                <a className='link text-secondary text-md font-bold' href={project.glink1}>client-code</a>
                {
                    project.glink2 && <a className='link text-secondary text-md font-bold' href={project.glink2}>server-code</a>
                }
                </div>
                
                <p className='text-xl my-3 text-accent text-justify lg:w-[70%] '><span className='text-xl font-bold text-accent capitalize'>description:</span> {project.description}</p>
                <span className='text-xl font-bold text-accent capitalize'>technology used:</span>
                <p className='text-lg'>{project.technology}</p>
            </div>
        </div>
    );
};

export default ProjectDetails;
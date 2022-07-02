import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProject from '../../Hook/useProject';
const port = process.env.PORT || 3000;

const ProjectDetails = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:${port}/project.json`).then(data => {
            setProjects(data.data)
            setLoading(false)
        })
    }, [])
    if (loading) {
        return <p>loading</p>
    }
    const l = projects.find(s => parseInt(s.id) === parseInt(id))
    console.log(l)

    return (
        <div className='min-h-screen mx-auto w-[90%] lg:w-[800px] h-[700px] mt-36 lg:flex  items-center justify-center'>
            <div className='grid grid-cols-1 justify-center items-center lg:w-1/2  gap-8 bg-base-200 mx-auto'>
                <img className='w-[250px] mx-auto' src={l.img[0]} alt="" />
                <img className='w-[250px] mx-auto' src={l.img[1]} alt="" />
                <img className='w-[250px] mx-auto' src={l.img[2]} alt="" />
            </div>
            <div className='max-w-lg border border-primary lg:w-1/2 p-5'>
                <h2 className='text-3xl lg:text-5xl mt-10'>{l.name}</h2>
                <p className=' text-xl lg:text-2xl'>{l.description}</p>
                <p className=' text-xl lg:text-2xl'><span className='text-primary font-bold'>technology used</span> :{l.technology}</p>
            </div>
        </div>
    );
};

export default ProjectDetails;
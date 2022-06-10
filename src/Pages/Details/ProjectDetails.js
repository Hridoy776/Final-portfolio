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
        <div className='min-h-screen my-auto flex flex-col items-center justify-center'>
            <div className='grid grid-cols-3 gap-8 bg-base-200'>
                <img className='w-[250px]' src={l.img[0]} alt="" />
                <img className='w-[250px]' src={l.img[1]} alt="" />
                <img className='w-[250px]' src={l.img[2]} alt="" />
            </div>
            <div>
                <h2>{l.name}</h2>
                <p></p>
            </div>
        </div>
    );
};

export default ProjectDetails;
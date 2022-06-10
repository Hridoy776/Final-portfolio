import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProject from '../../Hook/useProject';
const Projects = () => {
    const[project]=useProject()
    const navigate=useNavigate()
    const handleDetail=(id)=>{
        navigate(`/details/${id}`)
    }
    return (
        <div className='grid lg:grid-cols-3 gap-4 w-[80%] mx-auto my-10'>
            {
                project.map(s=><div className=" card-compact max-w-lg bg-[#9E7777] shadow-xl">
                <figure><img src={s.img[0]} className="w-[100%] h-[200px]" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{s.name}</h2>
                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-2'>
                    <a className='btn w-fit btn-outline btn-secondary btn-sm' href={s.glink1}>client-side</a>
                    {
                        s.glink2 && <a className='btn w-fit btn-outline btn-secondary btn-sm' href={s.glink2}>server-side</a>
                    }
                    <a className='btn w-fit btn-outline btn-secondary btn-sm' href={s.live}>live</a>
                    </div>
                    <div className="card-actions justify-start">
                        <button onClick={()=>handleDetail(s.id)} className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>)
            }
            
        </div>
    );
};

export default Projects;
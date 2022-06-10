import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProject from '../../Hook/useProject';


const ProjectDetails =  () => {
    const {id}=useParams()
    console.log(id)
    const[project]=  useProject()
    
    return (
        <div className='min-h-screen my-auto flex items-center justify-center'>
            {
                project.length
            }
        </div>
    );
};

export default ProjectDetails;
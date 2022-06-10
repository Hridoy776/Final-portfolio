import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useProject = () => {
    console.log('hello')
    const [project,setProject]=useState([])
    useEffect(()=>{
        fetch('project.json')
        .then(res=>res.json())
        .then(data=>setProject(data))
    },[])
    return [project];
};

export default useProject;
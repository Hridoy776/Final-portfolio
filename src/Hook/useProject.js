import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useProject = () => {
    console.log('hello')
    const [project,setProject]=useState([])
    useEffect(()=>{
        fetch('https://hridoy-final-portfolio.herokuapp.com/projects')
        .then(res=>res.json())
        .then(data=>setProject(data))
    },[])
    return [project];
};

export default useProject;
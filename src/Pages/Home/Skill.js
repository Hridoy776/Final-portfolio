import React from 'react';
import { FaReact } from 'react-icons/fa';
import Css from '../../Image/icon/css-removebg-preview.png'
import Html from '../../Image/icon/html-removebg-preview.png'
import rea from '../../Image/icon/react.png'
import express from '../../Image/icon/express-removebg-preview.png'
import node from '../../Image/icon/node-removebg-preview.png'
import prog from '../../Image/21532465_6463748-removebg-preview.png'
import { useEffect } from 'react';
import { useState } from 'react';
const Skill = () => {
    const [s, setS] = useState([])
    useEffect(() => {
        const skills = [Html, Css, rea, node, express]
        setS(skills)
    }, [])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-fit mx-auto justify-center items-center'>
            <div className='grid grid-cols-3 lg:grid-cols-5 justify-center 
                 lg:gap-8 gap-4 lg:w-fit  w-[90%] mx-auto'>
                {
                    s.map((se, index) => <div key={index} className="card w-[70px]  h-[70px]  flex justify-center items-center  mx-auto bg-[#FFFFFF] rounded-full border-2 text-primary-content">
                        <img className='w-[30%] lg:w-[60%]' src={se} alt="" />
                    </div>
                    )
                }
            </div>
            <div className=' max-w-lg'>
                <img src={prog} alt="" />
            </div>
        </div>
    );
};

export default Skill;
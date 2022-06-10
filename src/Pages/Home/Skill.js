import React from 'react';
import { FaReact } from 'react-icons/fa';
import Html from '../../Image/icon/html-removebg-preview.png'
import Css from '../../Image/icon/css-removebg-preview.png'
import express from '../../Image/icon/express-removebg-preview.png'
import node from '../../Image/icon/node-removebg-preview.png'
const Skill = () => {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 justify-center gap-4 lg:w-[30%] w-[90%] mx-auto'>
            <div class="card w-[150px] flex justify-center items-center h-[150px] mx-auto bg-primary text-primary-content">
            <img className='w-[70%]' src={Html} alt="" />
            </div>
            <div class="card w-[150px] flex justify-center items-center h-[150px] mx-auto bg-primary text-primary-content">
            <img className='w-[70%]' src={Css} alt="" />
            </div>
            <div class="card w-[150px] flex justify-center items-center h-[150px] mx-auto bg-primary text-primary-content">
            <img className='w-[70%]' src={node} alt="" />
            </div>
            <div class="card w-[150px] flex justify-center items-center h-[150px] mx-auto bg-primary text-primary-content">
            <img className='w-[70%]' src={express} alt="" />
            </div>
            
            
        </div>
    );
};

export default Skill;
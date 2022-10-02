import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Sling as Hamburger } from 'hamburger-react';
import { NavHashLink } from 'react-router-hash-link';
import logo from '../Asset/my_logo.jpg'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)
    const [colorChange, setColorChange] = useState(false)


    return (
        <div>
            <nav className="fixed shadow-md z-50 top-0 w-full flex flex-wrap items-center justify-between px-2 py-3 card-nav   mb-3">
                <div className="container lg:px-32 px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <img className='w-64 h-16' src={logo} alt="" />
                        <button
                            className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            {
                                <Hamburger easing="ease-in" color='#868686' duration={0.8} />
                            }

                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow  ease-in items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto text-[#868686] ">

                            <li>
                                <NavHashLink
                                    smooth
                                    isActive={(match,location)=>{
                                        return match?.url===location?.pathname
                                    }}
                                    activeStyle={{ color: 'red',fontWeight: 'bold' }}
                                    className="px-3 py-2 flex items-center text-xl uppercase  leading-snug  hover:opacity-75  " to="/home#top">home</NavHashLink>
                            </li>
                            <li>
                                <NavHashLink
                                    smooth
                                    activeClassName="selected"
                                    activeStyle={{ color: 'red' }}
                                    className="px-3 py-2 flex items-center text-xl uppercase  leading-snug  hover:opacity-75   " to='/home#project'>project</NavHashLink>
                            </li>
                            <li>
                                <NavHashLink
                                    activeClassName="selected"
                                    activeStyle={{ color: 'red' }}
                                    smooth
                                    className="px-3 py-2 flex items-center text-xl uppercase   leading-snug  hover:opacity-75  " to='home#about'>about</NavHashLink>
                            </li>
                            <li>
                                <NavHashLink smooth
                                    activeClassName="selected"
                                    activeStyle={{ color: 'red' }}
                                    className="px-3 py-2 flex items-center text-xl uppercase  leading-snug  hover:opacity-75  " to='home#skill'>skill</NavHashLink>
                            </li>
                            <li>
                                <NavLink activeClassName="selected"
                                    activeStyle={{ color: 'red' }} className="px-3 py-2 flex items-center text-xl uppercase  leading-snug  hover:opacity-75  " to='/blog'>blog</NavLink>
                            </li>










                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
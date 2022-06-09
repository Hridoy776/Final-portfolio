import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import { MenuIcon, XIcon } from '@heroicons/react/solid'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)
    const [colorChange, setColorChange] = useState(false)

    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColorChange(true)
        }
        else {
            setColorChange(false)
        }
    }
    window.addEventListener("scroll", changeColor)


    const navLinkStyles = ({ isActive }) => {
        return {
            color: isActive ? '#FF3D46' : 'white',

        }
    }
    return (
        <div>
            <nav className="fixed shadow-md z-50 top-0 w-full flex flex-wrap items-center justify-between px-2 py-3 bg-[#6E59BC]   mb-3">
                <div className="container lg:px-32 px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <NavLink
                            className={colorChange ? "text-2xl font-medium leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-[#b504b5] uppercase title " : "text-2xl font-medium leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white uppercase title "}
                            to="/"
                        >
                            REDOY
                        </NavLink>
                        <button
                            className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            {
                                !navbarOpen ? <MenuIcon className="h-5 w-5  text-white transition duration-500" /> : <XIcon className="h-5 w-5 transition  text-white duration-500"/>
                            }
                            
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ">

                            <li>
                                <NavLink style={navLinkStyles} className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug  hover:opacity-75  " to="/home">home</NavLink>
                            </li>
                            <li>
                                <Link  className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug  hover:opacity-75  " to='home#project'>project</Link>
                            </li>
                            






                            


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Sling as Hamburger } from 'hamburger-react';
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
            <nav className="fixed shadow-md z-50 top-0 w-full flex flex-wrap items-center justify-between px-2 py-3 bg-primary   mb-3">
                <div className="container lg:px-32 px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <NavLink
                            className={colorChange ? "text-2xl font-medium leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-secondary uppercase title " : "text-2xl font-medium leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white uppercase title "}
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
                                <Hamburger easing="ease-in" color='white' duration={0.8} />
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
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ">

                            <li>
                                <NavLink style={navLinkStyles} className="px-3 py-2 flex items-center text-xl uppercase  leading-snug  hover:opacity-75  " to="/">home</NavLink>
                            </li>
                            <li>
                                <Link className="px-3 py-2 flex items-center text-xl uppercase  leading-snug  hover:opacity-75 text-white  " to='home#project'>project</Link>
                            </li>
                            <li>
                                <Link className="px-3 py-2 flex items-center text-xl uppercase text-white  leading-snug  hover:opacity-75  " to='home#about'>about</Link>
                            </li>
                            <li>
                                <Link className="px-3 py-2 flex items-center text-xl uppercase text-white leading-snug  hover:opacity-75  " to='home#skill'>skill</Link>
                            </li>
                            <li>
                                <NavLink style={navLinkStyles} className="px-3 py-2 flex items-center text-xl uppercase text-white leading-snug  hover:opacity-75  " to='/blog'>blog</NavLink>
                            </li>










                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
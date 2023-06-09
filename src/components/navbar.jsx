import React,{useState} from "react";
import Switcher from "../Switcher";
import "../index.css"
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {HashLink} from "react-router-hash-link";
import {Link} from "react-router-dom";

const Navbar = () => {
    const [nav,setNav] = useState(true)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <>
        <div className="sticky z-[9999999] w-full top-0 bg-transparent">
            <div className="dark:bg-black bg-white  border-b border-gray-400 dark:border-gray-400 shadow-xl dark:shadow-lg backdrop-filter backdrop-blur-lg dark:backdrop-blur-lg bg-opacity-30 dark:bg-opacity-20">
                <div className="hidden md:flex justify-evenly">
                    <div><h1 className="text-black dark:text-white font-bold text-2xl p-3"><Link to="/">nandanpai</Link></h1></div>
                    <div className="justify-center">
                        <ul className="text-black dark:text-white flex text-xl font-bold space-x-6 p-4">
                            <li><HashLink smooth to="/#work">Work</HashLink></li>
                            <li><HashLink smooth to="/Timeline">Timeline</HashLink></li>
                            <li><HashLink smooth to="/Contact">Contact</HashLink></li>
                            <li><HashLink smooth to="/Resume#resume">Resume</HashLink></li>
                        </ul>
                    </div>
                    <div className="p-4 hidden md:flex"><Switcher /></div>
                </div>
            </div>
            <div>
                <div className="dark:bg-black bg-white  border-b-2 border-b-gray-400 dark:border-b-gray-400 flex justify-evenly md:hidden flex-col backdrop-filter backdrop-blur-lg dark:backdrop-blur-lg bg-opacity-30 dark:bg-opacity-20">
                    <div className="flex justify-evenly">
                        <div className="p-4">
                            <div onClick={handleNav}>
                                {!nav ? <AiOutlineClose className="text-black dark:text-white" size={30}/>:<AiOutlineMenu className="text-black dark:text-white" size={30} />}
                            </div>
                        </div>
                        <div><h1 className="text-black dark:text-white font-bold text-2xl  flex md:hidden p-3"><Link to="/">nandanpai</Link></h1></div>
                        <div className=" md:hidden flex p-4"><Switcher /></div>
                    </div>
                    <div className={!nav ? "block p-2" : "hidden" }>
                        <div className="m-2 border-2 rounded-xl">
                            <ul className="text-black dark:text-white p-3 text-center space-y-4 text-xl ">
                                <li><HashLink smooth to="/#work">Work</HashLink></li>
                                <li><HashLink smooth to="/Timeline">Timeline</HashLink></li>
                                <li><HashLink smooth to="/Contact">Contact</HashLink></li>
                                <li><Link to="/Resume">Resume</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Navbar;
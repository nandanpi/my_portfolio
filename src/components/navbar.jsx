import React,{useState} from "react";
import Switcher from "../Switcher";
import "../index.css"
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
    const [nav,setNav] = useState(true)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <>
        <div className="dark:bg-black bg-white  border-b border-gray-400 dark:border-gray-400 ">
            <div className="hidden md:flex justify-evenly">
                <div><h1 className="text-black dark:text-white font-bold text-2xl p-3"><a href="/">nandanpi</a></h1></div>
                <div className="justify-center">
                    <ul className="text-black dark:text-white flex text-xl font-bold space-x-6 p-4">
                        <li><a href="/">Work</a></li>
                        <li><a href="/timeline">Timeline</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="p-4 hidden md:flex"><Switcher /></div>
            </div>
        </div>
            <div>
                <div className="dark:bg-black bg-white  border-b-2 border-b-gray-400 dark:border-b-gray-400 flex justify-evenly md:hidden">
                    <div className="p-4">
                        <div onClick={handleNav}>
                            {!nav ? <AiOutlineClose className="text-black dark:text-white" size={30}/>:<AiOutlineMenu className="text-black dark:text-white" size={30} />}
                        </div>
                    </div>
                    <div><h1 className="text-black dark:text-white font-bold text-2xl  flex md:hidden p-3"><a href="/">nandanpi</a></h1></div>
                    <div className={!nav ? ' w-full absolute mt-20 bg-white dark:bg-black ':'bg-white dark:bg-black fixed top-[-100%]'}>
                        <ul className=" uppercase text-black dark:text-white text-center">
                            <li className="p-4 text-teal dark:text-blue"><a href="/">Work</a></li>
                            <li className="p-4 text-teal dark:text-blue"><a href="/timeline">Timeline</a></li>
                            <li className="p-4 text-teal dark:text-blue"><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className=" md:hidden flex p-4"><Switcher /></div>
                </div>
            </div>

        </>
    );
}
export default Navbar;
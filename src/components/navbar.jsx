import React from "react";
import Switcher from "../Switcher";
import "../index.css"

const Navbar = () => {
    return (
        <>
        <div className="flex dark:bg-black bg-white justify-evenly border-b-2 ">
            <div><h1 className="text-black dark:text-white font-bold text-2xl p-3"><a href="/">nandanpi</a></h1></div>
            <div className="justify-center">
                <ul className="text-black dark:text-white flex text-xl font-bold space-x-6 p-4">
                    <li><a href="/">Work</a></li>
                    <li><a href="/timeline">Timeline</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className="p-4"><Switcher /></div>
        </div>
        </>
    );
}
export default Navbar;
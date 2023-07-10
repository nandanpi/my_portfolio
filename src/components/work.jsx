import React from "react";
import sb_image from "../assets/img/sb_image.jpg";
import {Link} from "react-router-dom";
import pomodorly_banner from "../assets/img/pomodorly_banner.jpg";
import staticnova from "../assets/img/staticnova_banner.png";
const Work = () => {
    return (
        <>
            <div className="w-full mt-10">
                <div className="space-y-3">
                    <div className="justify-center hidden md:flex ">
                        <div className="flex justify-center items-center mt-20">
                            <h1 className="
                        text-black dark:text-white inline-block text-8xl type2 space-x-1 border-r-[5px] border-r-black dark:border-r-white">
                                <span>Hey! I'm</span><span className=" text-orange-600 font-bold"> Nandan Pai.</span></h1>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-center text-3xl text-black dark:text-white font-bold  ">A Student and Web Developer.</p>
                    </div>
                    <div className="hidden justify-center items-center text-center font-bold text-gray-600 dark:text-white md:flex">
                        <p className="text-xl max-w-xl mb-10">Pursuing a B.Tech in AI&ML at NMAMIT | <Link to="/Resume" className="text-blue-500" target="_blank" rel="noreferrer">My Resume</Link></p>
                    </div>
                </div>
                <div className="mt-20">
                    <div>
                        <div className="justify-center flex md:hidden">
                            <div className="flex justify-center items-center mt-20">
                                <h1 className=" text-black dark:text-white inline-block text-4xl type2 space-x-1 border-r-[5px] border-r-black dark:border-r-white">
                                    <span>Hey! I'm</span><span className=" text-orange-600"> Nandan Pai.</span></h1>
                            </div>
                        </div>
                        <div className="block md:hidden">
                            <p className="text-center text-xl text-black dark:text-white font-bold  ">A Student and Web Developer.</p>
                        </div>
                        <div className=" justify-center items-center text-center font-bold text-gray-600 dark:text-white flex md:hidden m-3">
                            <p className="text-sm max-w-xl ">Pursuing a B.Tech in AI&ML at NMAMIT | <Link to="/Resume" className="text-blue-500" target="_blank" rel="noreferrer">My Resume</Link></p>
                        </div>
                    </div>
                    <div>
                        <hr className="w-48 h-1 mx-auto  bg-gray-300  border-0 rounded dark:bg-gray-800 my-20"></hr>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center"><p className="text-3xl text-black dark:text-white font-bold md:text-6xl" id="work">My Work</p></div>
            <div className="grid grid-cols-1 md:grid-cols-3 mx-12 mt-20 z-11">
                <a href="https://sahayata-bharath.vercel.app/" target="_blank" rel="noreferrer" className="bg-gray-400 dark:bg-gray-700 rounded-xl space-y-3 pb-3 hover:scale-110 duration-200 hover:shadow-xl scale-100 my-5 md:mx-5"><img src={sb_image} alt="project_preview" className="rounded-t-xl" />
                <p className="text-black dark:text-white p-2 space-x-2 justify-center items-center flex">
                    <span className="border-2 rounded-md  p-1">ReactJS</span>
                    <span className="border-2 rounded-md  p-1">TailwindCSS</span>
                </p>
                </a>
                <a href="https://pomodorly.vercel.app/" target="_blank" rel="noreferrer" className="bg-gray-400 dark:bg-gray-700 rounded-xl space-y-3 pb-3 hover:scale-110 duration-200 hover:shadow-xl scale-100 my-5 md:mx-5"><img src={pomodorly_banner} alt="project_preview" className="rounded-t-xl" />
                    <p className="text-black dark:text-white p-2 space-x-2 justify-center items-center flex">
                        <span className="border-2 rounded-md  p-1">ReactJS</span>
                        <span className="border-2 rounded-md  p-1">TailwindCSS</span>
                    </p>
                </a>
                <a href="https://staticnova.vercel.app/" target="_blank" rel="noreferrer" className="bg-gray-400 dark:bg-gray-700 rounded-xl space-y-3 pb-3 hover:scale-110 duration-200 hover:shadow-xl scale-100 my-5 md:mx-5"><img src={staticnova} alt="project_preview" className="rounded-t-xl" />
                    <p className="text-black dark:text-white p-2 space-x-2 justify-center items-center flex">
                        <span className="border-2 rounded-md  p-1">ReactJS</span>
                        <span className="border-2 rounded-md  p-1">TailwindCSS</span>
                    </p>
                </a>
            </div>
        </>
    );
}
export default Work;
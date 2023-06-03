import React from "react";
const Work = () => {
    return (
        <>
            <div className="space-y-3">
                <div className="justify-center hidden md:flex ">
                    <div className="flex justify-center items-center mt-20">
                        <h1 className="
                        text-black dark:text-white inline-block text-8xl type2 space-x-1 border-r-[5px] border-r-black dark:border-r-white">
                            <span>Hey. I'm</span><span className=" text-orange-600 font-bold"> Nandan Pai.</span></h1>
                    </div>
                </div>
                <div className="hidden md:block">
                    <p className="text-center text-3xl text-black dark:text-white font-bold  ">A Student and Web Developer.</p>
                </div>
                <div className="hidden justify-center items-center text-center font-bold text-gray-600 dark:text-white md:flex">
                    <p className="text-xl max-w-xl mb-10">Pursuing a B.Tech in AI&ML at NMAMIT | <a href="https://drive.google.com/file/d/12OX3JI-_dWm8LSoqs2CV-sXlUh1Q24Dh/view?usp=sharing" className="text-blue-500" target="_blank" rel="noreferrer">My Resume</a></p>
                </div>
            </div>
            <div>
                <div className="justify-center flex md:hidden">
                    <div className="flex justify-center items-center mt-20">
                        <h1 className=" text-black dark:text-white inline-block text-4xl type2 space-x-1 border-r-[5px] border-r-black dark:border-r-white">
                            <span>Hey. I'm</span><span className=" text-orange-600"> Nandan Pai.</span></h1>
                    </div>
                </div>
                <div className="block md:hidden">
                    <p className="text-center text-xl text-black dark:text-white font-bold  ">A Student and Web Developer.</p>
                </div>
                <div className=" justify-center items-center text-center font-bold text-gray-600 dark:text-white flex md:hidden m-3">
                    <p className="text-sm max-w-xl ">Pursuing a B.Tech in AI&ML at NMAMIT | <a href="https://drive.google.com/file/d/12OX3JI-_dWm8LSoqs2CV-sXlUh1Q24Dh/view?usp=sharing" className="text-blue-500" target="_blank" rel="noreferrer">My Resume</a></p>
                </div>
            </div>
            <div>
                <hr className="w-48 h-1 mx-auto  bg-gray-300  border-0 rounded dark:bg-gray-800 my-20"></hr>
            </div>
            <div className="flex justify-center items-center"><p className="text-3xl text-black dark:text-white font-bold md:text-6xl">My Work</p></div>
        </>
    );
}
export default Work;
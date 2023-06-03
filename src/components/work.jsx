import React from "react";
const Work = () => {
    return (
        <>
            <div className="justify-center hidden md:flex">
                <div className="flex justify-center items-center h-screen">
                        <h1 className=" text-black dark:text-white inline-block text-6xl type2 space-x-1">
                            <span>Hey. I'm</span><span className=" text-orange-600 text-6xl"> Nandan Pai.</span></h1>
                </div>
            </div>
            <div className="justify-center flex md:hidden">
                <div className="flex justify-center items-center h-screen">
                    <h1 className=" text-black dark:text-white inline-block text-3xl type2 space-x-1">
                        <span>Hey. I'm</span><span className=" text-orange-600 text-3xl"> Nandan Pai.</span></h1>
                </div>
            </div>
        </>
    );
}
export default Work;
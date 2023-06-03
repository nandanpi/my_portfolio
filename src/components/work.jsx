import React from "react";
const Work = () => {
    return (
        <>
            <div>
                <div className="justify-center hidden md:flex">
                    <div className="flex justify-center items-center mt-20">
                        <h1 className=" text-black dark:text-white inline-block text-6xl type2 space-x-1 ">
                            <span>Hey. I'm</span><span className=" text-orange-600 font-bold"> Nandan Pai.</span></h1>
                    </div>
                </div>
                <div>
                    <p className="text-center text-2xl text-black dark:text-white   ">Student and Web Developer.</p>
                </div>
            </div>
            <div>
                <div className="justify-center flex md:hidden">
                    <div className="flex justify-center items-center mt-20">
                        <h1 className=" text-black dark:text-white inline-block text-4xl type2 space-x-1">
                            <span>Hey. I'm</span><span className=" text-orange-600"> Nandan Pai.</span></h1>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Work;
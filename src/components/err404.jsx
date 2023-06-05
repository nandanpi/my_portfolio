import React from "react";
import cat_gif from "../assets/gifs/404_cat.gif";

const Err404 = () => {
    return (
        <>
        <div>
            <div className="flex justify-center items-center">
                <img src={cat_gif} alt="Oh!no" className="rounded-xl mt-20"/>
            </div>
            <div className="text-center space-y-3 text-black dark:text-white">
                    <h1 className="text-3xl md:text-6xl">Oops! 404</h1>
                    <p className="text-xl md:text-4xl">Looks like you took a wrong turn, let's get you back on track shall we?</p>
                    <button className="p-3 rounded-xl bg-orange-600 text-black font-bold "><a href="/">Go to Home</a></button>
            </div>
        </div>
        </>
    )
}
export default Err404;
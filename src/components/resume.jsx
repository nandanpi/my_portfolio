import React from 'react';
import resume from '../assets/img/Resume.jpg';
import resume_pdf from '../assets/Resume.pdf';
const Resume = () => {
    return (
        <>
            <div className=" h-[550px] md:h-[1000px] mt-5 mb-20 items-start ">
                <img src={resume} alt="Resume" className="rounded-xl scale-75 md:scale-50 md:translate-y-[-25%]" id="resume"/>
            </div>
            <div className="flex justify-center items-center p-4 translate-y-[-150%] md:translate-y-0">
                <button className="p-3 rounded-xl bg-orange-600 text-black font-bold">
                    <a href={resume_pdf} download={true}>Download my Resume</a>
                </button>
            </div>
        </>
    )
}
export default Resume;
import React from "react";
const Timeline = () => {
    return (
        <>
            <div>
                <p className="text-black dark:text-white text-2xl font-bold">Timeline</p>
            </div>
            <div className="flex justify-center p-8">
                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                    <li className="mb-10 ml-4">
                        <div
                            className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2023 - Present
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">B.Tech in AI&ML</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">NMAM Institute of Technology , Nitte University</p>
                    </li>
                    <li className="ml-4">
                        <div
                            className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2022
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Grade 12</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Sri Venkatramana PU College</p>
                    </li>
                </ol>

            </div>
        </>
    );
}
export default Timeline;
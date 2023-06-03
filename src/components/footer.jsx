import React from "react";
import {GrGithub,GrInstagram,GrLinkedinOption} from "react-icons/gr";


const Footer = () => {
    return (
        <>
            <div>
                    <div>
                        <ul className="flex justify-center space-x-6">
                            <li className="bg-gray-300 dark:bg-gray-800 rounded-3xl p-2"><GrLinkedinOption size={25}/></li>
                            <li className="bg-gray-300 dark:bg-gray-800 rounded-3xl p-2"><GrGithub size={25}/></li>
                            <li className="bg-gray-300 dark:bg-gray-800 rounded-3xl p-2"><GrInstagram size={25}/></li>
                        </ul>
                    </div>
                    <p className="text-center p-3 text-gray-400 dark:text-gray-700">© 2023 Nandan R Pai. All Rights Reserved.</p>
            </div>
        </>
    )
}

export default Footer;
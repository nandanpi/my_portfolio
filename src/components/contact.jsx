import React from "react";
const Contact = () => {
    return (
        <>
        <div className="flex justify-center mt-20 mx-auto w-7/12 md:max-w-4xl">
            <form action="https://getform.io/f/f57e8d00-2912-4a86-ac0a-82092cb72a80" method="POST" className="flex flex-col w-full md:w-7/12">
                <div className="space-y-3">
                    <div>
                        <p className="text-black dark:text-white text-2xl font-bold ">Contact</p>
                    </div>
                    <div>
                        <input type="text" name="name" placeholder="Name" className="p-2 bg-transparent border-2 focus:outline-none rounded-md text-black dark:text-white w-full"/>
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="Email" className="p-2 bg-transparent border-2 focus:outline-none rounded-md text-black dark:text-white w-full"/>
                    </div>
                    <div>
                        <textarea name="message" placeholder="Your message" rows="10"
                                  className="w-full p-2  bg-transparent border-2 focus:outline-none resize-none rounded-md text-black dark:text-white"></textarea>
                    </div>
                    <button type="submit" className="px-2 py-1 bg-black text-white dark:bg-white dark:text-black rounded-md">Work With Me</button>
                </div>
            </form>
        </div>
        </>
    );
}
export default Contact;
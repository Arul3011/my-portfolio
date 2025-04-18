import React from 'react';

const Contact = () => {
    return (
        <div className="bg-black text-white min-h-[100%] flex flex-col justify-center items-center font-sans p-6">
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-lg mb-4 text-center max-w-md">
                I'd love to hear from you! Whether you have a question or just want to say hi, feel free to drop me a message.
            </p>
            <a
                href="mailto:yarul8406@gmaail.com"
                className="text-lg text-blue-400 bg-gray-800 px-4 py-2 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
                yarul8406@gmail.com
            </a>
        </div>
    );
};

export default Contact;

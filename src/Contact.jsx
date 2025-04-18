import React from 'react';
import Footer from './Fotter';

const Contact = () => {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col justify-between font-sans p-6">
            <div className="flex flex-col justify-center items-center flex-grow">
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
            <Footer />
        </div>
    );
};

export default Contact;

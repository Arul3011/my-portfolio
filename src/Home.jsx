import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className=" w-full flex justify-around items-center flex-col bg-black orbitron-font ">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap');

          .orbitron-font {y
            font-family: 'Orbitron', sans-serif;
          }
        `}
      </style>

      {/* Left - About */}
      <div className="px-6 md:px-10 w-full md:w-1/2 text-white text-center md:text-center"  data-aos="fade-right">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          About<span className="text-cyan-400">.</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 drop-shadow-md leading-relaxed">
          I'm a passionate web developer skilled in creating dynamic, user-friendly applications with React, Next.js, and MongoDB. I specialize in building responsive web solutions that deliver seamless user experiences.
        </p>
      </div>

      {/* Right - Expertise */}
      <div className="px-5 md:px-10 w-full md:w-1/2 text-white text-center md:text-center " data-aos="fade-left">
        <h2 className="text-2xl md:text-4xl font-semibold drop-shadow-md">
          Expertise<span className="text-cyan-400">_</span>
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-400 drop-shadow-sm">
          Full-stack development with an eye for detail.
        </p>
        
        <div className="mt-6 grid grid-cols-2 gap-4 text-center">
          {['Javascript','Java','React.js', 'Node.js', 'Next.js', 'TailwindCSS','Express','Linux',].map((skill, i) => (
            <div key={i} className="p-2">
              <span className="text-cyan-400 font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

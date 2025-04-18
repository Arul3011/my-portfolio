import Spline from '@splinetool/react-spline';
import { useEffect, useState } from 'react';
import { FaLinkedin ,FaGithub} from "react-icons/fa";


export default function RoboLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle scroll parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* Font style */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap');

          .orbitron-font {
            font-family: 'Orbitron', sans-serif;
            font-weight: 400;
            font-style: normal;
          }

          @keyframes pulse-glow {
            0%, 100% { text-shadow: 0 0 10px rgba(34, 211, 238, 0.3), 0 0 20px rgba(34, 211, 238, 0.2); }
            50% { text-shadow: 0 0 15px rgba(34, 211, 238, 0.5), 0 0 30px rgba(34, 211, 238, 0.3); }
          }

          @keyframes flicker {
            0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% { opacity: 1; }
            20%, 21.999%, 63%, 63.999%, 65%, 69.999% { opacity: 0.33; }
          }

          .cyber-grid {
            background-image: 
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
            background-size: 40px 40px;
            background-position: -1px -1px;
          }

          .text-glow {
            animation: pulse-glow 4s infinite;
          }

          .text-flicker {
            animation: flicker 5s linear infinite;
          }
        `}
      </style>

      {/* Background grid effect */}
      <div className="absolute inset-0 z-0 cyber-grid opacity-20"></div>

      {/* Loading overlay - disappears after loading */}
      <div 
        className={`absolute inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-1000 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <div className="text-center orbitron-font">
          <div className="text-cyan-400 text-2xl mb-4 text-flicker">SYSTEM LOADING</div>
          <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-700"
              style={{ width: isLoaded ? '100%' : '30%' }}
            ></div>
          </div>
        </div>
      </div>

      {/* Left Side Text with enhanced styling */}
      <div 
        className="absolute z-20 top-60 left-0 -translate-y-1/2 px-6 md:px-10 w-full md:w-auto text-white text-center md:text-left orbitron-font"
        style={{ transform: `translateY(calc(-50% + ${scrollY * 0.05}px))` }}
      >
        <div className="relative inline-block">
          <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-cyan-400 opacity-80">{'>'}</span>
          <h1 className="text-4xl md:text-6xl font-bold text-glow">
            Hey there 
          </h1>
        </div>
        <div className="flex mt-2 items-center space-x-3 mb-4">
          <div className="h-1 w-8 bg-cyan-400"></div>
          <div className="h-1 w-3 bg-cyan-400"></div>
          <div className="h-1 w-1 bg-cyan-400"></div>
        </div>
        <p className="mt-4 text-lg md:text-xl text-gray-300 drop-shadow-md pl-4 border-l-2 border-cyan-400">
          Welcome to my digital space.
        </p>
        
        {/* Cool animated button */}
        <div className="mt-8">
          <button className="group relative px-6 py-3 overflow-hidden orbitron-font bg-transparent border border-cyan-400 text-cyan-400 hover:text-black transition-colors duration-300">
            <span className="absolute inset-0 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            <span className="relative"><a href="https://drive.google.com/file/d/1b9JNCcgde23kxvZG9dXSjNh5yWyYTB_P/view" target='_blank'>View CV</a></span>
          </button>
        </div>
      </div>

      {/* Right Side Text with enhanced styling */}
      <div 
        className="absolute z-20 top-140 right-0 -translate-y-1/2 px-6 md:px-10 w-full md:w-auto text-white text-center md:text-right orbitron-font"
        style={{ transform: `translateY(calc(-50% - ${scrollY * 0.03}px))` }}
      >
        <div className="relative inline-block">
          <h2 className="text-2xl md:text-4xl font-semibold drop-shadow-md">
            I'm Arul <span className="text-cyan-400 text-glow">—</span> Full-Stack Web Developer
          </h2>
        </div>
        <div className="flex mt-2 items-center space-x-3 mb-4 justify-end">
          <div className="h-1 w-1 bg-cyan-400"></div>
          <div className="h-1 w-3 bg-cyan-400"></div>
          <div className="h-1 w-8 bg-cyan-400"></div>
        </div>
        <p className="mt-4 text-base md:text-lg text-gray-400 drop-shadow-sm pr-4 border-r-2 border-cyan-400">
          I build beautiful frontends and powerful backends.
        </p>
        
        {/* Skills badges */}
        <div className="mt-6 flex flex-wrap justify-end gap-2">
          {[{"tag" : <FaLinkedin />,"url" : "https://in.linkedin.com/in/arul-y-558491270"}, {"tag" : <FaGithub />,"url" : "https://github.com/Arul3011"} ].map((skill, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-3xl bg-black rounded-full  text-cyan-400"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <a href={skill.url}>
              {skill.tag}
              </a>
            </span>
          ))}
        </div>
      </div>

      {/* Spline 3D Object with parallax effect */}
      <div 
        className="absolute inset-0 z-10 w-full h-full"
        style={{ transform: `scale(${1 + scrollY * 0.0005}) translateY(${scrollY * 0.02}px)` }}
      >
        <Spline
          scene="https://prod.spline.design/lNL8Gh3UizEEJwt1/scene.splinecode"
          className="w-full h-full"
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 z-5 bg-gradient-to-b from-black/10 via-transparent to-black/80 pointer-events-none"></div>
      
      {/* Animated corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-400 z-30 opacity-80"></div>
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-400 z-30 opacity-80"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-cyan-400 z-30 opacity-80"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-400 z-30 opacity-80"></div>
    </main>
  );
}

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-blue-600 text-white pt-20 pb-6 overflow-hidden">
      {/* Animated Waves */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 z-0">
        <div className="relative w-[200%] h-24 animate-wave">
          <svg
            className="absolute w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#000000"
              fillOpacity="1"
              d="M0,64L30,74.7C60,85,120,107,180,117.3C240,128,300,128,360,112C420,96,480,64,540,64C600,64,660,96,720,122.7C780,149,840,171,900,170.7C960,171,1020,149,1080,138.7C1140,128,1200,128,1260,117.3C1320,107,1380,85,1410,74.7L1440,64V320H0Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <FaFacebookF className="hover:text-blue-300 cursor-pointer text-2xl" />
          <FaTwitter className="hover:text-blue-300 cursor-pointer text-2xl" />
          <FaLinkedinIn className="hover:text-blue-300 cursor-pointer text-2xl" />
          <FaInstagram className="hover:text-blue-300 cursor-pointer text-2xl" />
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 text-sm mb-4">
          <a href="#" className="hover:text-blue-200">Home</a>
          <a href="#" className="hover:text-blue-200">About</a>
          <a href="#" className="hover:text-blue-200">Services</a>
          <a href="#" className="hover:text-blue-200">Team</a>
          <a href="#" className="hover:text-blue-200">Contact</a>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs">
          ©2024 Nadine Coelho All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

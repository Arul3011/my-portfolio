// src/components/BottomNavbar.tsx

export default function Nav() {
    return (
        <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-full px-6 py-3 flex gap-6 justify-center items-center">
        <a href="#" className="text-white hover:text-cyan-400 transition-colors text-sm font-medium">
          Home
        </a>
        <a href="#about" className="text-white hover:text-cyan-400 transition-colors text-sm font-medium">
          About
        </a>
        <a href="#projects" className="text-white hover:text-cyan-400 transition-colors text-sm font-medium">
          Projects
        </a>
        <a href="#contact" className="text-white hover:text-cyan-400 transition-colors text-sm font-medium">
          Contact
        </a>
      </nav>
    )
  }
  
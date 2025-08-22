import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

// Navigation links component
function Navigation({ onLinkClick, isMobile = false }) {
  return (
    <ul className={`flex ${isMobile ? 'flex-col items-start space-y-8 w-full' : 'flex-col sm:flex-row items-center gap-8 sm:gap-6'}`}>
      <li className={isMobile ? 'w-full' : ''}>
        <a 
          className={`nav-link ${isMobile ? 'text-2xl font-medium w-full text-left' : ''}`} 
          href="#home" 
          onClick={onLinkClick}
        >
          Home
        </a>
      </li>
      <li className={isMobile ? 'w-full' : ''}>
        <a 
          className={`nav-link ${isMobile ? 'text-2xl font-medium w-full text-left' : ''}`} 
          href="#about" 
          onClick={onLinkClick}
        >
          About
        </a>
      </li>
      <li className={isMobile ? 'w-full' : ''}>
        <a 
          className={`nav-link ${isMobile ? 'text-2xl font-medium w-full text-left' : ''}`} 
          href="#work" 
          onClick={onLinkClick}
        >
          Work
        </a>
      </li>
      <li className={isMobile ? 'w-full' : ''}>
        <a 
          className={`nav-link ${isMobile ? 'text-2xl font-medium w-full text-left' : ''}`} 
          href="#contact" 
          onClick={onLinkClick}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on link click (mobile)
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-30 w-full bg-gradient-to-b from-neutral-900/80 to-transparent backdrop-blur-md shadow-lg">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-3">
          <a
            href="/"
            className="text-2xl font-extrabold tracking-tight text-white transition-colors hover:text-indigo-400"
            aria-label="Home"
          >
            Rahul
          </a>
          {/* Hamburger/Close button for mobile */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="sm:hidden flex items-center justify-center rounded-full p-2 transition-colors bg-neutral-800/60 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 z-50"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            type="button"
          >
            {isOpen ? (
              <FaTimes className="w-5 h-5 text-white" />
            ) : (
              <FaBars className="w-5 h-5 text-white" />
            )}
          </button>
          <nav className="hidden sm:flex items-center">
            <Navigation />
          </nav>
        </div>
      </div>
      {/* Mobile menu overlay */}
      <motion.div
        className={`sm:hidden fixed inset-0 z-40 bg-neutral-900/95 backdrop-blur-lg transition-all duration-300 ${
          isOpen ? "flex" : "hidden"
        }`}
        initial={false}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ minHeight: "100vh" }}
      >
        <div className="flex flex-col items-start justify-start h-full pt-24 px-36">
          <nav className="w-full">
            <Navigation onLinkClick={handleLinkClick} isMobile={true} />
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;

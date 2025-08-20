import { useState } from "react";
import { motion } from "motion/react";
function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">
          About
        </a>
      </li>

      <li className="nav-li">
        <a className="nav-link" href="#work">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="sm:hidden flex items-center justify-center rounded-full p-2 transition-colors bg-neutral-800/60 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-7 h-7"
              alt={isOpen ? "Close menu" : "Open menu"}
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      <motion.div
        className={`sm:hidden fixed inset-x-0 top-0 z-40 bg-neutral-900/95 backdrop-blur-lg transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
        initial={false}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ minHeight: "100vh" }}
      >
        <div className="flex flex-col items-center justify-center h-full pt-24">
          <nav>
            <Navigation />
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;

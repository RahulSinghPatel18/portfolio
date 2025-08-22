import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";
import { FaDownload } from "react-icons/fa6";

const RESUME_URL = "/assets/projects/rahul-resume.pdf"; // Resume file path

const DownloadResumeButton = () => (
  <div className="flex flex-col md:flex-row items-center gap-4">
    <a
      href={RESUME_URL}
      download
      className="inline-flex text-sm items-center gap-2 px-5 py-3 rounded-full bg-black border border-gray-400 text-white shadow-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      aria-label=" Resume"
    >
      <FaDownload className="w-5 h-5" />
Resume
    </a>
  </div>
);

const About = () => {
  const grid2Container = useRef(null);

  return (
    <section className="section-spacing px-4 sm:px-6 lg:px-8" id="about">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-heading">About Me</h2>
        <DownloadResumeButton />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1 relative overflow-hidden">
          <img
            src="assets/coding-pov.png"
            alt="Coding POV"
            className="absolute scale-[1.2] sm:scale-[1.5] -right-[2rem] sm:-right-[3rem] -top-[0.5rem] md:scale-[2.5] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Rahul Singh Patel</p>
            <p className="subtext">
              Over the last 4 years, I have developed my frontend and backend skills to deliver dynamic software and web applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo-500" />
        </div>
        
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full relative"
          >
            <p className="flex items-end text-2xl sm:text-3xl md:text-5xl text-gray-500 font-bold tracking-tight select-none text-center">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              containerRef={grid2Container}
            />
            
            {/* Modern SVGs for frontend tech */}
            <div
              style={{
                position: "absolute",
                top: "70%",
                left: "70%",
                transform: "rotate(30deg)",
              }}
              className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-700 rounded-full shadow-lg ring-2 ring-blue-300"
            >
              {/* React SVG */}
              <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6 sm:w-9 sm:h-9" aria-label="React">
                <circle cx="24" cy="24" r="22" fill="#222" />
                <g>
                  <ellipse cx="24" cy="24" rx="10" ry="4.5" stroke="#61DAFB" strokeWidth="2" fill="none"/>
                  <ellipse cx="24" cy="24" rx="4.5" ry="10" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(60 24 24)"/>
                  <ellipse cx="24" cy="24" rx="4.5" ry="10" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(120 24 24)"/>
                  <circle cx="24" cy="24" r="2.5" fill="#61DAFB"/>
                </g>
              </svg>
            </div>
            
            <div
              style={{
                position: "absolute",
                top: "70%",
                left: "25%",
                transform: "rotate(-45deg)",
              }}
              className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 rounded-full shadow-lg ring-2 ring-yellow-200"
            >
              {/* JavaScript SVG */}
              <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6 sm:w-9 sm:h-9" aria-label="JavaScript">
                <rect x="2" y="2" width="44" height="44" rx="10" fill="#F7DF1E"/>
                <text x="50%" y="60%" textAnchor="middle" fill="#222" fontSize="18" fontWeight="bold" fontFamily="Arial">JS</text>
              </svg>
            </div>
            
            {/* Material UI SVG */}
            <div
              style={{
                position: "absolute",
                top: "5%",
                left: "10%",
                transform: "rotate(-45deg)",
              }}
              className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center bg-gradient-to-br from-blue-400 via-blue-600 to-indigo-700 rounded-full shadow-lg ring-2 ring-blue-200"
            >
              <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6 sm:w-9 sm:h-9" aria-label="Material UI">
                <g>
                  <rect width="48" height="48" rx="12" fill="#fff" />
                  <path d="M8 12.5V35.5L24 44V39.5L12 33.5V15.5L8 12.5Z" fill="#1976D2"/>
                  <path d="M40 12.5V35.5L24 44V39.5L36 33.5V15.5L40 12.5Z" fill="#1976D2"/>
                  <path d="M24 4L40 12.5L24 21L8 12.5L24 4Z" fill="#2196F3"/>
                  <path d="M24 21V44" stroke="#1976D2" strokeWidth="2"/>
                </g>
              </svg>
            </div>
            
            {/* Framer Motion SVG */}
            <div
              style={{
                position: "absolute",
                top: "10%",
                left: "38%",
                transform: "rotate(20deg)",
              }}
              className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500 rounded-full shadow-lg ring-2 ring-fuchsia-200"
            >
              <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6 sm:w-9 sm:h-9" aria-label="Framer Motion">
                <g>
                  <rect width="48" height="48" rx="12" fill="#fff" />
                  <polygon points="12,6 36,6 36,18 24,18 24,30 36,30 36,42 12,42 12,30 24,30 24,18 12,18" fill="#A259FF"/>
                </g>
              </svg>
            </div>
            
            {/* GSAP SVG */}
            <div
              style={{
                position: "absolute",
                top: "60%",
                left: "45%",
                transform: "rotate(-30deg)",
              }}
              className="w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center bg-gradient-to-br from-green-400 via-green-600 to-lime-500 rounded-full shadow-lg ring-2 ring-green-200"
            >
              <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6 sm:w-9 sm:h-9" aria-label="GSAP">
                <g>
                  <rect width="48" height="48" rx="12" fill="#fff" />
                  <path d="M24 8L40 40H8L24 8Z" fill="#88CE02"/>
                  <text x="24" y="34" textAnchor="middle" fill="#222" fontSize="12" fontWeight="bold" fontFamily="Arial">GSAP</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Grid 3 */}
        <div className="grid-black-color grid-3 relative">
          <div className="z-10 w-full md:w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in India, and open to remote work worldwide.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%] w-20 h-20 sm:w-32 sm:h-32 md:w-auto md:h-auto">
            <Globe />
          </figure>
        </div>
        
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full p-4">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
            <DownloadResumeButton />
          </div>
        </div>
        
        {/* Grid 5 */}
        <div className="grid-default-color grid-5 relative">
          <div className="z-10 w-full md:w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

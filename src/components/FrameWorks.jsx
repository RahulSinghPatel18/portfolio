import { OrbitingCircles } from "./OrbitingCircles";

const skills = [
  "html5",
  "css3",
  "javascript",
  "c",
  "java",
  "git",
  "github",
  "visualstudiocode",
  "mysql",
  "mongodb",
  "nodejs",
  "express",
  "react",
  "nextjs",
  "threejs",
  "tailwindcss",
  "vitejs",
  "docker",
  "postman"
];

export function Frameworks() {
  // Modern glassmorphism + subtle glow + smooth hover
  return (
    <div className="relative flex h-[18rem] w-full flex-col items-center justify-center">
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-indigo-900/40 via-purple-900/20 to-blue-900/30 blur-xl rounded-3xl" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <OrbitingCircles iconSize={44} radius={120} speed={1.2}>
          {skills.map((skill) => (
            <Icon key={skill} src={`assets/logos/${skill}.svg`} alt={skill} />
          ))}
        </OrbitingCircles>
        <OrbitingCircles iconSize={28} radius={70} reverse speed={2.2}>
          {skills
            .slice()
            .reverse()
            .map((skill) => (
              <Icon key={skill + "-inner"} src={`assets/logos/${skill}.svg`} alt={skill} />
            ))}
        </OrbitingCircles>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-lg text-xs text-white font-semibold tracking-wide select-none">
          My Tech Stack
        </div>
      </div>
    </div>
  );
}

// Modern icon with glass effect and glow on hover
const Icon = ({ src, alt }) => (
  <div className="group transition-all duration-300 rounded-xl p-1 bg-white/10 backdrop-blur-md shadow-md hover:shadow-indigo-400/40 hover:scale-110 hover:bg-indigo-400/20 border border-white/10">
    <img
      src={src}
      alt={alt}
      className="w-8 h-8 object-contain transition-all duration-300 drop-shadow-[0_2px_8px_rgba(99,102,241,0.15)]"
      loading="lazy"
      draggable={false}
    />
  </div>
);

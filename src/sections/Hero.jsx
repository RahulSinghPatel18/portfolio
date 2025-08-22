import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  return (
    <section className="relative flex flex-col items-center justify-start min-h-screen w-full overflow-hidden">
      {/* Hero Text - Positioned absolutely for proper layering */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <HeroText />
      </div>
      
      {/* Background Elements */}
      <ParallaxBackground />
      
      {/* 3D Canvas - Full viewport */}
      <div className="absolute inset-0 w-full h-full">
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile ? 0.2 : 0.3}
                position={isMobile ? [0, -1.5, 0] : [0, -1, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;

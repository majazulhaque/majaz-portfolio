import { Leva } from "leva";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";
import Cube from "../components/Cube.tsx";
import Rings from "../components/Rings.tsx";
import ReactLogo from "../components/ReactLogo.tsx";
import Button from "../components/Button.tsx";
import Target from "../components/Target.tsx";
import CanvasLoader from "../components/CanvasLoader.tsx";
import HeroCamera from "../components/HeroCamera.tsx";
import { calculateSizes } from "../constants/index.ts";
import HackerRoom from "../components/HackerRoom.tsx";

// Type definition for the size object returned by calculateSizes
interface Sizes {
  deskScale: [number, number, number];
  deskPosition: [number, number, number];
  targetPosition: [number, number, number];
  reactLogoPosition: [number, number, number];
  ringPosition: [number, number, number];
  cubePosition: [number, number, number];
}

const Hero: React.FC = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes: Sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section
      className="min-h-screen w-full flex flex-col relative"
      id="home"
    >
      <img
        src="/assets/hero-star.png"
        alt="hero-star"
        className="absolute inset-0 top-0 left-0 right-0 z-[-1] mx-0"
        style={{width:"100%", height:"100vh", objectFit:"cover"}}
      />
      <img
        src="/assets/hero-circle.png"
        alt="hero-circle"
        className=" absolute inset-0 top-0 left-[50%] right-auto z-[-1] mx-0"
        style={{width:"auto", height:"90vh", objectFit:"cover",transform:"translateX(-50%)"}}
      />
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Majaz <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const layer1Y = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
  const layer2Y = useTransform(scrollYProgress, [0,1], ["0", "200%"]);
  const layer3Y = useTransform(scrollYProgress, [0,1], ["0", "150%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/assets/ss2-game-page/ss2-hero-bg-layer1.png)",
          y: layer1Y,
        }}
      ></motion.div>
      <motion.div
        className="absolute inset-0 z-10 bg-cover bg-center md:bg-contain bg-no-repeat"
        style={{
          backgroundImage: "url(/assets/ss2-game-page/ss2-hero-bg-layer2.png)",
          y: layer2Y,
        }}
      ></motion.div>
      <motion.div
        className="absolute inset-0 z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/assets/ss2-game-page/ss2-hero-bg-layer3.png)",
          y: layer3Y,
        }}
      ></motion.div>
      <motion.div
        className="absolute inset-0 z-30 bg-cover bg-center"
        style={{
          backgroundImage: "url(/assets/ss2-game-page/ss2-hero-bg-layer4.png)",
        }}
      ></motion.div>
    </div>
  );
};

export default ParallaxSection;

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
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/assets/ss2-game-page/ss2-hero-bg-layer1.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: layer1Y,
        }}
      ></motion.div>
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: "url(/assets/ss2-game-page/ss2-hero-bg-layer2.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: layer2Y,
        }}
      ></motion.div>
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: "url(/assets/ss2-game-page/ss2-hero-bg-layer3.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: layer3Y,
        }}
      ></motion.div>
      <motion.div
        className="absolute inset-0 z-30"
        style={{
          backgroundImage: "url(/assets/ss2-game-page/ss2-hero-bg-layer4.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      ></motion.div>
    </div>
  );
};

export default ParallaxSection;
import React from "react";

import Image from "next/image";
import Colors from "../../public/assets/colors.jpg";

import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <div className="w-full min-h-[768px] flex flex-col items-center justify-center">
      <div className="flex md:flex-row flex-col items-center justify-between w-full max-w-6xl mx-auto">
        <h1 className="heading flex flex-col items-start justify-center gap-1">
          <motion.span
            initial={{ opacity: 0, y: "12px" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.25 }}
            className="block"
          >
            DigiVision is a UI/UX design
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: "12px" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.3 }}
            className="block"
          >
            and web development agency
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: "12px" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut", delay: 0.35 }}
            className="block"
          >
            in Northern Virginia.
          </motion.span>
        </h1>
        <div className="w-64 h-64">
          <Image src={Colors} alt="Hero Image" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

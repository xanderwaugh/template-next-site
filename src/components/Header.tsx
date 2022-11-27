import React from "react";

import Link from "next/link";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center overflow-x-hidden">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <h1>
          <Link href="/" className="text-2xl font-bold">
            DigiVision
          </Link>
        </h1>
      </motion.div>

      <Link href="/contact/">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center"
        >
          <p className="uppercase hidden md:inline-flex text-sm text-gray-200">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
};

export { Header };

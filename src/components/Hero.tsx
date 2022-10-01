import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import Image from "next/image";
import Link from "next/link";

import ProfileImage from "../../public/assets/colors.jpg";

export const Hero: React.FC = () => {
  const [text] = useTypewriter({
    words: ["Hello, I'm Xander.", "I'm a Full Stack Developer."],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <div className="relative w-32 h-32 mx-auto">
        <Image
          src={ProfileImage}
          alt="Xander"
          className="rounded-full object-cover"
        />
      </div>

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>

      <div className="pt-5 z-20">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>

        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>

        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>

        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  );
};

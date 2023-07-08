import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Code Lover.", "Full Stack Developer.", "Student Exploring."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex order-last lg:order-first flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal mb-0">Hey There Welcome</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Shabeer</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="white"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        A self-motivated developer, driven by a deep passion for coding, <br /> constantly seeking new opportunities to grow, learn, and create <br /> impactful solutions  that push the boundaries of technology and inspire others.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner
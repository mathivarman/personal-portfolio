import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Frontend Developer.", "UI Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Hi, I'm <br />
          <span className="text-designColor capitalize block text-3xl md:text-6xl">
            Mathivarman
          </span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-sm md:text-base font-bodyFont leading-6 tracking-wide">
          "Front-End Developer and UI Designer creating visually appealing, user-friendly interfaces. 
          Combining technical expertise with creative design for seamless digital experiences."
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;

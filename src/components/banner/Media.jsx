import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaJs } from "react-icons/fa";
import { SiFigma } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      {/* Social Media Section */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://web.facebook.com/profile.php?id=100077178456958" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaFacebookF />
          </a>
          {/* <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaTwitter />
          </a> */}
          <a href="https://www.linkedin.com/in/mathivarman04/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      
      {/* Skills Section */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">BEST SKILL ON</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact /> {/* React Icon */}
          </span>
          <span className="bannerIcon">
            <SiFigma /> {/* Figma Icon */}
          </span>
          <span className="bannerIcon">
            <FaJs /> {/* JavaScript Icon */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;

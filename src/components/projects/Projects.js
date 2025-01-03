import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree ,projectFour ,bakshanam} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <ProjectsCard
          title="Bhakshanam - full-stack web application "
          des="Bhakshanam is a platform connecting homemakers with customers to sell authentic, homemade food."
          src={bakshanam}
          link="https://github.com/mathivarman/bhakshanam.git"
        />
        <ProjectsCard
          title="Pet Seller Website"
          des="A pet sellers' website connects buyers with pets and supplies, offering easy navigation and detailed listings."
          src={projectOne}
          link="https://github.com/mathivarman/PetSeller.git"
        />
        <ProjectsCard
          title="Foode app - UI"
          des="A food app that simplifies ordering and delivers delicious meals right to your doorstep."
          src={projectTwo}
          link="https://www.figma.com/design/h6RcBozvBXbrNp8n5r50ZI/foodee?node-id=0-1&t=68qu4B1pH9ziqr49-1"
        />
        <ProjectsCard
          title="Art gallery Website"
          des="An Art Gallery website showcases, explores, and sells artwork online."
          src={projectFour}
          link="https://github.com/mathivarman/Art-gallery.git"
        />
      </div>
    </section>
  );
};

export default Projects;

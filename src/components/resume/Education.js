import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Information and Communication Technology"
            subTitle="university of sri jayewardenepura"
            result="4 years"
            
          />
          <ResumeCard
            title="Full stack web development"
            subTitle="Uki coding school - Jaffna"
            result="6 months"
            
          />
           {/* <ResumeCard
            title="Full stack web development"
            subTitle="Uki coding school - Jaffna"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          /> */}
          <ResumeCard
            title="Secondary School Education"
            subTitle="Hartley College"
            result="8 years"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Internship"
            subTitle="Yarl IT Hub - Jaffna"
            result="Jaffna"
            />
          <ResumeCard
            title="Web Design"
            des="Creative web designer crafting user-friendly and visually stunning digital experiences."
          />
          <ResumeCard
            title="UI/UX design"
            // result="Oman"
            des="Crafting intuitive and visually engaging user experiences with a passion for seamless design."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education
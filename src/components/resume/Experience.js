import React from "react";
import { motion } from "framer-motion"
import ResumeCard from "./ResumeCard";
import Title from '../layouts/Title';
import lakdas from '../../assets/images/lakdas.png';
import annes from '../../assets/images/annes.png';
import wis from '../../assets/images/wis.jpg';
import sliit from '../../assets/images/sliit.jpg';
import foody from '../../assets/images/foodyvibe.jpg';
import travel from '../../assets/images/travel.jpg';
import photograpy from '../../assets/images/photograpy.jpg';

const Experience = () => {
  return (
    <section id="about">
      <div className="text-center md:pt-20" >
        <Title title="WHAT CLIENTS SAY" des="More About Me" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="py-1 font-titleFont flex flex-col gap-10 md:flex-row md:gap-20"
      >
        <div>

          <div className="flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
            <h2 className="text-4xl font-bold">Education</h2>
          </div>
          <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              url={wis}
              title="Wayamba International"
              subTitle="Google Out Tech - (2017 - Present)"
              result="Kurunegala"
              des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
            />
            <ResumeCard
              url={lakdas}
              title="Lakdas De Mel"
              subTitle="Apple Developer Team - (2012 - 2016)"
              result="Kurunegala"
              des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
            />
            <ResumeCard
              url={annes}
              title="St Annes College"
              subTitle="Nike - (2020 - 2011)"
              result="Kurunegala"
              des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
            />
            <ResumeCard
              url={sliit}
              title="SLIIT"
              subTitle="Nike - (2020 - 2011)"
              result="Malabe"
              des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2001 - Present</p>
            <h2 className="text-4xl font-bold">Interests And Likes</h2>
          </div>
          <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              url={photograpy}
              title="Photography"
              subTitle="Job To Be Intern(2023 - present)"
              result="N/A"
              des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
            />
            <ResumeCard
              url={travel}
              title="Travelling"
              subTitle="Job To Be Intern(2023 - present)"
              result="N/A"
              des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
            />
            <ResumeCard
              url={foody}
              title="Foody Vibes"
              subTitle="Job To Be Intern(2023 - present)"
              result="N/A"
              des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
            />
            
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;

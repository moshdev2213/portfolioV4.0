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
            <p className="text-sm text-designColor tracking-[4px]">2004 - Present</p>
            <h2 className="text-4xl font-bold">Education</h2>
          </div>
          <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              url={wis}
              title="Wayamba International"
              subTitle="Primary Education - (2004 - 2015)"
              result="Kurunegala"
              des="Wayamba International School is a prestigious Educational Institute including well qualified Teacher."
            />
            <ResumeCard
              url={lakdas}
              title="Lakdas De Mel"
              subTitle="Ordinary Level - (2015 - 2018)"
              result="Kurunegala"
              des="A popular school with a growing number of highly qualified Students Situtaed In the Heart Of Kurunegala"
            />
            <ResumeCard
              url={annes}
              title="St Annes College"
              subTitle="Advanced Level - (2018 - 2020)"
              result="Kurunegala"
              des="St. Anne's College is a Premier Boys College in Sri Lanka located in the scenic city of Kurunegala. With More Than 3000 of Students Learning With Discipline"
            />
            <ResumeCard
              url={sliit}
              title="SLIIT"
              subTitle="Higher Studies - (2020 - Present)"
              result="Malabe"
              des="Sri Lanka Institute of Information Technology (SLIIT) is the largest IT degree awarding institute in Sri Lanka in the field of Information Technology."
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
              subTitle="Capturing moments, expressing creativity."
              result="N/A"
              des="love photography because it allows me to capture and preserve beautiful moments, emotions, and stories in a single frame.."
            />
            <ResumeCard
              url={travel}
              title="Travelling"
              subTitle="Travelling: Adventure, exploration, freedom."
              result="N/A"
              des="
              I adore traveling because it opens my eyes to new cultures, landscapes, and experiences, igniting a sense of adventure and broadening my perspective on the world."
            />
            <ResumeCard
              url={foody}
              title="Foody Vibes"
              subTitle="Food: Taste, joy, connection."
              result="N/A"
              des="A flavorful adventure that delights my senses, satisfies my cravings, and brings people together through the universal language of deliciousness."
            />
            
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;

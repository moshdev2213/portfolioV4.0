import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Achievement from './Achievement';
import Experience from "./Experience"

const Resume = () => {
   const [educationData, setEducationData] = useState(true);
   const [experienceData, setExperienceData] = useState(false);
   const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="7+ YEARS OF EXPERIENCE" des="More About Me" />
      </div>
      <div className='md:m-auto md:w-9/12'>
        <ul className=" grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3">
          <li
            onClick={() =>
              setEducationData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              educationData
                ? "bg-white text-black font-bold rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
        
          <li
            onClick={() =>
              setEducationData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
            className={`${
              experienceData
                ? "bg-white text-black font-bold rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setExperienceData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? "bg-white text-black font-bold rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {achievementData && <Achievement />}
      {experienceData && <Experience />}
 
    </section>
  );
}

export default Resume
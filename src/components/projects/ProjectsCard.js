import React, { useState } from 'react'
import { BsGithub } from "react-icons/bs";
import ProjectModal from './ProjectModal';
import { Link } from '@nextui-org/react';

const ProjectsCard = ({ title, des, src ,url}) => {


  return (
    <div className="w-full p-4 xl:px-5 h-fit xl:py-5 rounded-lg shadow-shadowOne flex flex-col bg-black bg-opacity-20 hover:bg-opacity-40 duration-300">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <ProjectModal des={des} head={title} url={ url} />

              <Link target="_blank" href={url}>
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                  <BsGithub />
                </span>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard
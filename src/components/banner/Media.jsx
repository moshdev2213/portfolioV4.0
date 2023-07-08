import React from 'react'
import { FaTwitter, FaLinkedinIn, FaReact, FaGithub, FaMailBulk, FaWhatsapp } from "react-icons/fa";
import { SiAndroid, SiFigma, SiJava } from "react-icons/si";
import { Link } from "@nextui-org/react";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <Link target="_blank" href="https://github.com/moshdev2213">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </Link>
          <Link target="_blank" href="https://twitter.com/moshdev2213">
            <span className="bannerIcon">
              <FaTwitter />
            </span>
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/mohommad-shabeer-88328226b">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </Link>
          <Link  href='mailto:moshdev2213@gmail.com'>
            <span className="bannerIcon">
              <FaMailBulk />
            </span>
          </Link>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Interest On
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <SiJava />
          </span>
          <span className="bannerIcon">
            <SiAndroid />
          </span>

          <span className="bannerIcon">
            <SiFigma />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Media
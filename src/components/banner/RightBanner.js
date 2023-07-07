import React from 'react'
// import { bannerImg } from "../../assets/index";
import  astroo from "../../assets/images/imgpropic.jpg";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center order-first lg:order-last items-center relative ">
    <img
      className="w-[300px] h-[400px] lgl:w-[450px] lgl:h-[600px] z-10 rounded-2xl"
      src={astroo}
      alt="bannerImg"
    />
  
      
    </div>
  );
}

export default RightBanner
import React from 'react'

const FooterBottom = () => {
  return (
    <div className="w-full py-5">
      <p className="text-center text-gray-500 text-base">
      © {new Date().getFullYear()} All rights reserved by moshdev.
      </p>
    </div>
  );
}

export default FooterBottom
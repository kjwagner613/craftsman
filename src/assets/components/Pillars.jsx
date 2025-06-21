import React from 'react';

const Pillars = ({ setSelectedSection }) => (
  <div className="relative w-full max-w-[900px] mx-auto py-8">
    {/* Moving cloud animation with clickable interaction */}
    <div
      className="cloud z-10 cursor-pointer"
      onClick={() => setSelectedSection("AboutMe")}
    />



    <picture>
      <source
        srcSet="/pillars3-small.png"
        media="(max-width: 900px)"
        type="image/png"
      />
      <img
        src="/pillars3.png"
        alt="Business Pillars"
        className="mb-8 transform scale-100 sm:scale-75 md:scale-50 z-500"
      />
    </picture>
    {/* Invisible click targets */}
    <div
      className="absolute top-[86.5%] left-[17%] w-[600px] h-[35px] cursor-pointer z-30"
      onClick={() => setSelectedSection('Foundation')}
    />
    <div
      className="absolute top-[30%] left-[22%] w-[120px] h-[225px] cursor-pointer z-30"
      onClick={() => setSelectedSection('Software')}
    />
    <div
      className="absolute top-[30%] left-[44%] w-[120px] h-[225px] cursor-pointer z-30"
      onClick={() => setSelectedSection('ProjectManagement')}
    />
    <div
      className="absolute top-[30%] left-[65%] w-[120px] h-[225px] cursor-pointer z-30"
      onClick={() => setSelectedSection('Automation')}
    />
  </div>
);

export default Pillars;
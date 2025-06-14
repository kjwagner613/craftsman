import React from 'react';

const Pillars = ({ setSelectedSection }) => (
  <div className="relative w-full max-w-[900px] mx-auto py-8">
    {/* Moving cloud animation */}
    <div className="cloud z-10" />
    <img
      src="/pillars3.png"
      alt="Business Pillars"
      className=" mb-8"
    />

    {/* Invisible click targets */}
    <div
      className="absolute top-[86.5%] left-[17%] w-[600px] h-[35px] cursor-pointer z-30"
      onClick={() => setSelectedSection('foundation')}
    />
    <div
      className="absolute top-[30%] left-[22%] w-[120px] h-[225px] cursor-pointer z-30"
      onClick={() => setSelectedSection('software')}
    />
    <div
      className="absolute top-[30%] left-[44%] w-[120px] h-[225px] cursor-pointer z-30"
      onClick={() => setSelectedSection('projectManagement')}
    />
    <div
      className="absolute top-[30%] left-[65%] w-[120px] h-[225px] cursor-pointer z-30"
      onClick={() => setSelectedSection('automation')}
    />
  </div>
);

export default Pillars;
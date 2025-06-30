import React from 'react';
import '../../index.css';
import { commonStyles, combineClasses } from '../../utils';




const Pillars = ({ setSelectedSection }) => (
  <div className="relative w-full max-w-[900px] mx-auto py-8">
    <picture>
      <source
        srcSet="/pillars3-small.png"
        media="(max-width: 900px)"
        type="image/png"
      />
      <img
        src="/pillars3.png"
        alt="Business Pillars"
        className="mb-8 transform scale-100 sm:scale-75 md:scale-50 z-20"
      />
    </picture>
    {/* Invisible click targets */}
    <div
      className={combineClasses(
        commonStyles.hoverGlow,
        "absolute top-[86.5%] left-[17%] w-[600px] h-[35px] cursor-pointer z-20")}
      onClick={() => setSelectedSection('Foundation')}
    />
    <div
      className={combineClasses(
        commonStyles.hoverGlow,
        "absolute top-[30%] left-[22%] w-[120px] h-[225px] cursor-pointer z-20")}
      onClick={() => setSelectedSection('Software')}
    />
    <div

      className={combineClasses(
        commonStyles.hoverGlow,
        "absolute top-[30%] left-[44%] w-[120px] h-[225px] cursor-pointer z-20")}
      onClick={() => setSelectedSection('ProjectManagement')}
    />
    <div
      className={combineClasses(
        commonStyles.hoverGlow,
        "absolute top-[30%] left-[65%] w-[120px] h-[225px] cursor-pointer z-20")}
      onClick={() => setSelectedSection('Automation')}
    />
  </div>
);

export default Pillars;
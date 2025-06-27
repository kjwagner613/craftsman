import React from 'react';

const PersistentClouds = ({ setSelectedSection, show }) => {
  if (!show) return null;

  return (
    <>
      {/* First cloud - moving right to left */}
      <div
        className="cursor-pointer"
        onClick={() => setSelectedSection("AboutMe")}
        style={{
          position: 'fixed',
          top: '1vh',
          right: '10vw',
          width: '600px',
          height: '400px',
          backgroundImage: "url('/whispyCloud.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          zIndex: 20,
          animation: 'moveCloud 100s linear infinite',
          pointerEvents: 'auto',
        }}
      />

      {/* Second cloud - moving left to right */}
      <div
        className="cursor-pointer"
        onClick={() => setSelectedSection("AboutMe")}
        style={{
          position: 'fixed',
          top: '8vh',
          left: '5vw',
          width: '480px',
          height: '320px',
          backgroundImage: "url('/Cumulus_cloud.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          zIndex: 19,
          animation: 'moveCloudReverse 120s linear infinite',
          pointerEvents: 'auto',
          opacity: 0.8,
        }}
      />
    </>
  );
};

export default PersistentClouds;
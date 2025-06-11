import React, { useState, useEffect } from "react";

// (Removed duplicate Pillars component)

const Pillars = ({ setSelectedSection }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 1000); // Delayed fade-in effect
    }, []);

    return (
        <div className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"} relative`}>
            {/* Pillar Image */}
            <div className="cloud z-5"></div>
            <img src="/pillars3.png" alt="Business Pillars" className="max-w-[700px] z-10" />

            {/* Transparent Click Areas */}
            <div className="absolute top-[86.5%] left-[3%] w-[600px] h-[35px] cursor-pointer" onClick={() => setSelectedSection("foundation")}></div>
            <div className="absolute top-[30%] left-[10%] w-[120px] h-[225px] cursor-pointer" onClick={() => setSelectedSection("software")}></div>
            <div className="absolute top-[30%] left-[41%] w-[120px] h-[225px] cursor-pointer" onClick={() => setSelectedSection("projectManagement")}></div>
            <div className="absolute top-[30%] left-[72%] w-[120px] h-[225px] cursor-pointer" onClick={() => setSelectedSection("automation")}></div>
        </div>
    );
};

export default Pillars;

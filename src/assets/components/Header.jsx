import React, { useEffect, useState } from 'react';

const Header = ({ selected }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (selected) {
      setTimeout(() => setIsVisible(true), 100);
    } else {
      setIsVisible(false);
    }
  }, [selected]);

  return (
    <div className={`w-full transition-opacity transition-transform duration-700 ease-in-out ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-6'}`}>
      <h1 className="text-3xl font-bold">Header</h1>
      <p className="mt-2 text-lg">Making manual workflows efficient through automation.</p>
      {/* ...rest of your content... */}
    </div>
  );
};

export default Header;
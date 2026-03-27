import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="w-full">
      <div className="relative w-full">
        {/* Image */}
        <img
          src={`${import.meta.env.BASE_URL}cover.png`}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
 
  );
};

export default Hero;
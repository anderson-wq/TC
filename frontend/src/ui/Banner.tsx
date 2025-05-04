import React from "react";

interface BannerProps {
  title: string;
  subtitle?: string;
  image: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, image }) => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-10 flex flex-col md:flex-row items-center justify-between mt-15">
      {/* Text Section */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h1>
        {subtitle && (
          <p className="text-gray-300 mt-2 text-lg">{subtitle}</p>
        )}
      </div>

      {/* Image Section */}
      <div className="mt-6 md:mt-0">
        <img
          src={image}
          alt={title}
          className="w-28 md:w-40"
        />
      </div>
    </div>
  );
};

export default Banner;

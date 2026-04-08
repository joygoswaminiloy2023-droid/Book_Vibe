import React from 'react';
import hero_img from '../assets/hero_img.jpg'
import { Link } from 'react-router';

const Hero = () => {
    return (
<div className="container m-auto p-10 bg-base-200  my-10 rounded-2xl">
  <div className="flex flex-col text-center md:text-left md:flex-row-reverse justify-around gap-10 ">
    
    {/* Image */}
    <img
      src={hero_img}
      alt="Books"
      className="w-full max-w-sm rounded-lg shadow-3xl"
    />

    {/* Text */}
    <div className="max-w-lg">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Books to freshen up your bookshelf
      </h1>

      <p className="py-4 text-gray-500">
        Discover amazing books, explore new genres, and bring new life to your reading journey.
      </p>

      <Link to="/books" className="btn text-white btn-success rounded-xl mt-2">
        View The List
      </Link>
    </div>

  </div>
</div>
    );
};

export default Hero;
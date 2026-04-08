import React, { Suspense } from 'react';
import Hero from '../Components/Hero';
import Books from '../Components/books';

const Home = () => {
    return (
        <div className=' '>
           <Hero></Hero>
<Suspense
  fallback={
    <div className="min-h-screen flex items-center justify-center">
      <span className="loading loading-bars loading-xl text-sky-500"></span>
    </div>
  }
><Books  ></Books></Suspense>
        </div>
    );
};

export default Home;
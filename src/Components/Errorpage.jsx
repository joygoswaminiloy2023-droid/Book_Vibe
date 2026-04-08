import React from 'react';
import { Link } from 'react-router';

const Errorpage = () => {
    return (
        <div>
                <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-10 text-center max-w-md w-full">
        
        <h1 className="text-8xl font-extrabold text-indigo-600">404</h1>
        
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>
        
        <p className="mt-2 text-gray-600">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 transition rounded-lg shadow-md"
        >
          Go Back Home
        </Link>
      </div>
    </div>
        </div>
    );
};

export default Errorpage;
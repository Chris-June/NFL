import React from 'react';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="text-6xl font-bold text-gray-900 mb-8">404</div>
        <img
          src="/nfl-logo.png"
          alt="NFL Logo"
          className="w-24 h-24 mx-auto mb-8 opacity-50"
        />
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          Incomplete Pass!
        </h1>
        <p className="text-gray-600 mb-8">
          The page you're looking for has been intercepted or doesn't exist.
          Let's get you back in the game!
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
        >
          Return to Home Field
        </Link>
      </div>
    </div>
  );
}

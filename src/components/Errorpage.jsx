import React from 'react';
import { Link } from "react-router-dom";
import {AlertTriangle} from 'lucide-react'
const Errorpage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <AlertTriangle className="w-20 h-20 text-red-500 mb-4" />
        <h1 className="text-4xl font-bold">Oops! Page Not Found</h1>
        <p className="text-lg text-gray-600 mt-2">It looks like you've hit a dead end.</p>
        <p className="text-lg text-gray-600">Let's run back to safety!</p>
        
        <Link
          to="/"
          className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    );
};

export default Errorpage;
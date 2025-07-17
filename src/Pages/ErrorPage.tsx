import { Link } from 'react-router-dom';
import Errorpic from '../assets/Imgs/error.gif';
import { MdErrorOutline } from 'react-icons/md';
import type { JSX } from 'react';

const ErrorPage = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-200 to-blue-400">
      {/* Error Icon and Heading */}
      <div className="flex items-center gap-2 mb-4 animate-bounce">
        <MdErrorOutline className="text-5xl text-red-600 font-bold animate-spin" />
        <h1 className="text-4xl font-extrabold max-sm:text-2xl">
          404 - Page Not Found
        </h1>
      </div>

      {/* Error message section */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold max-sm:text-2xl">
          Oops! Something went wrong!!!{' '}
          <span className="text-red-600">TRY AGAIN</span>
        </h2>
        <div className="px-2 py-2">
          <p className="text-gray-700 font-semibold">
            The page you are looking for might have been removed or temporarily unavailable.
          </p>
          <p className="font-semibold text-red-500">
            Go back or check your internet connection.
          </p>
        </div>
      </div>

      {/* Error Image */}
      <div>
        <img
          src={Errorpic}
          alt="Error"
          className="max-w-full h-auto border-2 rounded-3xl"
        />
      </div>

      {/* Go back button */}
      <div className="py-4">
        <Link to="/">
          <button className="bg-red-500 rounded-2xl px-4 py-4 text-white font-bold hover:bg-red-700">
            Click Here To Go Back..
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

import React from "react";
import { Link } from "react-router-dom";

const Denied = () => {
  return (
    <div className="mt-10">
      <div x-ref="loading" className="fixed z-50 flex items-center justify-center text-2xl font-semibold text-white "></div>
      <main aria-labelledby="pageTitle" className="flex items-center justify-center h-screen bg-lime-100 dark:bg-dark dark:text-light">
        <div className="p-4 space-y-4">
          <div className="flex flex-col items-start space-y-3 sm:flex-row sm:space-y-0 sm:items-center sm:space-x-3">
            <p className="font-semibold text-primary opacity-90 text-9xl dark:text-danger">!</p>

            <div className="space-y-2">
              <h1 id="pageTitle" className="flex items-center space-x-2">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-danger-light dark:text-danger"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span className="text-xl font-medium text-gray-600 sm:text-2xl dark:text-light">Oops! Page access denied.</span>
              </h1>
              <p className="text-base font-normal text-gray-600 dark:text-gray-300">The page you are looking for was access denied .</p>
              <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                You may return to
                <Link to="/" className="text-lime-700 hover:underline font-bold">
                  {" "}
                  Home Page.
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Denied;

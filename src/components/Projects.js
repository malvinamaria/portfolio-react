/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import guess from '../assets/guess.jpeg';

export const Projects = () => {
  return (
    <>
      <div className="mx-auto text-center max-w-9xl lg:px-8 lg:pt-24">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl py-8">
          Projects
        </h2>
      </div>
      <div className="mx-auto max-w-2xl flex flex-col-reverse lg:flex-row items-center">
        {/* This will be displayed on top in small screens and on the left in larger screens */}
        <div className="mb-4 lg:mb-0">
          <svg
            className="h-64 w-64 border-gray-300 bg-white text-gray-300"
            preserveAspectRatio="none"
            fill="none"
            viewBox="0 0 200 200"
            aria-hidden="true"
          >
            <path
              vectorEffect="non-scaling-stroke"
              strokeWidth={1}
              d="M0 0l200 200M0 200L200 0"
            />
            <image href={guess} x="0" y="0" width="200" height="200" />
          </svg>
        </div>
        {/* This will be displayed on the bottom in small screens and on the right in larger screens */}
        <div className="max-w-2xl mt-1text-center leading-6">
          <h4 className="text-lg font-bold lg:pt-1 px-6">Guess Who-game</h4>
          <p className="mt-2 py-2 text-left max-w-2xl px-6 text-gray-900">
            A digital version of the classic board game Guess Who using
            JavaScript. The project revolved around the exploration of working
            with objects, arrays, and interfacing with the Document Object Model
            (DOM).
          </p>
          <div className="flex px-5">
            <a
              href="https://exquisite-sprite-592d47.netlify.app/"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Recommended for security
            >
              <button
                type="button"
                className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mr-2"
              >
                View Live
              </button>
            </a>
            <a
              href="https://github.com/malvinamaria/project-guess-who"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Recommended for security
            >
              <button
                type="button"
                className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Code
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="flex max-w-2xl "> */}
      {/* <div className="mx-auto max-w-2xl">
        <div className="mr-4 flex-shrink-0 self-center">
          <svg
            className="h-64 w-64 border-gray-300 bg-white text-gray-300"
            preserveAspectRatio="none"
            fill="none"
            viewBox="0 0 200 200"
            aria-hidden="true"
          >
            <path
              vectorEffect="non-scaling-stroke"
              strokeWidth={1}
              d="M0 0l200 200M0 200L200 0"
            />
            <image href={guess} x="0" y="0" width="200" height="200" />
          </svg>
        </div>
        <div className="max-w-2xl mt-2 leading-8">
          <h4 className="text-lg font-bold lg:pt-10">Guess Who-game</h4>
          <p className="mt-2 text-left max-w-2xl">
            A digital version of the classic board game Guess Who using
            JavaScript. The project revolved around the exploration of working
            with objects, arrays, and interfacing with the Document Object Model
            (DOM).
          </p>
        </div>
      </div> */}
      {/* <div className="flex">
        <div className="mr-4 flex-shrink-0">
          <svg
            className="h-96 w-96 border-gray-300 bg-white text-gray-300"
            preserveAspectRatio="none"
            fill="none"
            viewBox="0 0 200 200"
            aria-hidden="true"
          >
            <path
              vectorEffect="non-scaling-stroke"
              strokeWidth={1}
              d="M0 0l200 200M0 200L200 0"
            />
            <image href={guess} x="0" y="0" width="200" height="200" />
          </svg>
        </div>
        <div className="mx-auto max-w-2xl text-left">
          <h4 className="text-lg font-bold">Guess Who-game</h4>
          <p className="mt-1">
            A digital version of the classic board game Guess Who using
            JavaScript. The project revolved around the exploration of working
            with objects, arrays, and interfacing with the Document Object Model
            (DOM). Throughout the project, I leveraged provided starter code and
            HTML structure, using event listeners to connect buttons and
            selections to various functions. The project focused on improving my
            skills in working with objects, arrays, DOM manipulation, and
            handling user interactions. I also had the option to extend the
            project by implementing a restart feature to reset the game for
            additional play. The completion of this project enhanced my
            understanding of JavaScript and web developmentprinciples.
          </p>
        </div>
      </div> */}
    </>
  );
};

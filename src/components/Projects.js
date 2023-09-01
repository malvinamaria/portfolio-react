/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import guess from '../assets/guess.jpeg';
import wine from '../assets/wine.png';
import happy from '../assets/happy.png';
import chat from '../assets/chat.png';
import music from '../assets/music.png';

export const Projects = () => {
  return (
    <>
      <div className="mx-auto text-center max-w-9xl lg:px-8 lg:pt-24">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl py-8">
          Projects
        </h2>
        {/* // =============================== // Project 1: Wine ===============================  // */}
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
            <image href={wine} x="0" y="0" width="200" height="200" />
          </svg>
        </div>
        {/* This will be displayed on the bottom in small screens and on the right in larger screens */}
        <div className="max-w-2xl mt-1text-center leading-6">
          <h4 className="text-lg font-bold lg:pt-1 px-6">Wine Web-Shop</h4>
          <p className="mt-2 py-2 text-left max-w-2xl px-6 text-gray-900">
            For my final project at Technigo's Frontend Developer Bootcamp, I
            created a Wine Web-Shop. It's a full-stack platform aimed at wine
            enthusiasts. The frontend uses React and Redux, and the backend is
            built with Node.js, Express, and MongoDB. The project is hosted on
            Google Cloud and uses MongoDB Atlas for data storage.
          </p>
          <div className="flex px-5">
            <a
              href="https://master--resilient-malabi-e75d30.netlify.app/"
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
              href="https://github.com/malvinamaria/webshop_frontend"
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
      {/* // =============================== // Project 2: Guess Who ===============================  // */}
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
      {/* // =============================== // Project 3: Happy Thoughts ===============================  // */}
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
            <image href={happy} x="0" y="0" width="200" height="200" />
          </svg>
        </div>
        {/* This will be displayed on the bottom in small screens and on the right in larger screens */}
        <div className="max-w-2xl mt-1text-center leading-6">
          <h4 className="text-lg font-bold lg:pt-1 px-6">Happy Thoughts</h4>
          <p className="mt-2 py-2 text-left max-w-2xl px-6 text-gray-900">
            "I developed a messaging app with Twitter-like features, allowing
            users to create posts, like content, and delete messages. MongoDB
            was utilized on the backend to set up endpoints, manage data
            storage, and process user interactions.
          </p>
          <div className="flex px-5">
            <a
              href="https://lighthearted-ganache-ed57f8.netlify.app/"
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
              href="https://github.com/malvinamaria/project-happy-thoughts"
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
      {/* // =============================== // Project 4: Music Releases ===============================  // */}
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
            <image href={music} x="0" y="0" width="200" height="200" />
          </svg>
        </div>
        {/* This will be displayed on the bottom in small screens and on the right in larger screens */}
        <div className="max-w-2xl mt-1text-center leading-6">
          <h4 className="text-lg font-bold lg:pt-1 px-6">Music Releases</h4>
          <p className="mt-2 py-2 text-left max-w-2xl px-6 text-gray-900">
            My first venture into JavaScript led to the development of an
            interactive chatbot that offers personalized responses to user
            input.
          </p>
          <div className="flex px-5">
            <a
              href="https://hilarious-moonbeam-f0ccd7.netlify.app/"
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
              href="https://github.com/malvinamaria/project-music-releases"
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
      {/* // =============================== // Project 5: Chat bot ===============================  // */}
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
            <image href={chat} x="0" y="0" width="200" height="200" />
          </svg>
        </div>
        {/* This will be displayed on the bottom in small screens and on the right in larger screens */}
        <div className="max-w-2xl mt-1text-center leading-6">
          <h4 className="text-lg font-bold lg:pt-1 px-6">MusicBot</h4>
          <p className="mt-2 py-2 text-left max-w-2xl px-6 text-gray-900">
            My first venture into JavaScript led to the development of an
            interactive chatbot that offers personalized responses to user
            input.
          </p>
          <div className="flex px-5">
            <a
              href="https://meek-tarsier-94f585.netlify.app/"
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
              href="https://github.com/malvinamaria/project-chatbot"
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
    </>
  );
};

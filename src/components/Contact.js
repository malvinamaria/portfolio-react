/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { ReactComponent as Logo } from '../assets/linkedin.svg';
import { ReactComponent as GitHubLogo } from '../assets/github.svg';
import './Contact.css';

export const Contact = () => {
  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Let's chat!
            {/* <br />
            Start using our app today. */}
          </h2>
          <a href="mailto:mmpolak@protonmail.com">
            <p className="mx-auto mt-16 max-w-xl text-lg leading-8 text-gray-600 hover:text-blue-600 hover:underline focus:text-blue-600 focus:underline">
              mmpolak@protonmail.com
            </p>
          </a>

          <div className="mt-16 flex items-center justify-center gap-x-6">
            <a href="https://www.linkedin.com/in/malwina-maria-polak-327b2093/">
              <button type="button" className="icon-button">
                <Logo
                  className="-ml-0.5 mr-1.5 h-8 w-8 text-gray-400"
                  aria-hidden="true"
                />
              </button>
            </a>
            <a href="https://github.com/malvinamaria">
              <button type="button" className="icon-button">
                <GitHubLogo
                  className="-ml-0.5 mr-1.5 h-8 w-8 text-gray-400"
                  aria-hidden="true"
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

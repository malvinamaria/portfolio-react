/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-trailing-spaces */
/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */
import React from 'react';
// import { PhoneIcon } from '@heroicons/react/20/solid';
import profile_picture from '../assets/profile_picture.jpg';
import background_image1 from '../assets/background_image1.jpg';
import { ReactComponent as Logo } from '../assets/linkedin.svg';
import { ReactComponent as GitHubLogo } from '../assets/github.svg';
import './Hello.css';

const profile = {
  name: 'Malwina Maria Polak',
  email: 'mmpolak@protonmail.com',
  //   src: profile_picture,
  avatar: profile_picture,
  backgroundImage: background_image1,
};

export const Hello = () => {
  return (
    <div>
      <div>
        <img
          className="h-32 w-full object-cover lg:h-48"
          src={profile.backgroundImage}
          alt=""
        />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <img
              className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
              src={profile.avatar}
              alt=""
            />
          </div>
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
              <h1 className="truncate text-2xl font-bold text-gray-900">
                {profile.name}
              </h1>
              <div className="pt-1.5">
                <p className="text-sm font-medium text-gray-900">
                  Full Stack Web Developer
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <a href="https://www.linkedin.com/in/malwina-maria-polak-327b2093/">
                <button type="button">
                  <Logo
                    className="-ml-0.5 mr-1.5 h-8 w-8 text-gray-400"
                    aria-hidden="true"
                  />
                </button>
              </a>
              <a href="https://github.com/malvinamaria">
                <button type="button">
                  <GitHubLogo
                    className="-ml-0.5 mr-1.5 h-8 w-8 text-gray-400"
                    aria-hidden="true"
                  />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
          <h1 className="truncate text-2xl font-bold text-gray-900">
            {profile.name}
          </h1>
        </div>
      </div>
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Hi I'm Malwina a web developer with a master's degree in
            mathematics, I thrive on the combination of logic and creativity
            that programming requires. My goal is to create code that is not
            only readable and reliable but also robust and scalable. I enjoy the
            challenge of finding elegant solutions to complex problems, and I am
            constantly seeking to improve my skills and knowledge in the field.
          </p>
        </div>
      </div>
    </div>
  );
};

/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';

const navigation = {
  code: [
    { name: 'HTML5' },
    { name: 'CSS3' },
    { name: 'JavaScript ES6' },
    { name: 'React' },
  ],
  toolbox: [
    { name: 'Visual Studio Code' },
    { name: 'Slack' },
    { name: 'Figma' },
    { name: 'Postman' },
  ],
  more: [
    { name: 'Agile methodology' },
    { name: 'Strategy' },
    { name: 'Concept methodology' },
  ],
  upcoming: [{ name: 'TypeSript' }, { name: 'Next' }],
};

export const Skills = () => {
  return (
    <div className="mx-auto text-center max-w-9xl lg:px-8 lg:pt-32">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Skills
      </h2>
      <div className="mx-auto text-center max-w-9xl lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-semibold leading-6 text-gray-900 xl:text-center">
                  <a className="underline decoration-4 decoration-sky-500">
                    Code
                  </a>
                </h3>
                <ul role="list" className="mt-6 space-y-4c">
                  {navigation.code.map((item) => (
                    <li key={item.name}>
                      <a className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-lg font-semibold leading-6 text-gray-900 xl:text-center">
                  <a className="underline decoration-4 decoration-pink-500">
                    Toolbox
                  </a>
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.toolbox.map((item) => (
                    <li key={item.name}>
                      <a className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-semibold leading-6 text-gray-900 xl:text-center">
                  <a className="underline decoration-4 decoration-indigo-500">
                    More
                  </a>
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.more.map((item) => (
                    <li key={item.name}>
                      <a className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-lg font-semibold leading-6 text-gray-900 xl:text-center">
                  <a className="underline decoration-4 decoration-lime-500">
                    Upcomming
                  </a>
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.upcoming.map((item) => (
                    <li key={item.name}>
                      <a className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

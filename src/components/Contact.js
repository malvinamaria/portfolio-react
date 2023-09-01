/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import guess from '../assets/guess.jpeg';

export const Contact = () => {
  return (
    <div className="flex">
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
          {/* Add an image using the <image> element */}
          <image href={guess} x="0" y="0" width="200" height="200" />
        </svg>
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h4 className="text-lg font-bold">Guess Who-game</h4>
        <p className="mt-1">
          A digital version of the classic board game Guess Who using
          JavaScript. The project revolved around the exploration of working
          with objects, arrays, and interfacing with the Document Object Model
          (DOM). Throughout the project, I leveraged provided starter code and
          HTML structure, using event listeners to connect buttons and
          selections to various functions. The project focused on improving my
          skills in working with objects, arrays, DOM manipulation, and handling
          user interactions. I also had the option to extend the project by
          implementing a restart feature to reset the game for additional play.
          The completion of this project enhanced my understanding of JavaScript
          and web developmentprinciples.
        </p>
      </div>
    </div>
  );
};

// const projects = {
//   project_1: guess,
// };

// export const Contact = () => {
//   return (
//     <div className="flex">
//       <div className="mr-4 flex-shrink-0">
//         <img
//           className="h-16 w-16 border border-gray-300 bg-white text-gray-300"
//           src={projects.guess_who}
//         />
//       </div>
//       <div>
//         <h4 className="text-lg font-bold">Lorem ipsum</h4>
//         <p className="mt-1">
//           A digital version of the classic board game Guess Who using
//           JavaScript. The project revolved around the exploration of working
//           with objects, arrays, and interfacing with the Document Object Model
//           (DOM). Throughout the project, I leveraged provided starter code and
//           HTML structure, using event listeners to connect buttons and
//           selections to various functions. The project focused on improving my
//           skills in working with objects, arrays, DOM manipulation, and handling
//           user interactions. I also had the option to extend the project by
//           implementing a restart feature to reset the game for additional play.
//           The completion of this project enhanced my understanding of JavaScript
//           and web developmentprinciples.
//         </p>
//       </div>
//     </div>
//   );
// };

import React from 'react';
import { Hello } from 'components/Hello';
// import { Tech } from 'components/Tech';
import { Skills } from 'components/Skills';
import { Projects } from 'components/Projects';
import { Contact } from 'components/Contact';

export const App = () => {
  return (
    <div>
      <Hello />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

import React from 'react';

import TypingAnimation from '../components/terminalAnimation/TypingAnimation';
import Animator from '../components/terminalAnimation/Animator';

const MainPage = () => (
  <Animator
    keyFrames={[
      {
        JSX: (
          <TypingAnimation
            text="Welcome to Eroxl's"
            speed={100}
            reversed={false}
          />
        ),
        duration: 20 * 100,
      },
      {
        JSX: (
          <TypingAnimation
            text=""
            speed={100}
            reversed
          />
        ),
        duration: 8 * 100,
        delay: 2 * 100,
      },
      {
        JSX: (
          <TypingAnimation
            text="Welcome to Evan's personal website"
            speed={100}
            reversed={false}
          />
        ),
        duration: 6 * 100,
        delay: 1 * 100,
      },
    ]}
  />
);

export default MainPage;

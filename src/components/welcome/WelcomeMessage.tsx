import React from 'react';

import SwapTypeAnimation from '../terminalAnimation/SwapTypeAnimation';
import TypingAnimation from '../terminalAnimation/TypingAnimation';
import Animator from '../terminalAnimation/Animator';

const WelcomeMessage = () => (
  <Animator
    keyFrames={[
      // Type "Hi I'm Erox1"
      {
        JSX: (
          <TypingAnimation
            text="Hi I'm Erox1"
            speed={100}
            reversed={false}
          />
        ),
        duration: 12 * 100,
      },
      // Delete "Erox1"
      {
        JSX: (
          <TypingAnimation
            text=""
            speed={100}
            reversed
          />
        ),
        duration: 5 * 100,
        delay: 2 * 100,
      },
      // Type "Evan"
      {
        JSX: (
          <TypingAnimation
            text="Hi I'm Evan"
            speed={100}
            reversed={false}
          />
        ),
        duration: 6 * 100,
        delay: 1 * 100,
      },
      // Type "I'm a"
      {
        JSX: (
          <span>
            Hi I&apos;m Evan
            <br />
            <TypingAnimation
              text="I'm a"
              speed={100}
              reversed={false}
            />
          </span>
        ),
        duration: 6 * 100,
      },
      // Swap between typing multiple roles
      {
        JSX: (
          <span>
            Hi I&apos;m Evan
            <br />
            I&apos;m a
            {' '}
            <SwapTypeAnimation
              texts={
                [
                  'software engineer',
                  'open source contributor',
                  'full stack developer',
                  'freelancer',
                ]
              }
            />
          </span>
        ),
        duration: 5 * 100,
        delay: 2 * 100,
      },
    ]}
  />
);

export default WelcomeMessage;

import React from 'react';

import Link from '../elements/Link';
import SwapTypeAnimation from '../terminalAnimation/SwapTypeAnimation';
import TypingAnimation from '../terminalAnimation/TypingAnimation';
import Animator from '../terminalAnimation/Animator';

const WelcomeAnimation = () => (
  <Animator
    keyFrames={[
      {
        JSX: (
          <span key="welcome-animation-frame-0">
            <Animator
              keyFrames={[
                {
                  JSX: (
                    <TypingAnimation
                      text="Hi I'm "
                      speed={100}
                      reversed={false}
                      key="animation-frame-0"
                    />
                  ),
                  duration: "Hi I'm ".length * 100,
                },
                {
                  JSX: (
                    <span>
                      Hi I&apos;m
                      {' '}
                      <Link href="https://github.com/eroxl" key="animation-frame-1">
                        <TypingAnimation
                          text="Erox1"
                          speed={100}
                          reversed={false}
                        />
                      </Link>
                    </span>
                  ),
                  duration: 'Erox1'.length * 100,
                },
              ]}
            />
          </span>
        ),
        duration: "Hi I'm Erox1".length * 100,
      },
      {
        JSX: (
          <span key="welcome-animation-frame-1">
            Hi I&apos;m
            {' '}
            <Link href="https://github.com/eroxl">
              <TypingAnimation
                text="Erox1"
                speed={100}
                reversed
              />
            </Link>
          </span>
        ),
        duration: ' Erox1 '.length * 100,
        delay: 2 * 100,
      },
      {
        JSX: (
          <span key="welcome-animation-frame-2">
            Hi I&apos;m
            {' '}
            <Link href="https://github.com/eroxl">
              <TypingAnimation
                text="Evan"
                speed={100}
                reversed={false}
              />
            </Link>
          </span>
        ),
        duration: ' Evan '.length * 100,
        delay: 1 * 100,
      },
      {
        JSX: (
          <span key="welcome-animation-frame-3">
            Hi I&apos;m
            {' '}
            <Link href="https://github.com/eroxl">
              Evan
            </Link>
            <br />
            <TypingAnimation
              text="I'm a"
              speed={100}
              reversed={false}
            />
          </span>
        ),
        duration: 6 * 100,
        delay: 3 * 100,
      },
      {
        JSX: (
          <span key="welcome-animation-frame-4">
            Hi I&apos;m
            {' '}
            <Link href="https://github.com/eroxl">
              Evan
            </Link>
            <br />
            I&apos;m a
            <SwapTypeAnimation
              texts={
                  [
                    ' software engineer',
                    'n open source contributor',
                    ' full stack developer',
                    ' freelancer',
                  ]
                }
              delay={10 * 100}
            />
          </span>
        ),
        duration: 5 * 100,
        delay: 2 * 100,
      },
    ]}
  />
);

export default WelcomeAnimation;

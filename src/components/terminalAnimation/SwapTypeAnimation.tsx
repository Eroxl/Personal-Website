import React, { useState, useEffect } from 'react';

import Animator from './Animator';
import TypingAnimation from './TypingAnimation';

interface SwapTypeAnimationProps {
  texts: string[];
  delay: number;
}

const SwapTypeAnimation: React.FC<SwapTypeAnimationProps> = (props) => {
  const { texts, delay } = props;

  const [currentText, setCurrentText] = useState(texts[0]);

  const getNextIndex = (): number => {
    const nextIndex = Math.floor(Math.random() * texts.length);

    if (nextIndex === texts.indexOf(currentText)) {
      return getNextIndex();
    }

    return nextIndex;
  };

  useEffect(() => {
    const interval = setInterval(
      () => { setCurrentText(texts[getNextIndex()]); },
      (currentText.length * 2 + 6) * 100,
    );

    return () => clearInterval(interval);
  }, [currentText]);

  return (
    <Animator
      keyFrames={[
        {
          JSX: (
            <TypingAnimation
              text={currentText}
              speed={100}
              reversed={false}
            />
          ),
          duration: currentText.length * 100,
        },
        {
          JSX: (
            <TypingAnimation
              text=""
              speed={100}
              reversed
            />
          ),
          duration: currentText.length * 100,
          delay,
        },
      ]}
      key={currentText}
    />
  );
};

export default SwapTypeAnimation;

import React, { useState, useEffect } from 'react';

import Animator from './Animator';
import TypingAnimation from './TypingAnimation';

interface SwapTypeAnimationProps {
  texts: string[];
}

const SwapTypeAnimation: React.FC<SwapTypeAnimationProps> = (props) => {
  const { texts } = props;

  const [currentText, setCurrentText] = useState(texts[0]);

  const handleTextChange = () => {
    const index = texts.indexOf(currentText);
    const nextIndex = (index + 1) % texts.length;
    setCurrentText(texts[nextIndex]);
  };

  useEffect(() => {
    const interval = setInterval(
      handleTextChange,
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
          delay: 4 * 100,
        },
      ]}
      key={currentText}
    />
  );
};

export default SwapTypeAnimation;

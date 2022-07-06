import React, { useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  speed: number;
  reversed: boolean;
}

const TypingAnimation: React.FC<TypingAnimationProps> = (props) => {
  const { text, speed, reversed } = props;

  const [currentText, setCurrentText] = React.useState(reversed ? text : '');

  const handleTextChange = () => {
    if (reversed) {
      setCurrentText(currentText.slice(0, -1));
    } else {
      setCurrentText(currentText + text[currentText.length]);
    }
  };

  useEffect(() => {
    const interval = setInterval(handleTextChange, speed);

    if ((currentText === text && !reversed) || (currentText === '' && reversed)) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  });

  return (
    <span>
      {currentText}
      <span className={currentText === text ? 'animate-blink' : ''}>
        _
      </span>
    </span>
  );
};

export type { TypingAnimationProps };
export default TypingAnimation;

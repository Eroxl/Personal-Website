import React, { useState, useEffect } from 'react';

interface KeyFrame {
  JSX: React.ReactNode;
  duration: number;
  delay?: number;
}

interface AnimatorProps {
  keyFrames: KeyFrame[];
}

const Animator: React.FC<AnimatorProps> = (props) => {
  const { keyFrames } = props;
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => { setCurrentFrame(currentFrame + 1); },
      keyFrames[currentFrame].duration + ((keyFrames[currentFrame + 1] || { delay: 0 }).delay || 0),
    );

    if (currentFrame === keyFrames.length - 1) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  });

  return (
    <span>
      {keyFrames[currentFrame].JSX}
    </span>
  );
};

export type { KeyFrame, AnimatorProps };
export default Animator;

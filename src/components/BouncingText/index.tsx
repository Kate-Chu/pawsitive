import React, { useState, useEffect } from 'react';

type BouncingTextProps = {
  children: string;
};

const BouncingText: React.FC<BouncingTextProps> = ({ children }) => {
  const [positions, setPositions] = useState<number[]>([]);
  const text = children.split('');

  useEffect(() => {
    const newPositions = text.map(() => 0);
    setPositions(newPositions);

    const animate = () => {
      const updatedPositions = positions.map((position) => {
        let newPosition = position + 1;
        if (newPosition >= 20 || newPosition <= 0) {
          newPosition = -newPosition;
        }
        return newPosition;
      });
      setPositions(updatedPositions);
      requestAnimationFrame(animate);
    };
    animate();
  }, [positions, text]);

  return (
    <h1>
      {text.map((char, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={i} style={{ transform: `translateY(${positions[i]}px)` }}>
          {char}
        </span>
      ))}
    </h1>
  );
};

export default BouncingText;

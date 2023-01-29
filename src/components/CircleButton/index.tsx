import React from 'react';
import { styled } from '@linaria/react';
import theme from '../../styles/base';

type CircleButtonType = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const CircleButton: React.FC<CircleButtonType> = (props) => {
  const { children, className, onClick } = props;

  return (
    <StyledCircleButton className={className} onClick={onClick}>
      {children}
    </StyledCircleButton>
  );
};

const StyledCircleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: ${theme.color.white};
  box-shadow: 0 0 0.5rem ${theme.color.gray[40]};
  transition: transform 0.15s ease-in-out;

  :hover {
    transform: translateY(-0.2rem);
  }
`;

export default CircleButton;

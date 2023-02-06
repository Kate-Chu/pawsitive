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
    <S.StyledCircleButton className={className} onClick={onClick}>
      {children}
    </S.StyledCircleButton>
  );
};

export default CircleButton;

const S = {
  StyledCircleButton: styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background-color: ${theme.color.white};
    box-shadow: 0 0 0.5rem ${theme.color.gray[40]};
    transition: transform 0.15s ease-in-out;

    img {
      width: 100%;
      height: 100%;
    }

    :hover {
      transform: translateY(-0.2rem);
    }

    ${theme.mediaQuery.tabPort} {
      width: 4rem;
      height: 4rem;
    }

    ${theme.mediaQuery.tabLand} {
      width: 4.5rem;
      height: 4.5rem;
    }
  `,
};

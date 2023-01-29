import React from 'react';
import { styled } from '@linaria/react';
import theme from '../../styles/base';

type ShadowedButtonProps = {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const ShadowedButton: React.FC<ShadowedButtonProps> = (props) => {
  const { children, onClick, className } = props;

  return (
    <StyledShadowedButton className={className} onClick={onClick}>
      {children}
    </StyledShadowedButton>
  );
};

const StyledShadowedButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  ${theme.font.h5}
  box-shadow: 6.8px 6.8px 0 ${theme.color.darkBlue};
  cursor: pointer;
  transition: transform 0.05s ease-in-out;

  :hover {
    transform: translateY(-0.2rem);
  }

  img {
    width: 1.5rem;
  }
`;

export default ShadowedButton;

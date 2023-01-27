import React from 'react';
import { styled } from '@linaria/react';
import theme from 'src/styles/base';

type ShadowButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

const ShadowButton: React.FC<ShadowButtonProps> = (props) => {
  const { children, onClick } = props;

  return (
    <StyledShadowButton className="shadow-button" onClick={onClick}>
      {children}
    </StyledShadowButton>
  );
};

const StyledShadowButton = styled.button`
  background-color: ${theme.color.orange}};
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  color: ${theme.color.white};
  ${theme.font.h5}
  box-shadow: 6.8px 6.8px 0 ${theme.color.darkBlue};
  cursor: pointer;
  transition: transform 0.05s ease-in-out;

  :hover {
    transform: translateY(-0.2rem);
  }
`;

export default ShadowButton;

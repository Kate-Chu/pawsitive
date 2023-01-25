import React from 'react';
import { styled } from '@linaria/react';
import theme from 'src/styles/base';

type ShadowButtonProps = {
  children?: React.ReactNode;
};

const ShadowButton: React.FC<ShadowButtonProps> = (props) => {
  const { children } = props;

  return (
    <StyledShadowButton className="shadow-button">
      {children}
    </StyledShadowButton>
  );
};

const StyledShadowButton = styled.button`
  background-color: ${theme.color.orange}};
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  color: ${theme.color.white};
  font-size: 1.2rem;
  font-weight: 600;
  box-shadow: 6.8px 6.8px 0 ${theme.color.darkBlue};
`;

export default ShadowButton;

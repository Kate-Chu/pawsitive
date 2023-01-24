import React from 'react';
import { styled } from '@linaria/react';
import { COLOR } from 'src/styles/base';

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
  background-color: ${COLOR.orange}};
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  color: ${COLOR.white};
  font-size: 1.2rem;
  font-weight: 600;
  box-shadow: 6.8px 6.8px 0 ${COLOR.darkBlue};
`;

export default ShadowButton;
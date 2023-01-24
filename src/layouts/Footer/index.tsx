import { styled } from '@linaria/react';
import { COLOR } from 'src/styles/base';
import { ReactComponent as Logo } from '../../assets/browser-icon.svg';

const Footer = () => {
  return (
    <AppFooter>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Text>&copy; 2023 by Amber Fragments</Text>
    </AppFooter>
  );
};

export default Footer;

const AppFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.darkBlue}
  position:absolute;
  bottom:0;
  width: 100%;
  padding: 0.5rem 0;
  color: ${COLOR.white};
`;

const LogoContainer = styled.span`
  display:inline-block
  height: min-content
  width: 2rem
  margin:0 1rem;
`;

const Text = styled.span`
  display:inline-block
  padding-top:0.1rem
  `;

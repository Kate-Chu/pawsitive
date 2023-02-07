import { useState, useEffect, memo } from 'react';
import { styled } from '@linaria/react';
import theme from '../../styles/base';
import { ReactComponent as Logo } from '../../assets/browser-icon.svg';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset < 20) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  };

  return showFooter ? (
    <S.AppFooter>
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>
      <S.Text>&copy; 2023 by Amber Fragments</S.Text>
    </S.AppFooter>
  ) : null;
};

export default memo(Footer);

const S = {
  AppFooter: styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin-top: 2rem;
    padding: 0.5rem 0;
    color: ${theme.color.white};
    background-color: ${theme.color.darkBlue};
  `,

  LogoContainer: styled.span`
  display:inline-block
  height: min-content
  width: 2rem
  margin:0.4rem 1rem 0 0;
`,

  Text: styled.span`
  display:inline-block
  padding-top:0.1rem
  `,
};

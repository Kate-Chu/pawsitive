import { memo } from 'react';
import { styled } from '@linaria/react';
import theme from '../../styles/base';
import { ReactComponent as Logo } from '../../assets/browser-icon.svg';

const Footer = () => {
  return (
    <S.AppFooter>
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>
      <S.Text>&copy; 2023 by Amber Fragments</S.Text>
    </S.AppFooter>
  );
};

export default memo(Footer);

const S = {
  AppFooter: styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
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

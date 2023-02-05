import { styled } from '@linaria/react';
import Board from '../../components/Board';
import theme from '../../styles/base';

const AboutUs = () => {
  return (
    <S.AboutUsContainer>
      <S.Title>關於我們</S.Title>
      <S.SubTitle>我們的使命</S.SubTitle>
      <Board>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
          mollitia dolore animi architecto aspernatur. Optio delectus autem
          architecto quo, nemo error, illo tempore repudiandae iure
          exercitationem sit aliquam corrupti doloribus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
          mollitia dolore animi architecto aspernatur. Optio delectus autem
          architecto quo, nemo error, illo tempore repudiandae iure
          exercitationem sit aliquam corrupti doloribus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
          mollitia dolore animi architecto aspernatur. Optio delectus autem
          architecto quo, nemo error, illo tempore repudiandae iure
          exercitationem sit aliquam corrupti doloribus.
        </p>
      </Board>
    </S.AboutUsContainer>
  );
};

export default AboutUs;

const S = {
  AboutUsContainer: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80vh;
    padding: 0 3rem;

    ${theme.mediaQuery.desk} {
      margin-left: 0rem;
      padding: 0 10rem;
    }
  `,

  Title: styled.header`
  align-self: flex-start;
  margin 1rem -1rem;
  ${theme.font.h6}
  
  ${theme.mediaQuery.tabLand} {
    display: none;
  }
`,

  SubTitle: styled.h3`
    align-self: flex-start;
    margin-bottom: 1.5rem;
    ${theme.font.h3}
  `,
};

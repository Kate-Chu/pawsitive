import { styled } from '@linaria/react';
import Board from 'src/components/Board';
import theme from 'src/styles/base';
import foodIcon from '../../assets/food-icon_2.svg';

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Title>關於我們</Title>
      <SubTitle>我們的使命</SubTitle>
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
      <section>
        <ImgContainer>
          <Image src={foodIcon} alt="donate us" />
        </ImgContainer>
        <CTX>愛心捐贈</CTX>
      </section>
    </AboutUsContainer>
  );
};

const AboutUsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 3rem;

  ${theme.mediaQuery.desk} {
    margin-left: 0rem;
    padding: 0 10rem;
  }
`;

const Title = styled.header`
  align-self: flex-start;
  margin 1rem -1rem;
  ${theme.font.h6}
  
  ${theme.mediaQuery.tabLand} {
    display: none;
  }
`;

const SubTitle = styled.h3`
  align-self: flex-start;
  margin-bottom: 1.5rem;
  ${theme.font.h3}
`;

const ImgContainer = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  background-color: ${theme.color.darkBlue};
  cursor: pointer;
  transition: translate 0.1s ease-in-out;

  &:hover {
    translate: 0 -0.3rem;
    filter: brightness(1.1);

    &::before {
      background-color: ${theme.color.orange};
      filter: brightness(1.65);
    }
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 99%;
    height: 99%;
    top: 0.5%;
    left: 0.5%;
    background-color: ${theme.color.white};
  }

  &,
  &::before {
    clip-path: polygon(
      50% 0%,
      63.23% 9.3%,
      79.39% 9.55%,
      84.62% 24.84%,
      97.55% 34.55%,
      92.8% 50%,
      97.55% 65.45%,
      84.62% 75.16%,
      79.39% 90.45%,
      63.23% 90.7%,
      50% 100%,
      36.77% 90.7%,
      20.61% 90.45%,
      15.38% 75.16%,
      2.45% 65.45%,
      7.2% 50%,
      2.45% 34.55%,
      15.38% 24.84%,
      20.61% 9.55%,
      36.77% 9.3%
    );
  }
`;

const Image = styled.img`
  width: 5rem;
  z-index: 1;
`;

const CTX = styled.h3`
  margin: 1.4rem 0;
  text-align: center;
`;

export default AboutUs;

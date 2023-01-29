import { styled } from '@linaria/react';
import Board from '../../components/Board';
import theme from '../../styles/base';
import dog from '../../assets/dog.svg';
import cat from '../../assets/cat.svg';
import food from '../../assets/food-icon_2.svg';

const Tutorial = () => {
  return (
    <TutorialContainer>
      <Title>領養流程</Title>
      <Illustration>
        <img src={dog} alt="dog" className="dog" />
        <img src={food} alt="food" className="dog-food" />
        <img src={food} alt="food" className="cat-food" />
        <img src={cat} alt="cat" className="cat" />
      </Illustration>

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
    </TutorialContainer>
  );
};

const TutorialContainer = styled.section`
  width: 100%;
  margin-left: -1rem;
  padding: 0 3rem;

  ${theme.mediaQuery.desk} {
    margin-left: 0rem;
    padding: 0 10rem;
  }
`;

const Title = styled.header`
  margin 1rem -1rem 1.5rem;
  ${theme.font.h6}
  
  ${theme.mediaQuery.tabLand} {
    display: none;
  }
`;

const Illustration = styled.section`
  height: max-content;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;

  & .dog,
  & .cat {
    width: 6rem;
    z-index: 2;

    ${theme.mediaQuery.tabLand} {
      width: 10rem;
    }

    ${theme.mediaQuery.desk} {
      width: 12rem;
    }
  }

  & .dog-food,
  & .cat-food {
    display: none;
    z-index: 1;

    ${theme.mediaQuery.tabLand} {
      display: inline-block;
      width: 6rem;
      position: absolute;

      &.dog-food {
        left: 20%;
      }

      &.cat-food {
        right: 20%;
        top: 60%;
      }
    }
  }
`;

export default Tutorial;

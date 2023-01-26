import { styled } from '@linaria/react';
import Card from 'src/components/Card';
import ShadowButton from 'src/components/ShadowButton';
import theme from 'src/styles/base';
import FAKE_DATA from '../../FAKE_DATA.json';

const Animals = () => {
  return (
    <AnimalsContainer>
      <Title>所有動物</Title>
      <CardsContainer>
        {FAKE_DATA.map((item) => {
          return (
            <Card
              key={item.animal_id}
              img={item.album_file}
              name={item.animal_Variety}
              place={item.animal_place.slice(0, 3)}
            />
          );
        })}
      </CardsContainer>
      <ShadowButton>顯示更多內容</ShadowButton>
    </AnimalsContainer>
  );
};

export default Animals;

const AnimalsContainer = styled.section`
  padding: 1rem 3rem 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.header`
  align-self: flex-start;
  margin 1rem -1rem 1.5rem;
  ${theme.font.h6}
  
  ${theme.mediaQuery.tabLand} {
    display: none;
  }
`;

const CardsContainer = styled.section`
  margin: 0 0 2.5rem;
  display: flex;
  flex-wrap: wrap;
`;

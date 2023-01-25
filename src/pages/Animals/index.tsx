import { styled } from '@linaria/react';
import Card from 'src/components/Card';
import FAKE_DATA from '../../FAKE_DATA.json';

const Animals = () => {
  return (
    <AnimalsContainer>
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
    </AnimalsContainer>
  );
};

export default Animals;

const AnimalsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem 3rem;
`;

const CardsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

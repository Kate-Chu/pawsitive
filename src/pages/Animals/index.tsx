import { useState } from 'react';
import { flushSync } from 'react-dom';
import { useQuery } from '@tanstack/react-query';
import { styled } from '@linaria/react';
import { ThreeDots } from 'react-loader-spinner';

import { getAnimalData } from 'src/api/animals';
import Card from 'src/components/Card';
import ShadowButton from 'src/components/ButtonWithShadow';
import theme from 'src/styles/base';

const Animals = () => {
  const [count, setCount] = useState(20);

  const { data, isSuccess, isRefetching, refetch } = useQuery({
    queryKey: ['getAnimalData'],
    queryFn: () => getAnimalData(count),
  });

  const onClick = () => {
    flushSync(() => {
      setCount((prev) => prev + 20);
    });
    refetch();
  };

  return (
    <AnimalsContainer>
      <Title>所有動物</Title>
      <CardsContainer>
        {isSuccess ? (
          data.data.map((item) => {
            return (
              <Card
                key={item.animal_id}
                img={item.album_file}
                name={item.animal_Variety}
                place={item.animal_place.slice(0, 3)}
                updateDate={item.animal_update}
              />
            );
          })
        ) : (
          <SpinnerWrapper>
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color={theme.color.orange}
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              visible
            />
          </SpinnerWrapper>
        )}
        {isRefetching && (
          <SpinnerWrapper>
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color={theme.color.orange}
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              visible
            />
          </SpinnerWrapper>
        )}
      </CardsContainer>
      <ShadowButton onClick={onClick}>顯示更多內容</ShadowButton>
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

const SpinnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

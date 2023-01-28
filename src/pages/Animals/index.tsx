import { useState } from 'react';
import { flushSync } from 'react-dom';
import { useQuery } from '@tanstack/react-query';
import { styled } from '@linaria/react';
import { ThreeDots } from 'react-loader-spinner';

import { getAnimalData } from '../../api/animals';
import Card from '../../components/Card';
import ButtonWithShadow from '../../components/ShadowedButton';
import CircleButton from '../../components/CircleButton';
import theme from '../../styles/base';
import filterIcon from '../../assets/filter.svg';
import topIcon from '../../assets/top.svg';

const Animals = () => {
  const [count, setCount] = useState(20);

  const { data, isSuccess, isRefetching, refetch } = useQuery({
    queryKey: ['getAnimalData'],
    queryFn: () => getAnimalData(count),
  });

  const onClickFetchMore = () => {
    flushSync(() => {
      setCount((prev) => prev + 20);
    });
    refetch();
  };

  const onClickScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimalsContainer>
      <Title>所有動物</Title>
      <FilterBtnWrapper>
        <ButtonWithShadow className="darkBlue bg-white">
          <img src={filterIcon} alt="filter button" />
          <span>篩選</span>
        </ButtonWithShadow>
      </FilterBtnWrapper>
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
      <ButtonWithShadow onClick={onClickFetchMore} className="bg-orange white">
        顯示更多內容
      </ButtonWithShadow>
      <TopBtnWrapper>
        <CircleButton onClick={onClickScrollToTop}>
          <img src={topIcon} alt="return top" />
        </CircleButton>
      </TopBtnWrapper>
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
  position: relative;
`;

const Title = styled.header`
  align-self: flex-start;
  margin 1rem -1rem 1.5rem;
  ${theme.font.h6}
  
  ${theme.mediaQuery.tabLand} {
    display: none;
  }
`;

const FilterBtnWrapper = styled.div`
  margin: 0 0 1.5rem;
  align-self: flex-start;
  width: 10rem;
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

const TopBtnWrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;

  ${theme.mediaQuery.tabPort} {
    bottom: 4.5rem;
    right: 4.5rem;
  }

  ${theme.mediaQuery.tabLand} {
    bottom: 5rem;
    right: 5rem;
  }

  ${theme.mediaQuery.bigDesk} {
    bottom: 6rem;
    right: 6rem;
  }
`;

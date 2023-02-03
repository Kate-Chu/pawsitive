import { useState } from 'react';
import { flushSync } from 'react-dom';
import { useQuery } from '@tanstack/react-query';
import { styled } from '@linaria/react';
import { ThreeDots } from 'react-loader-spinner';

import ButtonWithShadow from '../../components/ShadowedButton';
import Card from '../../components/Card';
import CircleButton from '../../components/CircleButton';
import FilterBar from '../../components/FilterBar';
import useFavoriteStore from '../../store';
import { getAnimalData } from '../../api/animals';
import theme from '../../styles/base';
import filterIcon from '../../assets/filter.svg';
import returnTopIcon from '../../assets/top.svg';

const Animals = () => {
  const [count, setCount] = useState(40);
  const [showFilterBar, setShowFilterBar] = useState(false);
  const favorites = useFavoriteStore((state) => state.favorite);

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
    <S.PageWrapper>
      {showFilterBar && (
        <FilterBar
          className={showFilterBar ? 'w-20' : undefined}
          onClick={() => setShowFilterBar(false)}
        />
      )}
      <S.AnimalsContainer className={showFilterBar ? 'w-80' : 'w-full'}>
        <S.Title>所有動物</S.Title>
        {!showFilterBar && (
          <S.FilterBtnWrapper>
            <ButtonWithShadow
              className="darkBlue bg-white"
              onClick={() => setShowFilterBar(true)}
            >
              <img src={filterIcon} alt="filter button" />
              <span>篩選</span>
            </ButtonWithShadow>
          </S.FilterBtnWrapper>
        )}
        <S.CardsContainer>
          {isSuccess ? (
            data.data.slice(0, count - 20).map((item) => {
              return (
                <Card
                  key={item.animal_id}
                  id={item.animal_id}
                  img={item.album_file}
                  name={item.animal_Variety}
                  place={item.animal_place.slice(0, 3)}
                  updateDate={item.animal_update}
                  isFavorite={favorites.includes(item.animal_id)}
                />
              );
            })
          ) : (
            <S.SpinnerWrapper>
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color={theme.color.orange}
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                visible
              />
            </S.SpinnerWrapper>
          )}
          {isRefetching && (
            <S.SpinnerWrapper>
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color={theme.color.orange}
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                visible
              />
            </S.SpinnerWrapper>
          )}
        </S.CardsContainer>
        <ButtonWithShadow
          onClick={onClickFetchMore}
          className="bg-orange white"
        >
          顯示更多內容
        </ButtonWithShadow>
        <S.TopBtnWrapper>
          <CircleButton onClick={onClickScrollToTop}>
            <img src={returnTopIcon} alt="return top" />
          </CircleButton>
        </S.TopBtnWrapper>
      </S.AnimalsContainer>
    </S.PageWrapper>
  );
};

export default Animals;

const S = {
  PageWrapper: styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem 3rem 8rem;
  `,

  AnimalsContainer: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  `,

  Title: styled.header`
  align-self: flex-start;
  margin 1rem -1rem 1.5rem;
  ${theme.font.h6}
  
  ${theme.mediaQuery.tabLand} {
    display: none;
  }
`,

  FilterBtnWrapper: styled.div`
    margin: 0 0 1.5rem;
    align-self: flex-start;
    width: 10rem;
  `,

  CardsContainer: styled.section`
    margin: 0 0 2.5rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-shrink: 1;
  `,

  SpinnerWrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `,

  TopBtnWrapper: styled.div`
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
  `,
};

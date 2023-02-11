import { useState } from 'react';
import { flushSync } from 'react-dom';
import { useQuery } from '@tanstack/react-query';
import { styled } from '@linaria/react';
import { ThreeDots } from 'react-loader-spinner';

import ButtonWithShadow from '../../components/ShadowedButton';
import Card from '../../components/Card';
import CircleButton from '../../components/CircleButton';
import useFavoriteStore from '../../store/favoriteStore';
import theme from '../../styles/base';
import returnTopIcon from '../../assets/top.svg';
import { getAnimalData } from '../../api/animals';

const Animals = () => {
  const [count, setCount] = useState(40);
  const favorites = useFavoriteStore((state) => state.favorite);

  const { data, isSuccess, isRefetching, refetch } = useQuery({
    queryKey: ['getNewestData'],
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
      <S.AnimalsContainer className="w-full">
        <S.Title>所有動物</S.Title>
        <S.CardsContainer>
          {isSuccess ? (
            data?.data.slice(0, count - 20).map((item) => {
              return (
                <Card
                  key={item.animal_id}
                  id={item.animal_id}
                  img={item.album_file}
                  name={item.animal_Variety}
                  place={item.animal_place.slice(0, 3)}
                  updateDate={item.animal_update}
                  sex={item.animal_sex}
                  status={item.animal_status}
                  phone={item.shelter_tel}
                  variety={item.animal_Variety}
                  remark={item.animal_remark}
                  shelter={item.shelter_name}
                  isFavorite={favorites.some(
                    (fav) => fav.id === item.animal_id,
                  )}
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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-shrink: 1;
    margin: 0 0 2.5rem;
  `,

  SpinnerWrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `,

  TopBtnWrapper: styled.div`
    position: fixed;
    bottom: 4.5rem;
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

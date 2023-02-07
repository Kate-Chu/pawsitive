import { styled } from '@linaria/react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card';
import CircleButton from '../../components/CircleButton';
import theme from '../../styles/base';
import useFavoriteStore from '../../store/favoriteStore';
import replaceImg from '../../assets/image replace.svg';
import returnTopIcon from '../../assets/top.svg';

const Favorites = () => {
  const favorite = useFavoriteStore((state) => state.favorite);

  const onClickScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <S.PageWrapper>
      <S.FavoritesContainer className="w-full">
        <S.Title>我的收藏</S.Title>
        {favorite.length ? (
          <>
            <S.CardsContainer>
              {favorite.map((item) => {
                return (
                  <Card
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    sex={item.sex}
                    status={item.status}
                    phone={item.phone}
                    variety={item.variety}
                    remark={item.remark}
                    shelter={item.shelter}
                    place={item.place.slice(0, 3)}
                    updateDate={item.updateDate}
                    isFavorite
                  />
                );
              })}
            </S.CardsContainer>
            <S.TopBtnWrapper>
              <CircleButton onClick={onClickScrollToTop}>
                <img src={returnTopIcon} alt="return top" />
              </CircleButton>
            </S.TopBtnWrapper>
          </>
        ) : (
          <S.CtaContainer>
            <Card
              id={0}
              name="神奇的物種"
              place="外星球"
              img={replaceImg}
              sex="友善的性別"
              status="神秘的狀態"
              phone="00-1234-5678"
              variety="SSR"
              remark="柴氣降臨，貓肥家潤，帶我回家"
              shelter="神秘的收容所"
              updateDate="2222/12/25"
              isFavorite
            />
            <S.CTA>
              還沒有收藏的動物唷...
              <br />
              快去 <Link to="/animals">所有動物</Link> 看看吧 🐕 🐈
            </S.CTA>
          </S.CtaContainer>
        )}
      </S.FavoritesContainer>
    </S.PageWrapper>
  );
};

export default Favorites;

const S = {
  PageWrapper: styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem 3rem 8rem;
  `,

  FavoritesContainer: styled.section`
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

  CtaContainer: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;

    ${theme.mediaQuery.tabPort} {
      flex-direction: row;
      margin: 1rem;
      height: 87vh;
    }
  `,

  CTA: styled.section`
    margin: 2rem 0;
    color: ${theme.color.darkBlue};
    ${theme.font.h5}

    a {
      text-decoration: none;
      color: ${theme.color.gray[60]};
    }

    a:hover {
      color: ${theme.color.orange};
    }
    ${theme.mediaQuery.tabLand} {
      margin: 0 4rem 0;
      ${theme.font.h1}
    }
  `,
};

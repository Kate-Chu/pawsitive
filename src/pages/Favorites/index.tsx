import { styled } from '@linaria/react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import theme from '../../styles/base';
import replaceImg from '../../assets/image replace.svg';

const Favorites = () => {
  return (
    <S.FavoritesContainer>
      <S.Title>我的收藏</S.Title>
      <S.CardsContainer>
        <Card name="神奇的物種" place="外星球" img={replaceImg} isFavorite />
        <S.CTA>
          還沒有收藏的動物唷...
          <br />
          快去 <Link to="/animals">所有動物</Link> 看看吧 🐕 🐈
        </S.CTA>
      </S.CardsContainer>
    </S.FavoritesContainer>
  );
};

export default Favorites;

const S = {
  FavoritesContainer: styled.section`
    width: 100%;
    margin-left: -1rem;
    padding: 0 3rem;

    ${theme.mediaQuery.desk} {
      margin-left: 0rem;
      padding: 0 10rem;
    }
  `,

  CardsContainer: styled.section`
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

  Title: styled.header`
  align-self: flex-start;
  margin 1rem -1rem 1.5rem;
  ${theme.font.h6}
  
  ${theme.mediaQuery.tabLand} {
    display: none;
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

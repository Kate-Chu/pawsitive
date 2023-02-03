import React from 'react';
import { styled } from '@linaria/react';

import useFavoriteStore from '../../store';
import theme from '../../styles/base';
import moreIcon from '../../assets/more.svg';
import replaceImage from '../../assets/image replace.svg';
import likeIcon from '../../assets/like.svg';
import unlikeIcon from '../../assets/unlike.svg';

type CardProps = {
  id?: number;
  img: string;
  name: string;
  place: string;
  updateDate?: string;
  isFavorite?: boolean;
};

const Card: React.FC<CardProps> = (props) => {
  const { id, img, name, place, updateDate, isFavorite } = props;
  const addFav = useFavoriteStore((state) => state.add);
  const removeFav = useFavoriteStore((state) => state.remove);

  const handleHeartClick = () => {
    if (id) {
      if (isFavorite) {
        removeFav(id);
      } else {
        addFav(id);
      }
    }
  };

  return (
    <S.AnimalData>
      <S.CardContainer>
        <S.AnimalImg src={img.length ? img : replaceImage} alt="animal" />
        <S.HeartButton onClick={handleHeartClick}>
          <img src={isFavorite ? likeIcon : unlikeIcon} alt="favorite icon" />
        </S.HeartButton>
        <S.AnimalName>{name}</S.AnimalName>
        <S.AnimalInfo>
          <p>{place}</p>
          <span>
            <img src={moreIcon} alt="more info" />
          </span>
        </S.AnimalInfo>
      </S.CardContainer>
      <S.UpdatedDate>
        <strong>更新日期</strong>
        <span>{updateDate ? updateDate.replaceAll('/', '-') : '未知'}</span>
      </S.UpdatedDate>
    </S.AnimalData>
  );
};

export default Card;

const S = {
  AnimalData: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0.2rem 0;
    width: 100%;

    ${theme.mediaQuery.tabPort} {
      width: 50%;
    }

    ${theme.mediaQuery.tabLand} {
      margin: 1.6rem;
      width: 27%;
    }

    ${theme.mediaQuery.desk} {
      margin: 1.8rem;
      width: 20%;
    }
  `,

  CardContainer: styled.section`
  height: 23rem;
  width: 16rem;
  border-radius: 0.3rem;
  border: 2px solid ${theme.color.darkBlue};
  color: ${theme.color.darkBlue};
  background-color: ${theme.color.white};
  position: relative;
  z-index: auto;

  ::after {
    content: '';
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 1.1rem;
    top: 1.1rem;
    border: 2px solid ${theme.color.darkBlue};
    border-radius: 0.3rem;
    background-color: ${theme.color.orange};
    z-index: -1;
`,

  AnimalImg: styled.img`
    height: 75%;
    width: 100%;
    object-fit: cover;
    position: relative;
  `,

  HeartButton: styled.button`
    background-color: transparent;
    border: none;
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
  `,

  AnimalName: styled.h6`
    margin: 1rem 1rem 0;
    ${theme.font.h6}
  `,

  AnimalInfo: styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem 1rem;
    ${theme.font.p}

    span {
      width: 1.5rem;
      cursor: pointer;
    }
  `,

  UpdatedDate: styled.p`
    margin-top: 2rem;
    margin-bottom: 1rem;
    text-align: center;
    color: ${theme.color.darkBlue};

    strong {
      font-weight: 700;
    }

    span {
      margin-left: 1rem;
    }

    svg {
      stroke: ${theme.color.darkBlue};
    }

    ${theme.mediaQuery.tabLand} {
      text-align: left;
      width: 85%;
      margin-bottom: 0;
    }
  `,
};

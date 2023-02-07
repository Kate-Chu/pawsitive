import React, { useState } from 'react';
import { styled } from '@linaria/react';

import useFavoriteStore from '../../store/favoriteStore';
import theme from '../../styles/base';
import moreIcon from '../../assets/more.svg';
import replaceImage from '../../assets/image replace.svg';
import likeIcon from '../../assets/like.svg';
import unlikeIcon from '../../assets/unlike.svg';
import { ReactComponent as CrossIcon } from '../../assets/cross.svg';

type CardProps = {
  id: number;
  img: string;
  name: string;
  place: string;
  sex: string;
  status: string;
  phone: string;
  variety: string;
  remark: string;
  shelter: string;
  updateDate: string;
  isFavorite?: boolean;
};

const getSex = (str: string) => {
  switch (str) {
    case 'M':
      return '公';
    case 'F':
      return '母';
    default:
      return '未知';
  }
};

const getStatus = (str: string) => {
  switch (str) {
    case 'NONE':
      return '未公告';
    case 'OPEN':
      return '開放認養';
    case 'ADOPTED':
      return '已認養';
    case 'DEAD':
      return '死亡';
    default:
      return '其他';
  }
};

const Card: React.FC<CardProps> = (props) => {
  const {
    id,
    img,
    name,
    place,
    sex,
    status,
    phone,
    variety,
    remark,
    shelter,
    updateDate,
    isFavorite,
  } = props;
  const [showFront, setShowFront] = useState(true);
  const addFav = useFavoriteStore((state) => state.add);
  const removeFav = useFavoriteStore((state) => state.remove);

  const onClickHeart = () => {
    if (id) {
      if (isFavorite) {
        removeFav(id);
      } else {
        addFav({
          id,
          img,
          name,
          place,
          sex,
          status,
          phone,
          variety,
          remark,
          shelter,
          updateDate,
        });
      }
    }
  };

  return (
    <S.AnimalData>
      <S.CardContainer>
        {showFront ? (
          <S.CardFront>
            <S.AnimalImg
              src={img.length ? img : replaceImage}
              alt="animal"
              sizes="(max-width: 640px) 80vw, 33vw"
            />
            <S.HeartButton onClick={onClickHeart}>
              <img
                src={isFavorite ? likeIcon : unlikeIcon}
                alt="favorite icon"
              />
            </S.HeartButton>
            <S.AnimalName>{name}</S.AnimalName>
            <S.AnimalInfo>
              <p>{place}</p>
              <button onClick={() => setShowFront(false)}>
                <img src={moreIcon} alt="more info" />
              </button>
            </S.AnimalInfo>
          </S.CardFront>
        ) : (
          <S.CardBack>
            <S.CardBackTop>
              <button onClick={() => setShowFront(true)}>
                <CrossIcon fill={theme.color.darkBlue} />
              </button>
            </S.CardBackTop>
            <S.CardBackBody>
              <h6>{shelter}</h6>
              <p>
                <strong>電話</strong>
                {phone}
              </p>
              <p>
                <strong>種類</strong>
                {variety}
              </p>
              <p>
                <strong>性別</strong>
                {getSex(sex)}
              </p>
              <p>
                <strong>狀態</strong>
                {getStatus(status)}
              </p>
              <p>
                <strong>備註</strong>
                {remark}
              </p>
            </S.CardBackBody>
          </S.CardBack>
        )}
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
  `,

  CardFront: styled.section`
    width: 100%;
    height: 100%;

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
    }
  `,

  CardBack: styled.section`
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem 1.2rem;
    height: 100%;
    background-color: ${theme.color.orange};

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
      background-color: ${theme.color.darkCyan};
      z-index: -1;
    }
  `,

  CardBackTop: styled.section`
    height: 15%;
    display: flex;
    align-self: flex-end;

    button {
      display: inline-block;
      border: none;
      background-color: transparent;
      width: 1.5rem;
      height: 1.5rem;
      cursor: pointer;

      ${theme.mediaQuery.tabPort} {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  `,

  CardBackBody: styled.section`
    background-color: ${theme.color.white};
    height: 90%;
    border-radius: 0.3rem;
    padding: 0.5rem;
    line-height: 2;

    h6 {
      display: flex;
      justify-content: center;
      ${theme.font.h5};
    }

    p {
      ${theme.font.p}
      font-weight: 500;
    }

    strong {
      font-weight: 700;
      margin-right: 1rem;
    }
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

    img {
      width: 100%;
      height: 100%;
    }
  `,

  AnimalName: styled.h6`
    margin: 0.6rem 1rem 0;
    ${theme.font.h6}
  `,

  AnimalInfo: styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem 1.2rem;
    ${theme.font.p}

    button {
      width: 1.7rem;
      cursor: pointer;
      border: none;
      background-color: transparent;

      img {
        width: 100%;
        height: 100%;
      }
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

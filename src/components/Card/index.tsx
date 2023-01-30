import React from 'react';
import { styled } from '@linaria/react';
import theme from '../../styles/base';
import moreIcon from '../../assets/more.svg';
import replaceImage from '../../assets/image replace.svg';

type CardProps = {
  img: string;
  name: string;
  place: string;
  updateDate?: string;
};

const Card: React.FC<CardProps> = (props) => {
  const { img, name, place, updateDate } = props;

  return (
    <AnimalData>
      <CardContainer>
        <AnimalImg src={img.length ? img : replaceImage} alt="animal" />
        <AnimalName>{name}</AnimalName>
        <AnimalInfo>
          <p>{place}</p>
          <span>
            <img src={moreIcon} alt="more info" />
          </span>
        </AnimalInfo>
      </CardContainer>
      <UpdatedDate>
        <strong>更新日期</strong>
        <span>{updateDate ? updateDate.replaceAll('/', '-') : '未知'}</span>
      </UpdatedDate>
    </AnimalData>
  );
};

export default Card;

const AnimalData = styled.section`
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
`;

const CardContainer = styled.section`
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
`;

const AnimalImg = styled.img`
  height: 75%;
  width: 100%;
  object-fit: cover;
`;

const AnimalName = styled.h6`
  margin: 1rem 1rem 0;
  ${theme.font.h6}
`;

const AnimalInfo = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem 1rem;
  ${theme.font.p}

  span {
    width: 1.5rem;
    cursor: pointer;
  }
`;

const UpdatedDate = styled.p`
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
`;

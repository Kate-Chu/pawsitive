import { useState } from 'react';
import { styled } from '@linaria/react';

import theme from '../../styles/base';
import animalImage from '../../assets/image replace.svg';
import arrow from '../../assets/arrow.svg';
import cat1Sm from '../../assets/homepage-imgs/cat-1-640.jpg';
import cat1Md from '../../assets/homepage-imgs/cat-1-768.jpg';
import cat1Lg from '../../assets/homepage-imgs/cat-1-1024.jpg';
import cat2Sm from '../../assets/homepage-imgs/cat-2-640.jpg';
import cat2Md from '../../assets/homepage-imgs/cat-2-768.jpg';
import cat2Lg from '../../assets/homepage-imgs/cat-2-1024.jpg';
import dog1Sm from '../../assets/homepage-imgs/dog-1-640.jpg';
import dog1Md from '../../assets/homepage-imgs/dog-1-768.jpg';
import dog1Lg from '../../assets/homepage-imgs/dog-1-1024.jpg';
import dog2Sm from '../../assets/homepage-imgs/dog-2-640.jpg';
import dog2Md from '../../assets/homepage-imgs/dog-2-768.jpg';
import dog2Lg from '../../assets/homepage-imgs/dog-2-1024.jpg';

const Carousal = () => {
  const [imageIdx, setImageIdx] = useState(0);
  const images = [
    {
      sm: dog1Sm,
      md: dog1Md,
      lg: dog1Lg,
    },
    {
      sm: cat1Sm,
      md: cat1Md,
      lg: cat1Lg,
    },
    {
      sm: dog2Sm,
      md: dog2Md,
      lg: dog2Lg,
    },
    {
      sm: cat2Sm,
      md: cat2Md,
      lg: cat2Lg,
    },
  ];

  const onClick = (btn: 'prev' | 'next') => {
    if (btn === 'prev') {
      setImageIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setImageIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <S.CarousalWrapper>
      {images.map((item) => {
        return (
          <div
            key={item.sm}
            style={{ transform: `translate(-${imageIdx * 100}%)` }}
          >
            <picture>
              <source media="(min-width: 640px)" srcSet={item.sm} />
              <source media="(min-width: 768px)" srcSet={item.md} />
              <source media="(min-width: 1024px)" srcSet={item.lg} />
              <img src={animalImage} alt="animal" />
            </picture>
          </div>
        );
      })}

      <S.ChangeImgButton
        className="previous-btn"
        onClick={() => onClick('prev')}
      >
        <img src={arrow} alt="previous" />
      </S.ChangeImgButton>
      <S.ChangeImgButton className="next-btn" onClick={() => onClick('next')}>
        <img src={arrow} alt="next" />
      </S.ChangeImgButton>
    </S.CarousalWrapper>
  );
};

export default Carousal;

const S = {
  CarousalWrapper: styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    over-flow: hidden;
    border: 2px solid ${theme.color.darkBlue};
    box-shadow: 1.5rem 1.5rem 0 ${theme.color.orange};

    ${theme.mediaQuery.tabLand} {
      width: 80%;
    }

    div {
      display: flex;
      transition: 1s cubic-bezier(0.39, 0.575, 0.565, 1);
    }

    picture,
    picture source,
    picture img {
      width: 18rem;
      height: 18rem;
      object-fit: cover;

      ${theme.mediaQuery.tabPort} {
        height: 30rem;
        width: 30rem;
      }

      ${theme.mediaQuery.tabLand} {
        height: 30rem;
        width: 35rem;
      }
    }
  `,

  ChangeImgButton: styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  width: 1.8rem;
  background-color: transparent;
  height: min-content;
  position absolute;
  border: none;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  &.previous-btn {
    left: 5%;
  }

  &.next-btn {
    right: 5%;
    transform: translateY(-50%) rotate(180deg);
  }

  ${theme.mediaQuery.tabPort} {
     width: 2.2rem;
  }
`,
};

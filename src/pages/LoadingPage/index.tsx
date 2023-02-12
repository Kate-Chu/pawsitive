import { useEffect, useState } from 'react';
import { styled } from '@linaria/react';

import theme from 'src/styles/base';
import dog from '../../assets/dog.svg';
import footprint from '../../assets/browser-icon.svg';

type showFootprintType = string[];

let index = 0;
const walkingFootprint = [0, 1, 3, 7, 15];

const turnBinary = (num: number) => {
  return num.toString(2).padStart(4, '0').split('');
};

const LoadingPage = () => {
  const [showFootprint, setShowFootprint] = useState<showFootprintType>(
    turnBinary(walkingFootprint[index]),
  );

  useEffect(() => {
    const id = setInterval(() => {
      if (index >= walkingFootprint.length - 1) {
        index = 0;
      } else {
        index += 1;
      }
      console.log(index);
      setShowFootprint(turnBinary(walkingFootprint[index]));
    }, 500);

    return () => clearInterval(id);
  });

  const footprints = showFootprint.map((item, i) => {
    return (
      <S.Image
        src={footprint}
        alt="footprint"
        className={`footprint footprint-${i} ${
          Number(item) ? undefined : 'invisible'
        }`}
      />
    );
  });

  return (
    <S.LoadingPageContainer>
      <S.Image src={dog} alt="dog" className="dog" />
      <S.Text>Loading...</S.Text>
      {footprints}
    </S.LoadingPageContainer>
  );
};

export default LoadingPage;

const S = {
  LoadingPageContainer: styled.div`
    margin: 8rem 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    letter-spacing: 0.1rem;
  `,

  Text: styled.h1`
    margin: 0 1rem 0 2rem;
    ${theme.font.h6}

    span {
      display: inline-block;
    }

    ${theme.mediaQuery.tabPort} {
      margin-left: 3rem;
      ${theme.font.h4}
    }
    ${theme.mediaQuery.tabLand} {
      margin: 0 1rem 0 5rem;
      ${theme.font.h1}
    }
  `,

  Image: styled.img`
    width: 4rem;
    z-index: 2;

    &.invisible {
      visibility: hidden;
    }

    &.cat {
      display: none;
    }

    &.footprint {
      width: 1.5rem;
      margin-left: 1.4rem;
      transform: rotate(-45deg);

      ${theme.mediaQuery.tabLand} {
        width: 2rem;
        margin-left: 2rem;
      }
    }

    &.footprint-1 {
      transform: translateY(-2rem) rotate(-45deg);
    }

    &.footprint-3 {
      transform: translateY(-2rem) rotate(-45deg);
    }

    ${theme.mediaQuery.tabLand} {
      width: 8rem;

      &.cat {
        display: inline-block;
      }
    }

    ${theme.mediaQuery.desk} {
      width: 10rem;
    }
  `,
};

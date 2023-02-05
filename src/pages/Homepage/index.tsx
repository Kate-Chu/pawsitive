import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { styled } from '@linaria/react';

import Carousal from '../../components/Carousal';
import theme from '../../styles/base';
import placeData from './data';
import { getAnimalData } from '../../api/animals';
import { ReactComponent as TaiwanMap } from '../../assets/tw.svg';

const Homepage = () => {
  const [selectCity, setSelectCity] = useState<string>('taipei_city');

  const { data: animalData, isSuccess: isAnimalSuccess } = useQuery({
    queryKey: ['getNewestData'],
    queryFn: () => getAnimalData(20),
  });

  if (isAnimalSuccess) {
    console.log('animalData', animalData.data);
  }

  const onHover = () => {
    const paths = document.querySelectorAll('path');
    paths.forEach((path) => {
      path.addEventListener('mouseenter', () => {
        const tagname = path.getAttribute('data-name');
        if (tagname) {
          setSelectCity(tagname);
        }
      });
    });
  };

  const mouseOutHandler = () => {
    const paths = document.querySelectorAll('path');
    paths.forEach((path) => {
      path.removeEventListener('mouseenter', () => {
        const tagname = path.getAttribute('data-name');
        if (tagname) {
          setSelectCity(tagname);
        }
      });
    });
  };

  const shelters = Object.keys(placeData.get(selectCity).shelters);

  return (
    <S.HomepageContainer>
      <S.FeatureSection>
        <S.Description>
          <h1>為你尋找最適合的牠</h1>
          <h4>24 小時線上查看</h4>
          <p>
            工作太忙？內建社恐？不想出門？
            <br />
            在這裡可以隨時查看最新的動物資訊
          </p>
          <h4>狗派？貓派？</h4>
          <p>
            不管是柴氣沖天，還是貓肥家潤
            <br />
            帶牠回家就對了
          </p>
        </S.Description>
        <S.CarousalSection>
          <Carousal />
        </S.CarousalSection>
      </S.FeatureSection>
      <S.MapSection>
        <S.MapContainer>
          <TaiwanMap onMouseEnter={onHover} onMouseOut={mouseOutHandler} />
        </S.MapContainer>
        <S.Description>
          <h2>{placeData.get(selectCity).place}</h2>
          {shelters.length && shelters.map((item) => <p>{item}</p>)}
        </S.Description>
      </S.MapSection>
    </S.HomepageContainer>
  );
};

export default Homepage;

const S = {
  HomepageContainer: styled.section`
    padding: 2rem 1rem 1rem;
    width: 100%;

    ${theme.mediaQuery.tabPort} {
      padding-top: 3rem;
    }

    ${theme.mediaQuery.tabLand} {
      padding: 2rem 5rem 3rem;
    }
  `,

  FeatureSection: styled.section`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    ${theme.mediaQuery.tabPort} {
      gap: 4rem;
    }

    ${theme.mediaQuery.tabLand} {
      margin-bottom: 4rem;
      flex-direction: row;
      gap: 5rem;
    }
  `,

  Description: styled.section`
    width: 100%;
    padding: 1rem;

    ${theme.mediaQuery.tabLand} {
      padding: 3rem;
      width: 40%;
    }

    h1 {
      margin: 1rem 0;
      ${theme.font.h1}
    }

    h2 {
      margin: 0.9rem 0;
      ${theme.font.h2}
    }

    h4 {
      margin: 0.8rem 0;
      ${theme.font.h4}
    }

    p {
      margin: 0.6rem 0;
      ${theme.font.p}
      font-size: 1.25rem;
    }
  `,

  CarousalSection: styled.section`
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    height: 18rem;
    width: 18rem;

    ${theme.mediaQuery.tabPort} {
      height: 30rem;
      width: 30rem;
    }

    ${theme.mediaQuery.tabLand} {
      height: 30rem;
      width: 35rem;
    }
  `,

  MapSection: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    ${theme.mediaQuery.tabLand} {
      margin-bottom: 4rem;
      flex-direction: row;
      gap: 5rem;
    }
  `,

  MapContainer: styled.div`
    width: 100%;
    padding: 2rem;

    ${theme.mediaQuery.tabLand} {
      padding: 2rem 4rem;
      width: 50%;
    }

    path {
      stroke: ${theme.color.white};
      fill: ${theme.color.orange};
      cursor: pointer;

      :hover {
        fill: ${theme.color.darkCyan};
      }
    }
  `,
};

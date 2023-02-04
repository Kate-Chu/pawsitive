import { useQuery } from '@tanstack/react-query';
import { styled } from '@linaria/react';
import { getAnimalData } from 'src/api/animals';
import Carousal from '../../components/Carousal';
// import useFavoriteStore from '../../store';
import theme from '../../styles/base';
import mapImage from '../../assets/taiwan.svg';

const Homepage = () => {
  useQuery({
    queryKey: ['getAnimalData'],
    queryFn: () => getAnimalData(20),
  });

  return (
    <S.HomepageContainer>
      <S.Section>
        <S.Description>
          <h1>為你尋找最適合的牠</h1>
          <h4>24 小時線上查看</h4>
          <p>
            白天工作沒有時間親自前往看看心儀的牠嗎？沒問題，您可以先在線上查看喜歡的寵物，之後再預約前往
          </p>
          <h4>狗派？貓派？</h4>
          <p>貓肥家潤，財氣沖天，帶牠回家</p>
        </S.Description>
        <S.CarousalSection>
          <Carousal />
        </S.CarousalSection>
      </S.Section>
      <S.Section>
        <S.MapContainer>
          <img src={mapImage} alt="Taiwan map" />
        </S.MapContainer>
        <S.Description>
          <h2>台北市</h2>
          <p>動物之家: 222</p>
          <p>動物保護教育園區: 8888</p>
          <p>動物收容中心: 132</p>
        </S.Description>
      </S.Section>
    </S.HomepageContainer>
  );
};

export default Homepage;

const S = {
  HomepageContainer: styled.section`
    padding: 1rem;
    width: 100%;

    ${theme.mediaQuery.tabLand} {
      padding: 2rem 5rem 3rem;
    }
  `,

  Section: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
    gap: 1rem;

    ${theme.mediaQuery.tabLand} {
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
    width: 60%;
  `,

  MapContainer: styled.div`
    width: 25rem;
    padding: 2rem 4rem;

    ${theme.mediaQuery.tabLand} {
      padding: 2rem;
    }
  `,
};

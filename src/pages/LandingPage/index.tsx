import { styled } from '@linaria/react';
import Carousal from 'src/components/Carousal';
import theme from 'src/styles/base';
import mapImage from '../../assets/taiwan.svg';

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Section>
        <Description>
          <h1>為你尋找最適合的牠</h1>
          <h4>24 小時線上查看</h4>
          <p>
            白天工作沒有時間親自前往看看心儀的牠嗎？沒問題，您可以先在線上查看喜歡的寵物，之後再預約前往
          </p>
          <h4>狗派？貓派？</h4>
          <p>貓肥家潤，財氣沖天，帶牠回家</p>
        </Description>
        <CarousalSection>
          <Carousal />
        </CarousalSection>
      </Section>
      <Section>
        <MapContainer>
          <img src={mapImage} alt="Taiwan map" />
        </MapContainer>
        <Description>
          <h2>台北市</h2>
          <p>動物之家: 222</p>
          <p>動物保護教育園區: 8888</p>
          <p>動物收容中心: 132</p>
        </Description>
      </Section>
    </LandingPageContainer>
  );
};

const LandingPageContainer = styled.section`
  padding: 1rem;
  width: 100%;

  ${theme.mediaQuery.tabLand} {
    padding: 2rem 5rem 3rem;
  }
`;

const Section = styled.section`
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
`;

const Description = styled.section`
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
`;

const CarousalSection = styled.section`
  display: flex;
  justify-content: center;
  width: 60%;
`;

const MapContainer = styled.div`
  width: 25rem;
  padding: 2rem 4rem;

  ${theme.mediaQuery.tabLand} {
    padding: 2rem;
  }
`;

export default LandingPage;

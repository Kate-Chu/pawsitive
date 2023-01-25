import { styled } from '@linaria/react';
import { Link } from 'react-router-dom';
import Card from 'src/components/Card';
import theme from 'src/styles/base';
import replaceImg from '../../assets/image replace.svg';

const Favorites = () => {
  return (
    <AnimalsContainer>
      <Card name="神奇的物種" place="外星球" img={replaceImg} />
      <CTA>
        還沒有收藏的動物唷...
        <br />
        快去 <Link to="/animals">所有動物</Link> 看看吧 🐕 🐈
      </CTA>
    </AnimalsContainer>
  );
};

const AnimalsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4rem;
  height: 80vh;

  ${theme.mediaQuery.tabPort} {
    flex-direction: row;
    margin: 1rem;
    height: 87vh;
  }
`;

const CTA = styled.section`
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
`;

export default Favorites;

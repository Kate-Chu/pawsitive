import { styled } from '@linaria/react';
import theme from '../../styles/base';
import animalImage from '../../assets/image replace.svg';
import arrow from '../../assets/arrow.svg';

const Carousal = () => {
  return (
    <CarousalWrapper>
      <img src={animalImage} alt="animal" />
      <ChangeImgButton className="previous-btn">
        <img src={arrow} alt="previous" />
      </ChangeImgButton>
      <ChangeImgButton className="next-btn">
        <img src={arrow} alt="next" />
      </ChangeImgButton>
    </CarousalWrapper>
  );
};

const CarousalWrapper = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  border: 2px solid ${theme.color.darkBlue};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 1.5rem 1.5rem 0 ${theme.color.orange};

  ${theme.mediaQuery.tabLand} {
    width: 80%;
  }
`;

const ChangeImgButton = styled.button`
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
`;

export default Carousal;

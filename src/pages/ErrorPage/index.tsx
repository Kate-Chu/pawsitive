import { useState } from 'react';
import { styled } from '@linaria/react';
import { useNavigate } from 'react-router-dom';

import Board from '../../components/Board';
import theme from '../../styles/base';
import dog from '../../assets/dog.svg';
import cat from '../../assets/cat.svg';
import food from '../../assets/food-icon_2.svg';
import footPrint from '../../assets/browser-icon.svg';

const ErrorPage = () => {
  const [second, setSecond] = useState(3);
  const navigate = useNavigate();

  setInterval(() => {
    setSecond((prev) => Math.max(0, prev - 1));
  }, 1000);

  setTimeout(() => {
    navigate('/home');
  }, 3000);

  return (
    <S.ErrorPageContainer>
      <S.Illustration>
        <img src={dog} alt="dog" className="dog" />
        <img src={food} alt="food" className="dog-food" />
        <img src={food} alt="food" className="cat-food" />
        <img src={cat} alt="cat" className="cat" />
      </S.Illustration>

      <Board>
        <h3>
          Hi, 好像有什麼地方出錯囉！
          <br />
          請稍後再試試看，或是聯絡我們，謝謝！
          <br />
          {second} 秒後將為您自動跳轉回所有動物頁面
          <S.Icon>
            <img src={footPrint} alt="footprinticon" />
          </S.Icon>
        </h3>
      </Board>
    </S.ErrorPageContainer>
  );
};

export default ErrorPage;

const S = {
  ErrorPageContainer: styled.article`
    width: 100%;
    margin-left: -1rem;
    margin-top: 5rem;
    padding: 3rem;

    ${theme.mediaQuery.desk} {
      margin-left: 0rem;
      padding: 0 10rem;
    }
  `,

  Illustration: styled.section`
    height: max-content;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;

    & .dog,
    & .cat {
      width: 6rem;
      z-index: 2;

      ${theme.mediaQuery.tabLand} {
        width: 10rem;
      }

      ${theme.mediaQuery.desk} {
        width: 12rem;
      }
    }

    & .dog-food,
    & .cat-food {
      display: none;
      z-index: 1;

      ${theme.mediaQuery.tabLand} {
        display: inline-block;
        width: 6rem;
        position: absolute;

        &.dog-food {
          left: 20%;
        }

        &.cat-food {
          right: 20%;
          top: 60%;
        }
      }
    }
  `,

  Icon: styled.span`
    margin-left: 0.5rem;
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    position: relative;

    ::after {
      content: inherit;
      position: absolute;
      top: 10%;
      left: 100%;
      width: 100%;
      height: 100%;
      display: inline-block;
    }
  `,
};

import { styled } from '@linaria/react';
import Board from '../../components/Board';
import theme from '../../styles/base';
import dog from '../../assets/dog.svg';
import cat from '../../assets/cat.svg';
import food from '../../assets/food-icon_2.svg';
import footprint from '../../assets/browser-icon.svg';

const Tutorial = () => {
  return (
    <S.TutorialContainer>
      <S.Title>領養流程</S.Title>
      <S.Illustration>
        <img src={dog} alt="dog" className="dog" />
        <img src={food} alt="food" className="dog-food" />
        <img src={food} alt="food" className="cat-food" />
        <img src={cat} alt="cat" className="cat" />
      </S.Illustration>

      <Board>
        <h4>
          <span>
            <img src={footprint} alt="icon" />
          </span>
          <strong>Step 1：</strong>
          初遇
        </h4>
        <p>參訪犬舍／貓舍，挑選速配的狗狗／貓咪</p>
        <h4>
          <span>
            <img src={footprint} alt="icon" />
          </span>
          <strong>Step 2：</strong>填寫申請書與核對身份
        </h4>
        <p>填寫認養申請書，核對申請書及飼主身分證明文件</p>
        <h4>
          <span>
            <img src={footprint} alt="icon" />
          </span>
          <strong>Step 3：</strong>認養諮詢與法令宣導
        </h4>
        <p>填寫認養申請書，核對申請書及飼主身分證明文件</p>
        <h4>
          <span>
            <img src={footprint} alt="icon" />
          </span>
          <strong>Step 4：</strong>健康檢查
        </h4>
        <p>獸醫師檢查動物健康、植入晶片及寵物登記、狂犬病預防注射</p>
        <h4>
          <span>
            <img src={footprint} alt="icon" />
          </span>
          <strong>Step 5：</strong>諮詢協助服務
        </h4>
        <p>獸醫師為您說明動物的健康狀況</p>
        <h4>
          <span>
            <img src={footprint} alt="icon" />
          </span>
          <strong>Step 6：</strong>帶毛孩回家
        </h4>
        <h6>狗派</h6>
        <p>幫狗狗繫妥犬練或裝置於適當籠具，安全地將牠帶回家</p>
        <h6>貓派</h6>
        <p>
          將貓咪裝置於硬式的運輸籠具，可以防止貓咪驚嚇逃脫，安全地將牠帶回家
        </p>
      </Board>
    </S.TutorialContainer>
  );
};

export default Tutorial;

const S = {
  TutorialContainer: styled.article`
    width: 100%;
    padding: 0 3rem;

    ${theme.mediaQuery.desk} {
      margin-left: 0rem;
      padding: 0 10rem;
    }

    h4 strong {
      display: none;

      ${theme.mediaQuery.tabPort} {
        display: inline;
      }
    }

    span {
      display: inline-block;
      width: 1.2rem;
      height: 1.2rem;
      margin-right: 0.5rem;
    }

    h6 {
      margin-left: 0rem;
      ${theme.mediaQuery.tabPort} {
        margin-left: 1.6rem;
      }
    }

    p {
      margin-left: 0rem;
      ${theme.mediaQuery.phone} {
        margin-left: 2.2rem;
      }
    }
  `,

  Title: styled.header`
  margin 1rem -1rem 1.5rem;
  ${theme.font.h6}
  
  ${theme.mediaQuery.tabLand} {
    display: none;
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
};

import { styled } from '@linaria/react';
import Board from '../../components/Board';
import theme from '../../styles/base';
import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';
import { ReactComponent as MediumIcon } from '../../assets/medium.svg';

const AboutUs = () => {
  return (
    <S.AboutUsContainer>
      <S.Title>關於我們</S.Title>
      <S.SubTitle>想要物盡其用的緣起</S.SubTitle>
      <Board>
        <p>
          Hi, 這是一個新手工程師邀約（拐騙）其朋朋 a.k.a.
          一位可愛的設計師，在年假期間不眠不休產生的作品。
          <br />
          所以這是一個告訴我們朋友要慎選的故事。
          <br />
          <s>
            <strong>The End。</strong>
          </s>
        </p>
        <p>
          啊，不是，總之，
          <br />
          這個簡單的小網站是希望在練習寫 code
          之餘，能夠再多發揮一點功用、讓更多人看到待領養的毛孩們，
          <br />
          如果也能幫助你找到喜愛、能夠陪伴你的毛孩，那就更好了！
          <br />
          這樣想的話，似乎也可以說是一個貪心的緣起 (*´艸`*)
          <br />
          收容所的動物資料皆來自
          <a
            target="_blank"
            href="https://data.coa.gov.tw/open_detail.aspx?id=QcbUEzN6E6DL"
            rel="noreferrer"
          >
            行政院農委會的公開 api
          </a>
          ，感謝每日默默上傳資料的幕後工作人員。
          <br />
        </p>
        <p>
          如果想看更多可愛設計師的作品，請走這邊
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/hsiaoju_ko/"
          >
            <S.Icon>
              <InstagramIcon fill={theme.color.orange} />
            </S.Icon>
            <strong>HsiaoJu</strong>
          </a>
          <br />
          網站會持續（緩慢）地更新，如果有任何 bug 或是建議，都歡迎留言或者發 PR
          告訴我
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Kate-Chu/pawsitive"
          >
            <S.Icon>
              <GithubIcon fill={theme.color.darkBlue} />
            </S.Icon>
            <strong>GitHub</strong>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://medium.com/@amber.fragments"
          >
            <S.Icon>
              <MediumIcon fill={theme.color.darkBlue} />
            </S.Icon>
            <strong>Medium</strong>
          </a>
          <br />
          非常感謝！
        </p>
      </Board>
    </S.AboutUsContainer>
  );
};

export default AboutUs;

const S = {
  AboutUsContainer: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 3rem;
    margin: 0 auto 2rem;

    ${theme.mediaQuery.desk} {
      margin-left: 0rem;
      padding: 0 10rem;
    }

    a:link,
    a:visited,
    a:active {
      color: ${theme.color.gray[80]};
      text-decoration: none;
      font-weight: 500;
      margin: 0 0.2rem;
    }

    a: hover {
      color: ${theme.color.orange};
    }
  `,

  Title: styled.header`
  align-self: flex-start;
  margin 1rem -1rem;
  ${theme.font.h6}
  
  ${theme.mediaQuery.tabLand} {
    display: none;
  }
`,

  SubTitle: styled.h3`
    align-self: flex-start;
    margin-bottom: 1.5rem;
    ${theme.font.h3}
  `,

  Icon: styled.span`
    display: inline-block;
    vertical-align: middle
    width: 1.5rem;
    margin: 0 0.5rem;
    cursor: pointer;
  `,
};

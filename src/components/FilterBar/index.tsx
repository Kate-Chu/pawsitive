import React from 'react';
import { styled } from '@linaria/react';

import ShadowedButton from '../ShadowedButton';
import theme from '../../styles/base';
import filterIcon from '../../assets/filter.svg';

type FilterBarProps = {
  className: string | undefined;
};

const FilterBar: React.FC<FilterBarProps> = (props) => {
  const { className } = props;

  return (
    <S.FilterBarWrapper className={className}>
      <S.FilterBarTop>
        <img src={filterIcon} alt="filter" />
        <span>篩選</span>
      </S.FilterBarTop>
      <S.FilterBarBtnMain>
        <ShadowedButton className="bg-orange white">狗</ShadowedButton>
        <ShadowedButton>貓</ShadowedButton>
      </S.FilterBarBtnMain>
      <S.FilterBarBtnSub>
        <p>品種</p>
        <section>
          <ShadowedButton>混種</ShadowedButton>
          <ShadowedButton>神秘的</ShadowedButton>
          <ShadowedButton>很神秘的</ShadowedButton>
          <ShadowedButton>台灣的</ShadowedButton>
          <ShadowedButton className="bg-orange white">日本的</ShadowedButton>
          <ShadowedButton>義大利的</ShadowedButton>
        </section>
      </S.FilterBarBtnSub>
      <S.FilterBarBtnSub>
        <p>地區</p>
        <section>
          <ShadowedButton>北部</ShadowedButton>
          <ShadowedButton>中部</ShadowedButton>
          <ShadowedButton>南部</ShadowedButton>
          <ShadowedButton className="bg-orange white">東部</ShadowedButton>
        </section>
      </S.FilterBarBtnSub>
      <S.FilterBarBtnSub>
        <p>縣市</p>
        <section>
          <ShadowedButton>宜蘭縣</ShadowedButton>
          <ShadowedButton>花蓮縣</ShadowedButton>
          <ShadowedButton className="bg-orange white">台東縣</ShadowedButton>
        </section>
      </S.FilterBarBtnSub>
    </S.FilterBarWrapper>
  );
};

export default FilterBar;

const S = {
  FilterBarWrapper: styled.aside`
    overflow: scroll;
  `,

  FilterBarTop: styled.header`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.6rem 0;

    img {
      width: 1.8rem;
    }

    span {
      ${theme.font.h4}
    }
  `,

  FilterBarBtnMain: styled.section`
    margin: 1.6rem 0;
    display: flex;
    gap: 2rem;

    & button {
      width: 35%;
      justify-content: center;
    }
  `,

  FilterBarBtnSub: styled.section`
    margin: 1.6rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: space-around;

    & p {
      ${theme.font.h6}
    }

    & section {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      align-items: center;
    }

    & button {
      width: 40%;
      justify-content: center;
      ${theme.font.p}
    }
  `,
};

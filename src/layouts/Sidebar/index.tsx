import React, { memo } from 'react';
import { styled } from '@linaria/react';
import { Link } from 'react-router-dom';
import theme from '../../styles/base';
import useUserStore from '../../store/userStore';

type SidebarProps = {
  toggleSidebar: () => void;
};

const Sidebar: React.FC<SidebarProps> = (props) => {
  const showSidebar = useUserStore((state) => state.showSidebar);
  const { toggleSidebar } = props;

  return (
    <S.Aside>
      {showSidebar && <S.SidebarBg />}
      <S.SideBarContainer className={showSidebar ? 'sidebar-enter' : undefined}>
        <S.SidebarHead>
          <S.CloseButton onClick={toggleSidebar}>
            <div>
              <span />
              <span />
            </div>
          </S.CloseButton>
        </S.SidebarHead>
        <S.SidebarBody>
          <S.LinkList>
            <S.LinkItem onClick={toggleSidebar}>
              <Link to="home">首頁</Link>
            </S.LinkItem>

            <S.LinkItem onClick={toggleSidebar}>
              <Link to="animals">所有動物</Link>
            </S.LinkItem>

            <S.LinkItem onClick={toggleSidebar}>
              <Link to="favorites">我的最愛</Link>
            </S.LinkItem>

            <S.LinkItem onClick={toggleSidebar}>
              <Link to="tutorial">領養步驟</Link>
            </S.LinkItem>

            <S.LinkItem onClick={toggleSidebar}>
              <Link to="about-us">關於我們</Link>
            </S.LinkItem>
          </S.LinkList>
        </S.SidebarBody>
      </S.SideBarContainer>
    </S.Aside>
  );
};

export default memo(Sidebar);

const S = {
  Aside: styled.aside`
    transition: 0.35s ease-in-out;
  `,

  SidebarBg: styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    z-index: 99;
    background-color: ${theme.color.gray[100]}dd;

    ${theme.mediaQuery.tabLand} {
      display: none;
    }
  `,

  SideBarContainer: styled.div`
    background-color: ${theme.color.white};
    opacity: 1;
    height: 100%;
    width: 85%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
    overflow: hidden;
    transition: 0.35s ease-in-out;
    transform: translateX(100%);

    &.sidebar-enter {
      transform: translateX(0);
    }
  `,

  SidebarHead: styled.section`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 1.2rem 1.2rem 1.8rem;
  `,

  CloseButton: styled.label`
    position: relative;
    height: 2rem;
    width: 2.7rem;
    border: none;
    background-color: transparent;
    cursor: pointer;

    span {
      position: absolute;
      right: 0%;
      height: 0.5rem;
      width: 2.7rem;
      border-radius: 1rem;
      background-color: ${theme.color.orange};
      border: 0.15rem solid ${theme.color.darkBlue};
      transition: 0.25s ease-in-out;
    }

    span:nth-child(1) {
      top: 5%;
      rotate: 45deg;
      scale: 0.95;
      transform-origin: left center;
    }

    span:nth-child(2) {
      top: 95%;
      rotate: -45deg;
      scale: 0.95;
      transform-origin: left center;
    }

    ${theme.mediaQuery.tabLand} {
      display: none;
    }
  `,

  SidebarBody: styled.section`
    background-color: ${theme.color.gray[20]};
    height: 100vh;
  `,

  LinkList: styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
  `,

  LinkItem: styled.li`
    height: 4rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${theme.color.darkBlue};
    padding: 0.6rem 0;

    :first-child {
      border-top: 1px solid ${theme.color.darkBlue};
    }

    :active {
      background-color: ${theme.color.gray[40]};
    }

    a {
      text-decoration: none;
      color: ${theme.color.darkBlue};
      font-weight: 700;
      font-size: 1.13rem;
      width: 100%;
      text-align: center;
    }

    a:visited {
      text-decoration: inherit;
    }
  `,
};

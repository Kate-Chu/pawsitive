import { memo } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { styled } from '@linaria/react';
import theme from '../../styles/base';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = () => {
  const activeStyle = {
    color: theme.color.gray[100],
    fontWeight: 800,
  };

  return (
    <S.AppHeader>
      <S.LogoContainer>
        <Link to="/home">
          <Logo />
        </Link>
      </S.LogoContainer>
      <S.SidebarButton>
        <div>
          <span />
          <span />
          <span />
        </div>
      </S.SidebarButton>

      <S.Nav>
        <S.LinkList>
          <S.LinkItem>
            <NavLink
              to="home"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              首頁
            </NavLink>
          </S.LinkItem>

          <S.LinkItem>
            <NavLink
              to="animals"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              所有動物
            </NavLink>
          </S.LinkItem>

          <S.LinkItem>
            <NavLink
              to="favorites"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              我的最愛
            </NavLink>
          </S.LinkItem>

          <S.LinkItem>
            <NavLink
              to="tutorial"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              領養步驟
            </NavLink>
          </S.LinkItem>

          <S.LinkItem>
            <NavLink
              to="about-us"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              關於我們
            </NavLink>
          </S.LinkItem>
        </S.LinkList>
      </S.Nav>
    </S.AppHeader>
  );
};

export default memo(Header);

const S = {
  AppHeader: styled.header`
    font-size: 1rem;
    text-align: center;
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${theme.mediaQuery.tabLand} {
      padding: 1.5rem 2rem 2rem;
      ${theme.font.h3}
    }

    ${theme.mediaQuery.desk} {
      padding: 3rem;
      ${theme.font.h1};
    }
  `,

  LogoContainer: styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    shrink: 0;

    a {
      width: 100%;
      display: flex;
      align-items: center;
    }

    ${theme.mediaQuery.tabPort} {
      width: 38%;
    }
    ${theme.mediaQuery.tabLand} {
      width: 24%;
    }
  `,

  SidebarButton: styled.label`
    height: 2rem;
    position: relative;

    span {
      position: absolute;
      right: 0%;
      height: 0.5rem;
      width: 2.4rem;
      border-radius: 1rem;
      background-color: ${theme.color.orange};
      border: 0.15rem solid ${theme.color.darkBlue};
    }

    span:nth-child(1) {
      top: 5%;
    }

    span:nth-child(2) {
      top: 50%;
    }

    span:nth-child(3) {
      top: 95%;
    }

    ${theme.mediaQuery.tabLand} {
      display: none;
    }
  `,

  Nav: styled.nav`
    width: 60%;
    display: none;

    ${theme.mediaQuery.tabLand} {
      display: block;
    }
  `,

  LinkList: styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding-top: 0.65rem;
  `,

  LinkItem: styled.li`
    a {
      text-decoration: none;
      color: ${theme.color.gray[60]};
      font-weight: 800;
    }

    a:hover {
      color: ${theme.color.orange};
    }

    a:visited {
      text-decoration: inherit;
    }
  `,
};

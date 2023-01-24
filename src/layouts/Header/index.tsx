import { NavLink } from 'react-router-dom';
import { styled } from '@linaria/react';
import ShadowButton from 'src/components/ShadowButton';
import {
  COLOR,
  MEDIA_QUERY_DESK,
  MEDIA_QUERY_TAB_LAND,
  MEDIA_QUERY_TAB_PORT,
} from 'src/styles/base';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = () => {
  const activeStyle = {
    color: COLOR.gray[100],
    fontWeight: 800,
  };

  return (
    <AppHeader>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <SidebarButton>
        <div>
          <span />
          <span />
          <span />
        </div>
      </SidebarButton>

      <Nav>
        <LinkList>
          <LinkItem>
            <NavLink
              to="home"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              首頁
            </NavLink>
          </LinkItem>

          <LinkItem>
            <NavLink
              to="animals"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              所有動物
            </NavLink>
          </LinkItem>

          <LinkItem>
            <NavLink
              to="favorites"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              我的最愛
            </NavLink>
          </LinkItem>

          <LinkItem>
            <NavLink
              to="tutorial"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              領養步驟
            </NavLink>
          </LinkItem>

          <LinkItem>
            <NavLink
              to="about-us"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              關於我們
            </NavLink>
          </LinkItem>
          <li>
            <NavLink to="sign-in">
              <ShadowButton>登入 註冊</ShadowButton>
            </NavLink>
          </li>
        </LinkList>
      </Nav>
    </AppHeader>
  );
};

const AppHeader = styled.header`
  font-size: 1rem;
  text-align: center;
  padding: 2rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${MEDIA_QUERY_TAB_LAND} {
    padding: 1.5rem 2rem 2rem;
    font-size: 1.5rem;
  }

  ${MEDIA_QUERY_DESK} {
    font-size: 2rem;
  }
`;

const LogoContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  shrink: 0;

  ${MEDIA_QUERY_TAB_PORT} {
    width: 38%;
  }
  ${MEDIA_QUERY_TAB_LAND} {
    width: 24%;
  }
`;

const SidebarButton = styled.label`
  height: 2rem;
  position: relative;

  span {
    position: absolute;
    right: 0%;
    height: 0.28rem;
    width: 2.4rem;
    border-radius: 1rem;
    background-color: ${COLOR.orange};
    border: 0.15rem solid ${COLOR.darkBlue};
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

  ${MEDIA_QUERY_TAB_LAND} {
    display: none;
  }
`;

const Nav = styled.nav`
  width: 70%;
  display: none;

  ${MEDIA_QUERY_TAB_LAND} {
    display: block;
  }
`;

const LinkList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;

const LinkItem = styled.li`
  a {
    text-decoration: none;
    color: ${COLOR.gray[60]};
    font-weight: 800;
  }

  a:hover {
    color: ${COLOR.orange};
  }

  a:visited {
    text-decoration: inherit;
  }
`;

export default Header;

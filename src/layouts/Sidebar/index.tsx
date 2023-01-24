import { styled } from '@linaria/react';
import { Link } from 'react-router-dom';
import { COLOR, MEDIA_QUERY_TAB_LAND } from 'src/styles/base';
import ShadowButton from 'src/components/ShadowButton';

const Sidebar = () => {
  return (
    <SidebarBg>
      <SideBarContainer>
        <SidebarHead>
          <Link to="sign-in">
            <ShadowButton>登入 註冊</ShadowButton>
          </Link>
          <CloseButton>
            <div>
              <span />
              <span />
            </div>
          </CloseButton>
        </SidebarHead>
        <SidebarBody>
          <LinkList>
            <LinkItem>
              <Link to="home">首頁</Link>
            </LinkItem>

            <LinkItem>
              <Link to="animals">所有動物</Link>
            </LinkItem>

            <LinkItem>
              <Link to="favorites">我的最愛</Link>
            </LinkItem>

            <LinkItem>
              <Link to="tutorial">領養步驟</Link>
            </LinkItem>

            <LinkItem>
              <Link to="about-us">關於我們</Link>
            </LinkItem>
          </LinkList>
        </SidebarBody>
      </SideBarContainer>
    </SidebarBg>
  );
};

const SidebarBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: ${COLOR.gray[100]}dd;
`;

const SideBarContainer = styled.aside`
  background-color: ${COLOR.white};
  opacity: 1;
  height: 100%;
  width: 85%;
  position: absolute;
  top: 0;
  right: 0;
`;

const SidebarHead = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.2rem 1.2rem 1.8rem;
`;

const CloseButton = styled.label`
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

  ${MEDIA_QUERY_TAB_LAND} {
    display: none;
  }
`;

const SidebarBody = styled.section`
  background-color: ${COLOR.gray[20]};
  height: 80%;
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
`;

const LinkItem = styled.li`
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${COLOR.darkBlue};
  padding: 0.6rem 0;

  :first-child {
    border-top: 1px solid ${COLOR.darkBlue};
  }

  :active {
    background-color: ${COLOR.gray[40]};
  }

  a {
    text-decoration: none;
    color: ${COLOR.darkBlue};
    font-weight: 700;
    font-size: 1.13rem;
    width: 100%;
    text-align: center;
  }

  a:visited {
    text-decoration: inherit;
  }
`;

export default Sidebar;

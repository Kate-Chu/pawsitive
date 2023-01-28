import React from 'react';
import { styled } from '@linaria/react';
import theme from '../../styles/base';

type BoardProps = {
  children: React.ReactNode;
};

const Board: React.FC<BoardProps> = (props) => {
  const { children } = props;

  return <BoardContainer>{children}</BoardContainer>;
};

const BoardContainer = styled.section`
  margin: 0 0 4rem;
  padding: 2rem;
  width: 100%;
  background-color: ${theme.color.white};
  border: 1.2rem solid ${theme.color.orange};
  box-shadow: 1.2rem 1.2rem 0 ${theme.color.darkBlue};

  h1 {
    ${theme.font.h1}
    margin: 1rem 0;
  }
  h2 {
    ${theme.font.h2}
    margin: 1rem 0;
  }
  h3 {
    ${theme.font.h3}
    margin: 1rem 0;
  }
  h4 {
    ${theme.font.h4}
    margin: 1rem 0;
  }
  h5 {
    ${theme.font.h5}
    margin: 1rem 0;
  }
  h6 {
    ${theme.font.h6}
    margin: 1rem 0;
  }
  p {
    margin: 1rem 0;
    ${theme.font.p};
  }
`;

export default Board;

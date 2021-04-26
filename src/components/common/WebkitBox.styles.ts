import styled from 'styled-components';

export const WebkitBox = styled.div<{ rows: number }>`
  display: -webkit-box;
  -webkit-line-clamp: ${({rows}) => rows}; /** número de linhas que você quer exibir */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  p {
    margin: 0px;
  }
`;

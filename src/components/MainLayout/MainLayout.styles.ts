import styled from 'styled-components';

export const MainContainer = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 0.1fr 5fr;
  grid-template-areas: 'header' 'content';
`;

export const Content = styled.div`
  grid-area: content;
  overflow-y: auto;
`;

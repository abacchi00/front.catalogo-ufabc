import styled from 'styled-components';

import { Card } from '../common';

export const SubjectBox = styled(Card)`
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 5px 1px gray;
  width: 16vw;
  height: 240px;
  margin: 2vh;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    * {
      color: black;
      background-color: #cccccc;
    }
  };
`;

export const SubjectTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  padding: 8px;
  height: 20%;

  font-weight: bold;
  color: white;
`;

export const SubjectContent = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  height: 70%;

  p {
    margin: 0px;
  }
`;

export const SubjectFooter = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10%;
  padding: 8px;
  background-color: #dddddd;

  font-weight: bold;

  p {
    margin: 0px;
  }
`;

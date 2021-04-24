import { ReactNode } from "react";

import { Header } from '../Header';
import { Content, MainContainer } from './MainLayout.styles';

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MainContainer>
      <Header />

      <Content>
        { children }
      </Content>
    </MainContainer>
  );
}

export default MainLayout;

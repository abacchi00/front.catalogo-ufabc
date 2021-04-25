import { SubjectsTable } from './components/SubjectsTable';
import { MainLayout } from './components/MainLayout';
import { Switch, BrowserRouter } from 'react-router-dom';

import { MainContainer } from './App.styles';

function App() {
  return (
    <MainLayout>
      <MainContainer>
        <BrowserRouter>
          <Switch>
            <SubjectsTable/>
          </Switch>
        </BrowserRouter>
      </MainContainer>
    </MainLayout>
  );
}

export default App;

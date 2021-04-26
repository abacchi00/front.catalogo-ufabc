import { useEffect } from "react";
import { useRecoilValue } from "recoil";

import { subjectsAtom } from '../../atoms/subjects/subjects.atom';


import { Card } from '../common';
import { SubjectCard } from '../SubjectCard';

import useSubjects from '../../hooks/subjects/useSubjects.hook';

import { CommonTable, SubjectCardsContainer } from './SubjectsTable.styles';

const SubjectsTable: React.FC = () => {
  const { data: subjects, loading } = useRecoilValue(subjectsAtom);

  const { getSubjects } = useSubjects();

  const columns = [
    {name: 'Código', selector: 'code'},
    {name: 'Nome', selector: 'name'},
    {name: 'TPI', selector: 'tpi'},
  ]

  useEffect(() => {
    getSubjects();
  }, [getSubjects])

  return (
    <>
      <SubjectCardsContainer>
        {subjects.map(subject => <SubjectCard subject={subject}/>)}
      </SubjectCardsContainer>

      {/* <Card>
        { loading
          ? <h3>Tabela carregando...</h3>
          :  <CommonTable title="Disciplinas" columns={columns} data={subjects} />
        }
      </Card> */}
    </>
  );
}

export default SubjectsTable;

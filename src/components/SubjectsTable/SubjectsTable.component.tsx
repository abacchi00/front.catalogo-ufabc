import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { CommonTable } from './SubjectsTable.styles';

import { subjectsAtom } from '../../atoms/subjects/subjects.atom';
import useSubjects from '../../hooks/subjects/useSubjects.hook';
import { Card } from '../common';

const SubjectsTable: React.FC = () => {
  const subjects = useRecoilValue(subjectsAtom);

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
    <Card>
      <CommonTable
        title="Disciplinas"
        columns={columns}
        data={subjects}
      />
    </Card>
  );
}

export default SubjectsTable;

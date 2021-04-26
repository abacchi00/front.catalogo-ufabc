import { WebkitBox } from '../common';

import { Subject } from '../../interfaces/subjects';

import { SubjectBox, SubjectTitle, SubjectContent, SubjectFooter } from './SubjectCard.styles';


interface Props {
  subject: Subject;
}

const SubjectCard: React.FC<Props> = ({ subject }) => {
  return (
    <SubjectBox>
      <SubjectTitle>
        <WebkitBox rows={2}>
          <p>{subject.name}</p>
        </WebkitBox>
      </SubjectTitle>

      <SubjectContent>
        <WebkitBox rows={7}>
          <p>{subject.content}</p>
        </WebkitBox>
      </SubjectContent>

      <SubjectFooter>
        <p>{subject.code}</p>
        <p>{subject.tpi}</p>
      </SubjectFooter>
    </SubjectBox>
  );
}

export default SubjectCard;

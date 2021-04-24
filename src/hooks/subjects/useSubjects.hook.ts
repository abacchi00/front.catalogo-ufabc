import axios from 'axios';
import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { subjectsAtom } from '../../atoms/subjects/subjects.atom';


const api = axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
});

const useSubjects = () => {
  const setSubjects = useSetRecoilState(subjectsAtom);

  const getSubjects = useCallback(async () => {
    const response = await api.get('subjects');

    setSubjects(response.data);
  }, [setSubjects]);

  return {
    getSubjects,
  };
}

export default useSubjects;

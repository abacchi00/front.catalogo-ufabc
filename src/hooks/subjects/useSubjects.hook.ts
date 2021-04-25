import axios from 'axios';
import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { subjectsAtom } from '../../atoms/subjects/subjects.atom';


const api = axios.create({
  baseURL: 'https://calm-fjord-47501.herokuapp.com/api/v1', // porque que tenho que usar essa url??
  //baseURL: 'http://localhost:3000/api/v1/',
});

const useSubjects = () => {
  const setSubjects = useSetRecoilState(subjectsAtom);

  const getSubjects = useCallback(async () => {
    setSubjects(prevState => ({ ...prevState, loading: true }))

    const { data } = await api.get('subjects');

    setSubjects({ data, loading: false });
  }, [setSubjects]);

  return {
    getSubjects,
  };
}

export default useSubjects;

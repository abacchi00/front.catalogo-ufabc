import { atom } from "recoil";
import { Subject } from "../../interfaces/subjects";

export const subjectsAtom = atom({
  key: 'subjectsAtom',
  default: { data: [] as Subject[], loading: false },
});

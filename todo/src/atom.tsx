import { atom, selector } from 'recoil';
// selector는 atom 의 output을 변형시키는 도구

export const isDarkState = atom<boolean>({
  key: 'isDark',
  default: localStorage.getItem('isDark') ? false : true,
});

// 로컬스토래지에 isDark가 있으면 false, 
export enum Categories {
  'TO_DO' = 'TO_DO',
  'DOING' = 'DOING',
  'DONE' = 'DONE',
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: 'category',
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});

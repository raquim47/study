import { atom, selector } from 'recoil';

// 다크모드
export const isDarkState = atom<boolean>({
  key: 'isDark',
  default: JSON.parse(localStorage.getItem('isDark') ?? JSON.stringify(false)),
});

// 카테고리
export enum EnumCategories {
  'TO_DO' = 'TO_DO',
  'DOING' = 'DOING',
  'DONE' = 'DONE',
}

export const categoryState = atom<EnumCategories>({
  key: 'category',
  default: EnumCategories.TO_DO,
});


const defaultCategories = ['TO_DO', 'DOING', 'DONE'];

export interface IToDo {
  text: string;
  id: number;
  category: string;
}



export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: JSON.parse(localStorage.getItem("toDos") ?? "[]"),
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});

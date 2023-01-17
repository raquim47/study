import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import { IToDo, toDoState, EnumCategories } from '../atom';

const ToDoComponent = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border-radius: 0.7rem;
  padding: 1rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.textColor};
  background: ${(props) => props.theme.cardColor};
  box-shadow: 0 0.2rem 0.5rem rgba(10, 10, 10, 0.1);
  transition: background-color 0.3s, box-shadow 0.3s;

  span {
    display: block;
    white-space: wrap;
    /* word-break: break-all; */
  }
  &:hover {
    box-shadow: 0 0.2rem 0.75rem rgba(10, 10, 10, 0.2);
  }
  &:last-child {
    margin-bottom: 8rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  flex-wrap: wrap;
  button {
    background-color: ${(props) => props.theme.buttonColor};
    color: ${(props) => props.theme.textColor};
    font-weight: 700;
    border: none;
    padding: 0.3rem 0.5rem;
    border-radius: 0.3rem;
    transition: background-color 0.3s;
    max-width: 10rem;
    overflow: hidden;
    height: 1.7rem;
    text-overflow: ellipsis;
  }
  button:last-child {
    background-color: #ffe0e6;
    color: #f3214f;
  }
  button[disabled] {
    opacity: 0.4;
  }
  button:not(:last-child):not(:disabled):hover {
    background-color: ${(props) => props.theme.hoverButtonColor};
  }
`;

const ToDo = ({ text, category, id }: IToDo) => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name };
      
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  const deleteToDo = (toDoName: string) => () => {
		if (window.confirm(`${toDoName} 할 일을 정말 삭제하시겠어요?`)) {
			setToDos((oldToDos) => {
				const targetIndex = oldToDos.findIndex((oldToDo) => oldToDo.id === id);

				return [...oldToDos.slice(0, targetIndex), ...oldToDos.slice(targetIndex + 1)];
			});
		}
	};

  useEffect(() => {
    localStorage.setItem('toDos', JSON.stringify(toDos));
  }, [toDos]);

  return (
    <ToDoComponent>
      <span>{text}</span>
      <ButtonsContainer>
        {Object.values(EnumCategories).map((cate) => (
          <button
            disabled={cate === category}
            key={cate}
            name={cate}
            onClick={onClick}
          >
            {cate}
          </button>
        ))}
        <button onClick={deleteToDo(text)}>DELETE</button>
      </ButtonsContainer>
    </ToDoComponent>
  );
};

export default ToDo;

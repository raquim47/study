import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, toDoState, EnumCategories } from '../atom';
import styled from 'styled-components';

interface IForm {
  toDo: string;
}

const CreateToDoForm = styled.form`
  position: relative;
  display: flex;
  height: 3rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  border-radius: 0.7rem;
  box-shadow: 0 0.2rem 0.5rem rgba(10, 10, 10, 0.1);

  input {
    width: 100%;
    border: none;
    border-radius: 0.7rem;
    background-color: ${(props) => props.theme.cardColor};
    padding-left: 0.9rem;
    padding-right: 3rem;
    font-size: 0.9rem;
    color: ${(props) => props.theme.textColor};
  }

  &:hover {
    box-shadow: 0 0.2rem 0.75rem rgba(10, 10, 10, 0.2);
  }

  &:focus-within {
    box-shadow: 0 0.1rem 0.5rem rgba(10, 10, 10, 0.2);
  }

  button {
    position: absolute;
    width: 30px;
    height: 100%;
    border-radius: 0 0.7rem 0.7rem 0;
    top: 0;
    right: 0;
    padding: 0.2rem 0;
    border: none;
    background-color: ${(props) => props.theme.accentColor};
    color: #fff;
  }

  button:hover {
    background-color: ${(props) => props.theme.accentColor};
  }

  input:focus {
    outline: 0.2rem solid ${(props) => props.theme.accentColor};
  }
`;

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue('toDo', '');
  };

  return (
    <CreateToDoForm onSubmit={handleSubmit(handleValid)}>
      <input
        {...register('toDo', { required: 'Please write To Do' })}
        placeholder={`${category} 리스트에 새 할 일을 추가해보세요`}
      />
      <button>+</button>
    </CreateToDoForm>
  );
};

export default CreateToDo;

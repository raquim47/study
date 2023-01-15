import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { toDoState } from '../atom';

interface IForm {
  toDo: string;
}

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    console.log('add to do', toDo);
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: 'TO_DO' },
      ...oldToDos,
    ]);
    setValue('toDo', '');
  };
  
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input {...register('toDo', { required: 'Please write To Do' })} />
      <button>Add</button>
    </form>
  );
};

export default CreateToDo;

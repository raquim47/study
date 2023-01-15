import { useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { toDoState } from '../atom';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

const ToDoList = () => {
  // const [toDos, setToDos] = useRecoilState(toDoState);
  const toDos = useRecoilValue(toDoState);
  // const modFn = useSetRecoilState(toDoState)
  console.log(toDos)
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) =>
          <ToDo key={toDo.id} {...toDo}/>
        )}
      </ul>
    </div>
  );
};

// const ToDoList = () => {
//   const [toDo, setToDo] = useState('');
//   const [toDoError, setToDoError] = useState('');
//   const onChange = (e: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = e;
//     setToDo(value);
//   };
//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (toDo.length < 10) {
//       return setToDoError('ToDo should be longer');
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} type="text" placeholder="Write a to do" />
//         <button>Add</button>
//         {toDoError !== '' ? toDoError : null}
//       </form>
//     </div>
//   );
// };

export default ToDoList;

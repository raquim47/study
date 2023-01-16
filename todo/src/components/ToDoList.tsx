import { useRecoilState, useRecoilValue } from 'recoil';
import { Categories, categoryState, isDarkState, toDoSelector, toDoState } from '../atom';
import styled from "styled-components";
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

interface MaterialIconProps {
	name: string;
}

export function MaterialIcon({ name }: MaterialIconProps) {
	return (
		<div className="material-icons-round" style={{ fontSize: "inherit" }}>
			{name}
		</div>
	);
}

const Container = styled.div`
	padding: 0 2rem;
	max-width: 30rem;
	margin: 0 auto;
	hr {
		margin: 2rem auto;
	}
`;

const Title = styled.h1`
	font-size: 2.4rem;
	font-weight: 600;
	color: ${(props) => props.theme.accentColor};
`;

const Header = styled.header`
	height: 8rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-auto-rows: 3rem;
	gap: 0.6rem;
`;

const GridItem = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	flex-direction: column;
	border-radius: 0.7rem;
	overflow-wrap: anywhere;
	overflow: hidden;
	button {
		width: 100%;
		height: 100%;
		border: none;
		border-radius: 0.7rem;
		background-color: transparent;
		font-size: 0.9rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.2rem;
		color: ${(props) => props.theme.textColor};
		background-color: ${(props) => props.theme.cardColor};
		transition: background-color 0.3s;
	}
	&:hover button {
		background-color: ${(props) => props.theme.activeCardColor};
	}
	button[disabled] {
		border: 0.2rem solid ${(props) => props.theme.accentColor};
		background-color: ${(props) => props.theme.accentFadedColor};
		color: ${(props) => props.theme.accentColor};
		font-weight: 700;
	}
	&:last-child button {
		color: ${(props) => props.theme.accentColor};
		font-size: 1.6rem;
	}
`;

const Toggle = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	bottom: 1rem;
	left: 1rem;
	width: 3rem;
	height: 3rem;
	padding: 0;
	font-size: 1.6rem;
	border: none;
	border-radius: 50%;
	background-color: ${(props) => props.theme.cardColor};
	color: ${(props) => props.theme.accentColor};
	box-shadow: 0 0.2rem 0.5rem rgba(10, 10, 10, 0.1);
	transition: background-color 0.3s, box-shadow 0.3s;
	cursor: pointer;
	&:hover {
		box-shadow: 0 0.2rem 0.75rem rgba(10, 10, 10, 0.2);
	}
	&:active {
		background-color: ${(props) => props.theme.activeCardColor};
		box-shadow: 0 0.1rem 0.5rem rgba(10, 10, 10, 0.2);
	}
`;

const ToDoList = () => {
  // const [toDos, setToDos] = useRecoilState(toDoState);
  // const toDos = useRecoilValue(toDoState);
  // const modFn = useSetRecoilState(toDoState)
  const toDos = useRecoilValue(toDoSelector);

  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value as any);
  };

  const [isDark, setIsDark] = useRecoilState(isDarkState);
  const toggleTheme = () => setIsDark((current) => !current);

  return (
    <>
      <Toggle onClick={toggleTheme}>
				<MaterialIcon name={isDark ? 'light_mode' : "dark_mode"} />
			</Toggle>
      <hr />

      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>

      <CreateToDo />
      {toDos.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </>
  );
};

export default ToDoList;

import { useRecoilState, useRecoilValue } from 'recoil';
import {
  EnumCategories,
  categoryState,
  isDarkState,
  toDoSelector,
} from '../atom';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

interface MaterialIconProps {
  name: string;
}

const MaterialIcon = ({ name }: MaterialIconProps) => {
  return (
    <div className="material-icons-round" style={{ fontSize: 'inherit' }}>
      {name}
    </div>
  );
};

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

const Categories = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 3rem;
  gap: 0.6rem;
  margin-bottom: 20px;

  button {
    border: none;
    border-radius: 0.7rem;
    font-size: 0.9rem;
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.cardColor};
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: ${(props) => props.theme.activeCardColor};
  }

  button[disabled] {
    border: 0.2rem solid ${(props) => props.theme.accentColor};
    background-color: ${(props) => props.theme.accentFadedColor};
    color: ${(props) => props.theme.accentColor};
    font-weight: 700;
  }
`;

const Toggle = styled.button`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  /* padding: 0; */
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
  const [isDark, setIsDark] = useRecoilState(isDarkState);
  const toggleTheme = () => setIsDark((current) => !current);

  const toDos = useRecoilValue(toDoSelector);
  const [currentCate, setCurrentCate] = useRecoilState(categoryState);
  const onClickCate = (category: EnumCategories) => () => {
    setCurrentCate(category);
  };
  return (
    <>
      <Toggle onClick={toggleTheme}>
        <MaterialIcon name={isDark ? 'light_mode' : 'dark_mode'} />
      </Toggle>
      <Container>
        <Helmet>
          <title>To Do - {currentCate}</title>
        </Helmet>
        <Header>
          <Title>To Do</Title>
        </Header>
        <Categories>
          {Object.values(EnumCategories).map((cate) => (
            <button
              key={cate}
              onClick={onClickCate(cate)}
              disabled={cate === currentCate}
            >
              {cate}
            </button>
          ))}
        </Categories>
        <hr />
        <CreateToDo />
        <ul>
          {toDos.map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
          ))}
        </ul>
      </Container>
    </>
  );
};

export default ToDoList;

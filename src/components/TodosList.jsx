import TodoItem from '@/components/TodoItem';
import { useTodosContext } from '@/context/TodosContext';

const TodosList = ({ todosProps, handleChange, delTodo, setUpdate }) => {
  const value = useTodosContext();
  console.log(value);
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          handleChange={handleChange}
          delTodo={delTodo}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};
export default TodosList;

import { Todo } from "@/types/todo";
import { useAppDispatch, useAppSelector } from "@/store";
import { addTodo, removeTodo, selectTodo, toogleTodo, updateTodoTitle } from "@/store/slices/todoSlice";

const defaultTodos: Todo[] = [
  { id: 1, title: "Learn Next.js", isCompleted: false },
  { id: 2, title: "Learn React Mobile", isCompleted: true },
  { id: 3, title: "Make PET-projects", isCompleted: false },
];

const STORAGE_KEY = 'todos';

const useTodos = () => {
  const todos = useAppSelector(selectTodo);
  const dispatch = useAppDispatch();

  const onAddTodo = (title: Todo['title']) => {
    dispatch(addTodo({ id: Number(new Date()), title, isCompleted: false }));
  };

  const onDeleteTodo = (id: Todo['id']) => {
    dispatch(removeTodo(id));
  };

  const onCheckTodo = (id: Todo['id']) => {
    dispatch(toogleTodo(id));
  };

  const onUpdateTodoTitle = (id: Todo['id'], title: Todo['title']) => {
    dispatch(updateTodoTitle({ id, title }));
  }

  const completedTodos = todos.filter(todo => todo.isCompleted);

  return {
    onAddTodo, 
    onDeleteTodo, 
    onCheckTodo, 
    onUpdateTodoTitle,
    todos,
    completedTodos
  };
}

export default useTodos;

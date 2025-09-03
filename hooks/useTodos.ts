import { Todo } from "@/types/todo";
import { useState } from "react";

const defaultTodos: Todo[] = [
  { id: 1, title: "Learn Next.js", isCompleted: false },
  { id: 2, title: "Learn React Mobile", isCompleted: true },
  { id: 3, title: "Make PET-projects", isCompleted: false },
];

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(defaultTodos);

  const onAddTodo = (title: Todo['title']) => {
    setTodos(currentTodos => {
      return [...currentTodos, { id: Number(new Date()), title, isCompleted: false }];
    })
  };

  const onDeleteTodo = (id: Todo['id']) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onCheckTodo = (id: Todo['id']) => {
    setTodos(todos.map(todo =>
      (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)
    ));
  };

  const onUpdateTodoTitle = (id: Todo['id'], title: Todo['title']) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, title } : todo)));
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

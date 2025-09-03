import { Todo as TodoType } from "@/types/todo";
import React from "react";
import { FlatList, View } from "react-native";
import Todo from "../Todo";

export type TodoListProps = {
  todos: TodoType[];
  onDeleteTodo: (id: TodoType['id']) => void;
  onCheckTodo: (id: TodoType['id']) => void;
  onUpdateTodoTitle: (id: TodoType['id'], title: TodoType['title']) => void;
}

const TodoList: React.FC<TodoListProps> = ({ 
  todos, 
  onDeleteTodo, 
  onCheckTodo, 
  onUpdateTodoTitle
}) => {
  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={todo => todo.id.toString()}
        renderItem={({ item }) => {
          return (
            <Todo
              {...item}
              {...{ onDeleteTodo, onCheckTodo, onUpdateTodoTitle }}
            />
          );
        }}
      />
    </View>
  );
};

export default TodoList;

import { Todo as TodoType } from "@/types/todo";
import React from "react";
import { FlatList, View } from "react-native";
import Todo from "../Todo";

type TodoListProps = {
  todos: TodoType[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={todo => todo.id.toString()}
        renderItem={({ item }) => {
          const { id, ...props } = item;

          return <Todo {...props} />
        }}
      />
    </View>
  );
};

export default TodoList;

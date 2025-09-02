import { COLORS } from "@/constants/Colors";
import Header from "@/layout/Header";
import TodoList from "@/layout/TodoList";
import { Todo } from "@/types/todo";
import { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

const defaultTodos: Todo[] = [
  { id: 1, title: "Вивчити Next.js", isCompleted: false },
  { id: 2, title: "Вивчити React Mobile", isCompleted: true },
  { id: 3, title: "Зробити Пет-проєкти", isCompleted: false },
];

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>(defaultTodos);

  const completedTodos = todos.filter(todo => todo.isCompleted);

  return (
    <View
      style={styles.container}
    >
      <StatusBar barStyle={'light-content'} />
      <Header completedTodos={completedTodos.length} totalTodos={todos.length} />
      <TodoList todos={todos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND
  }
});


// justifyContent: 'center',
// alignItems: 'center',

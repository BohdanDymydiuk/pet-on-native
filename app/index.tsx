import { COLORS } from "@/constants/Colors";
import useTodos from "@/hooks/useTodos";
import Header from "@/layout/Header";
import TodoCreator from "@/layout/TodoCreator";
import TodoList from "@/layout/TodoList";
import { StatusBar, StyleSheet, View } from "react-native";

export default function Index() {
  const { 
    completedTodos, 
    todos, 
    onAddTodo, 
    onDeleteTodo, 
    onCheckTodo, 
    onUpdateTodoTitle
  } = useTodos();

  return (
    <View
      style={styles.container}
    >
      <StatusBar barStyle={'light-content'} />
      <Header completedTodos={completedTodos.length} totalTodos={todos.length} />
      <TodoCreator onAddTodo={onAddTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={onDeleteTodo}
        onCheckTodo={onCheckTodo}
        onUpdateTodoTitle={onUpdateTodoTitle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND
  }
});

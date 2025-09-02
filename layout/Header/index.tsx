import { StyleSheet, View } from "react-native";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/Colors";
import React from "react";

type HeaderProps = {
  completedTodos: number;
  totalTodos: number;
};

const Header: React.FC<HeaderProps> = ({ completedTodos, totalTodos }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerMainContent}>
        <StyledText>Todo app</StyledText>
        <StyledText>September 2, 2025</StyledText>
      </View>
      <StyledText>Completed: {completedTodos} / {totalTodos}</StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
  },
  headerMainContent: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  }
});

export default Header;

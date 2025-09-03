import { StyleSheet, View } from "react-native";
import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/Colors";
import React from "react";
import { getFullFormattedDate } from "@/helpers/date";

type HeaderProps = {
  completedTodos: number;
  totalTodos: number;
};

const Header: React.FC<HeaderProps> = ({ completedTodos, totalTodos }) => {
  const formattedDateNow = getFullFormattedDate(new Date());

  return (
    <View style={styles.container}>
      <View style={styles.headerMainContent}>
        <StyledText variant="title">Todo app</StyledText>
        <StyledText variant="subtitle">{formattedDateNow}</StyledText>
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

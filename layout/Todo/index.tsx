import StyledButton from '@/components/StyledButton';
import StyledCheckbox from '@/components/StyledCheckbox';
import StyledText from '@/components/StyledText';
import { COLORS } from '@/constants/Colors';
import { Todo as TodoType } from '@/types/todo';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type TodoProps = Pick<TodoType, 'title' | 'isCompleted'>;

const Todo: React.FC<TodoProps> = ({ title, isCompleted }) => {
  return (
    <View style={styles.container}>
      <StyledCheckbox checked={isCompleted} onCheck={() => {}} />
      <StyledText style={{ textDecorationLine: isCompleted ? 'line-through' : 'none' }}>
        {title}
      </StyledText>
      <View style={styles.controls}>
        <StyledButton icon='pencil' size='small' />
        <StyledButton icon='trash' size='small' variant='delete' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: 8,
    backgroundColor: COLORS.SECONDARY_BACKGROUND
  },
  controls: {
    flexDirection: 'row',
    gap: 5,
  }
})

export default Todo;

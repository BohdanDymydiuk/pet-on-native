import StyledButton from '@/components/StyledButton';
import StyledCheckbox from '@/components/StyledCheckbox';
import StyledText from '@/components/StyledText';
import { COLORS } from '@/constants/Colors';
import { Todo as TodoType } from '@/types/todo';
import React, { useState } from 'react';
import { StyleSheet, Vibration, View } from 'react-native';
import { TodoListProps } from '../TodoList';
import EditTodoModal from '../Modals/EditTodoModal';
import DeleteTodoModal from '../Modals/DeleteTodoModal';

type TodoProps = Pick<TodoType,
  'id' | 'title' | 'isCompleted'
> & Pick<TodoListProps,
  'onCheckTodo' | 'onDeleteTodo' | 'onUpdateTodoTitle'
>;

const Todo: React.FC<TodoProps> = ({
  id,
  title, 
  isCompleted, 
  onCheckTodo, 
  onDeleteTodo, 
  onUpdateTodoTitle
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const onPressCheck = () => onCheckTodo(id);
  const onPressEdit = () => setIsEditModalOpen(true);
  const onPressDelete = () => {
    onDeleteTodo(id);
    Vibration.vibrate(50)
  };

  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkTitleContainer}>
        <StyledCheckbox checked={isCompleted} onCheck={onPressCheck} />
        <StyledText style={{ textDecorationLine: isCompleted ? 'line-through' : 'none' }}>
          {title}
        </StyledText>
      </View>

      <View style={styles.controls}>
        <StyledButton icon='pencil' size='small' onPress={onPressEdit} />
        <EditTodoModal
          title={title}
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onUpdate={title => onUpdateTodoTitle(id, title)}
        />

        <StyledButton icon='trash' size='small' variant='delete' onPress={openDeleteModal} />
        <DeleteTodoModal
          isOpen={isDeleteModalOpen}
          onClose={closeDeleteModal}
          onDelete={onPressDelete}
        />
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
  checkTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  controls: {
    flexDirection: 'row',
    gap: 5,
  }
})

export default Todo;

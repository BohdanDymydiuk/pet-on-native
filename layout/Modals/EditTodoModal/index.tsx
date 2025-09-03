/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import StyledModal from "@/components/StyledModal";
import { Todo } from "@/types/todo";
import { StyleSheet, View } from "react-native";
import StyledText from "@/components/StyledText";
import StyledTextInput from "@/components/StyledTextInput";
import StyledButton from "@/components/StyledButton";

type EditTodoModalProps = {
  isOpen: boolean;
  title: Todo['title'];
  onClose: () => void;
  onUpdate: (title: string) => void;
}

const EditTodoModal: React.FC<EditTodoModalProps> = ({ isOpen, title, onClose, onUpdate }) => {
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [inputError, setInputError] = useState(false);

  const onPressSave = () => {
    if (!updatedTitle) {
      setInputError(true);

      return;
    }

    onUpdate(updatedTitle);
    onClose();
  }

  useEffect(() => {
    if (inputError && updatedTitle) {
      setInputError(false);
    }
  }, [updatedTitle]);

  useEffect(() => {
    setUpdatedTitle(title);
  }, [isOpen])

  return (
    <StyledModal {...{isOpen, onClose}}>
      <View style={styles.modalContentContainer}>
        <StyledText variant="heading">Edit todo</StyledText>
        <View style={styles.inputContainer}>
          <StyledTextInput 
            value={updatedTitle} 
            onChangeText={setUpdatedTitle} 
            placeholder="Edit todo..."
            isError={inputError}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <StyledButton label="Cancel" onPress={onClose} variant="secondary" />
          <StyledButton label="Save" onPress={onPressSave} disabled={inputError} />
        </View>
      </View>
    </StyledModal>
  );
}

const styles = StyleSheet.create({
  modalContentContainer: {
    gap: 20,
  },
  inputContainer: {
    minHeight: 60,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 15,
  }
})

export default EditTodoModal;

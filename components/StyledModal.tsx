import { COLORS } from "@/constants/Colors";
import React from "react";
import { Modal, StyleSheet, TouchableWithoutFeedback, View } from "react-native";

type StyledModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const StyledModal: React.FC<StyledModalProps> = ({isOpen, children, onClose}) => {
  return (
    <Modal visible={isOpen} onRequestClose={onClose} animationType="fade" transparent={true}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalBackgroundContainer}>
          <TouchableWithoutFeedback onPress={event => event.stopPropagation()}>
            <View style={styles.contentContainer}>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackgroundContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    padding: 20,
    borderRadius: 10,
    width: '90%',
    backgroundColor: COLORS.PRIMARY_BACKGROUND
  }
})

export default StyledModal;

import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';

type StyledCheckboxProps = {
  checked: boolean;
  onCheck: () => void;
}

const StyledCheckbox: React.FC<StyledCheckboxProps> = ({ checked, onCheck }) => {
  return (
    <TouchableOpacity onPress={onCheck}>
      <Ionicons name={checked ? 'checkmark-circle' : 'ellipse-outline'} size={24} color={'white'} />
    </TouchableOpacity>
  );
};

export default StyledCheckbox;

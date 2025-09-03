import { COLORS } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacity } from 'react-native';

type StyledCheckboxProps = {
  checked: boolean;
  onCheck: () => void;
}

const StyledCheckbox: React.FC<StyledCheckboxProps> = ({ checked, onCheck }) => {
  const ioniconsName = checked ? 'checkmark-circle' : 'ellipse-outline';
  const ioniconsColor = checked ? COLORS.SUCCESS : COLORS.PRIMARY_BORDER;

  return (
    <TouchableOpacity onPress={onCheck}>
      <Ionicons name={ioniconsName} size={24} color={ioniconsColor} />
    </TouchableOpacity>
  );
};

export default StyledCheckbox;

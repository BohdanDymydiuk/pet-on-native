import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import StyledText from './StyledText';
import { COLORS } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

type StyleButtonProps = TouchableOpacityProps & {
  label?: string;
  icon?: React.ComponentProps<typeof Ionicons>['name'];
  size?: 'default' | 'large' | 'small';
  variant?: 'primary' | 'delete';
}

const StyledButton: React.FC<StyleButtonProps> = ({
  label,
  icon,
  size = 'default',
  variant = 'primary',
  ...props
}) => {
  return (
    <TouchableOpacity {...props} style={[
      styles.base,
      size === 'small' ? styles.small : null,
      variant === 'delete' ? styles.delete : null
    ]}>
      {label && <StyledText>{label}</StyledText>}
      {icon && <Ionicons name={icon} size={14} color={COLORS.PRIMARY_TEXT} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: COLORS.PRIMATY_ACTIVE_BUTTON,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBlock: 12,
    paddingInline: 20,
    borderRadius: 10,
    borderWidth: 1,
  },
  // sizes
  small: {
    paddingInline: 12,
  },
  // variants
  delete: {
    backgroundColor: COLORS.PRIMARY_RED,
  }
}); 

export default StyledButton;

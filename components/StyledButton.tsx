import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import StyledText from './StyledText';
import { COLORS } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

type StyleButtonProps = TouchableOpacityProps & {
  label?: string;
  icon?: React.ComponentProps<typeof Ionicons>['name'];
  size?: 'default' | 'large' | 'small';
  variant?: 'primary' | 'secondary' | 'delete';
}

const StyledButton: React.FC<StyleButtonProps> = ({
  label,
  icon,
  size = 'default',
  variant = 'primary',
  disabled,
  ...props
}) => {
  const labelVariant = (() => {
    if (size === 'large') return 'heading';
    return 'small';
  })();

  return (
    <TouchableOpacity {...props} style={[
      styles.base,
      disabled ? styles.disabled : null,
      size === 'small' ? styles.small : null,
      size === 'large' ? styles.large : null,
      variant === 'secondary' ? styles.secondary : null,
      variant === 'delete' ? styles.delete : null
    ]}
      {...props}
      disabled={disabled}
    >
      {label && <StyledText variant={labelVariant}>{label}</StyledText>}
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
  disabled: {
    opacity: 0.5
  },
  // sizes
  small: {
    paddingInline: 12,
  },
  large: {
    paddingInline: 30,
  },
  // variants
  secondary: {
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
    borderColor: COLORS.PRIMATY_ACTIVE_BUTTON
  },
  delete: {
    backgroundColor: COLORS.PRIMARY_RED,
  }
}); 

export default StyledButton;

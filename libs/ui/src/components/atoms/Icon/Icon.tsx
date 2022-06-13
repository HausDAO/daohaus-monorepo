import React from 'react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

type IconProps = {
  label?: string;
  children: React.ReactNode;
};

export const Icon: React.FC<IconProps> = ({ label = '', children }) => {
  return <AccessibleIcon.Root label={label}>{children}</AccessibleIcon.Root>;
};

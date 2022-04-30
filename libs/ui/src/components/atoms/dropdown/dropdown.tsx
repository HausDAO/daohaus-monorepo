import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdownStyle';
import React from 'react';
import { v4 as uuid } from 'uuid';
import { useTheme } from 'styled-components';
import { Theme } from '../../../types/theming';
import { DropdownLabel } from './dropdownExtras';

const DropdownContentOptions = {
  clickable: DropdownMenuItem,
  label: DropdownLabel,
};

export type DropdownItem = {
  type: keyof typeof DropdownContentOptions;
  content: React.ReactNode;
};
type DropdownProps = {
  trigger: React.ReactNode;
  items: DropdownItem[];
  bg?: string;
  spacing?: string;
  align?: 'start' | 'center' | 'end' | undefined;
};
// TODO aria
const Dropdown = ({
  trigger,
  items,
  bg,
  spacing = '0',
  align = 'start',
}: DropdownProps) => {
  const theme = useTheme() as Theme;
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
        <DropdownContentFactory
          bg={bg || theme.dropdown.bg}
          spacing={spacing}
          items={items}
          align={align}
        />
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;

const DropdownContentFactory = ({
  bg,
  spacing,
  items,
  align,
}: {
  bg: string;
  spacing: string;
  items: DropdownItem[];
  align: 'start' | 'center' | 'end' | undefined;
}) => {
  return (
    <DropdownMenuContent bg={bg} align={align}>
      {items?.map((item) => {
        if (item.type === 'clickable') {
          return (
            <DropdownMenuItem key={uuid()} spacing={spacing}>
              {item.content}
            </DropdownMenuItem>
          );
        }
        if (item.type === 'label') {
          return <DropdownLabel key={uuid()}>{item.content}</DropdownLabel>;
        }
        return null;
      })}
    </DropdownMenuContent>
  );
};
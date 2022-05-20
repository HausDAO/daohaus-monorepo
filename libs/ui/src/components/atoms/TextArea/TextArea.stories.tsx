import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextArea } from './TextArea';

export default {
  title: 'Atoms/Form/TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;
TextArea.displayName = 'TextArea';
const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const AtomTextArea = Template.bind({});
AtomTextArea.args = {
  placeholder: 'Placeholder...',
};

export const TextAreaDisabled = Template.bind({});
TextAreaDisabled.args = {
  placeholder: 'Disabled',
  disabled: true,
};

export const TextAreaWarning = Template.bind({});
TextAreaWarning.args = {
  placeholder: 'Warning',
  warning: {
    type: 'warning',
    message: 'This should not be visible',
  },
};

export const TextAreaError = Template.bind({});
TextAreaError.args = {
  placeholder: 'Error',
  error: {
    type: 'error',
    message: 'This should not be visible',
  },
};

export const FullWidthTextArea = Template.bind({});
FullWidthTextArea.args = {
  placeholder: '100% of container',
  full: true,
};

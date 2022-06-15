import {
  amber,
  amberDark,
  grass,
  grassDark,
  indigo,
  indigoDark,
  sky,
  skyDark,
  slate,
  slateDark,
  tomato,
  tomatoDark,
  gray,
  grayDark,
} from '@radix-ui/colors';
import { Theme } from '../types/theming';
import {
  PrimaryDarkButton,
  PrimaryLightButton,
  SecondaryDarkButton,
  SecondaryLightButton,
  TertiaryDarkButton,
  TertiaryLightButton,
} from './component/button';

export const defaultDarkTheme: Theme = {
  themeName: 'dark',
  bgColor: indigoDark.indigo1,
  fontColor: indigoDark.indigo12,
  primary: amberDark.amber9,
  error: tomatoDark.tomato9,
  warning: amberDark.amber9,
  success: grassDark.grass9,
  disabled: gray.gray9,
  transparent: 'transparent',
  info: skyDark.sky9,
  field: {
    bg: indigoDark.indigo3,
    focus: indigoDark.indigo4,
    placeholderText: indigoDark.indigo11,
    disabled: slateDark.slate5,
    disabledColor: slateDark.slate11,
    disabledPlaceholder: slateDark.slate10,
  },
  button: {
    primary: PrimaryDarkButton,
    secondary: SecondaryDarkButton,
    tertiary: TertiaryDarkButton,
  },
  tooltip: {
    bg: indigoDark.indigo3,
  },
  dropdown: {
    bg: indigoDark.indigo2,
  },
  checkbox: {
    border: indigoDark.indigo12,
    activeBorder: amberDark.amber9,
  },
  select: {
    bg: indigoDark.indigo3,
    text: indigoDark.indigo11,
    borderColor: 'transparent',
  },
  spinner: {
    topColor: amberDark.amber9,
    bottomColor: amberDark.amber4,
  },
  switch: {
    bar: {
      bg: indigoDark.indigo6,
      activeBg: amberDark.amber6,
      disabledBg: grayDark.gray6,
    },
    thumb: {
      bg: indigoDark.indigo9,
      activeBg: amberDark.amber9,
      disabledBg: grayDark.gray9,
    },
  },

  //  Update this to secondary button style once we update colors
  radio: {
    item: {
      bg: indigoDark.indigo3,
      activeBg: amberDark.amber9,
      disabledBg: 'rgba(255, 255, 255, 0.034)',
      disabledBorder: 'rgba(255, 255, 255, 0.124)',
      border: indigoDark.indigo6,
    },
    indicator: {
      bg: amberDark.amber6,
      disabledBg: slateDark.slate1,
    },
  },
};

export const defaultLightTheme: Theme = {
  themeName: 'light',
  bgColor: indigo.indigo1,
  fontColor: indigo.indigo12,
  primary: amber.amber9,
  error: tomato.tomato9,
  warning: amber.amber9,
  success: grass.grass9,
  disabled: gray.gray9,
  transparent: 'transparent',
  info: sky.sky9,
  field: {
    bg: indigo.indigo3,
    focus: indigo.indigo4,
    placeholderText: indigo.indigo8,
    disabled: slate.slate5,
    disabledColor: slate.slate6,
    disabledPlaceholder: slate.slate5,
  },
  button: {
    primary: PrimaryLightButton,
    secondary: SecondaryLightButton,
    tertiary: TertiaryLightButton,
  },
  tooltip: {
    bg: indigo.indigo3,
  },
  dropdown: {
    bg: indigo.indigo2,
  },
  checkbox: {
    border: indigoDark.indigo12,
    activeBorder: amberDark.amber9,
  },
  select: {
    bg: indigo.indigo3,
    text: indigo.indigo11,
    borderColor: 'transparent',
  },
  spinner: {
    topColor: amber.amber9,
    bottomColor: amber.amber4,
  },
  switch: {
    bar: {
      bg: indigoDark.indigo6,
      activeBg: amberDark.amber6,
      disabledBg: grayDark.gray6,
    },
    thumb: {
      bg: indigoDark.indigo9,
      activeBg: amberDark.amber9,
      disabledBg: grayDark.gray9,
    },
  },
  radio: {
    item: {
      bg: indigoDark.indigo3,
      activeBg: amberDark.amber9,
      disabledBg: 'rgba(255, 255, 255, 0.034)',
      disabledBorder: 'rgba(255, 255, 255, 0.124)',
      border: indigoDark.indigo6,
    },
    indicator: {
      bg: amberDark.amber6,
      disabledBg: slateDark.slate1,
    },
  },
};

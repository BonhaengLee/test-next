import baseStyled, { ThemedStyledInterface } from 'styled-components';
import Bright from './Bright';
import Dark from './Dark';

export const defaultTheme = Bright;
export const darkTheme = Dark;

export type Theme = typeof defaultTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;

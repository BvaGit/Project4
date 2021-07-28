import { colors } from 'src/components/UI/baseLayout';

export interface IStyled {
    theme: 'dark' | 'light';
    colors: typeof colors;
}

import styled, { keyframes } from 'styled-components';

export const changeTheme = keyframes`
0% {
  opacity: 0;
}
  100%{
    opacity: 1;
  }
`


export const StAppDiv = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(320deg, ${({colors,theme})=>colors[theme].linearGradientOne} 0%,
  ${({colors,theme})=>colors[theme].linearGradientTwo} 74%);
  background-size: cover;
  direction: ${({ lang }) => (lang === 'ar' ? 'rtl' : 'ltr')};
  animation: ${changeTheme} 2s;
`;
// ${({colors,theme})=>colors[theme].background}
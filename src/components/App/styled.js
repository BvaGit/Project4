import styled from 'styled-components';

export const StAppDiv = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(320deg, ${({colors,theme})=>colors[theme].linearGradientOne} 0%,
  ${({colors,theme})=>colors[theme].linearGradientTwo} 74%);
  background-size: cover;
  direction: ${({ lang }) => (lang === 'ar' ? 'rtl' : 'ltr')};
`;
// ${({colors,theme})=>colors[theme].background}
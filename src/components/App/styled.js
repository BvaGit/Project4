import styled from 'styled-components';

export const StAppDiv = styled.div`
  min-height: 100vh;
  background-color: #000000;
  background-image: linear-gradient(320deg, #000000 0%, #073a5c 74%);
  background-size: cover;
  direction: ${({ lang }) => (lang === 'ar' ? 'rtl' : 'ltr')};
`;

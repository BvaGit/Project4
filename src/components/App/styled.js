import styled from 'styled-components';

export const StAppDiv = styled.div`
  min-height: 90vh;
  background: linear-gradient(45deg, #21303F, #1D3246);
  background-size: cover;
  direction: ${({ lang }) => (lang === 'ar' ? 'rtl' : 'ltr')};
`;

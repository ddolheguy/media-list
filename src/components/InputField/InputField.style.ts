import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 5px;
`;

export const Label = styled.div`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 14px;
  width: 120px;
`;

export const Input = styled.input`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
  height: 20px;
  width: 300px;
`;

import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: ${props => (props.error ? 'red' : '#7459c1')};
  font-family: Arial, Helvetica, sans-serif;

  small {
    font-size: 12px;
    color: #333;
  }
`;

import styled from 'styled-components'

export const CountdownContainer = styled.div`
  color: ${({ theme }) => theme['gray-100']};
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;

  display: flex;
  gap: 1rem;

  span {
    background-color: ${({ theme }) => theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  width: 4rem;
  padding: 2rem 0;
  color: ${({ theme }) => theme['green-500']};

  display: flex;
  justify-content: center;
`

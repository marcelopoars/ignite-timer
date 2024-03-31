import styled from 'styled-components'

export const CountdownContainer = styled.div`
  color: ${({ theme }) => theme['gray-100']};
  font-family: 'Roboto Mono', monospace;
  font-size: 3rem;
  line-height: 1;
  text-align: center;

  display: flex;
  justify-content: center;
  gap: 1rem;

  span {
    background-color: ${({ theme }) => theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media screen and (min-width: 768px) {
    font-size: 10rem;

    gap: 1.5rem;
  }
`

export const Separator = styled.div`
  width: 1rem;
  padding: 0;

  color: ${({ theme }) => theme['green-500']};

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 2rem;
  }
`

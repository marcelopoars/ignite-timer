import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  min-height: calc(100vh - 10rem);
  margin: 2rem auto;
  padding: 1.5rem;

  background-color: ${({ theme }) => theme['gray-800']};
  border-radius: 1.5rem 1.5rem 0 0;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    margin: 5rem auto;
    padding: 2.5rem;
    border-radius: 1rem;
  }
`

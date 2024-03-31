import styled from 'styled-components'

export const HomeContainer = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  }

  @media screen and (min-width: 768px) {
    padding-top: 2rem;

    form {
      gap: 3.5rem;
    }
  }
`

const BaseButton = styled.button`
  width: 100%;
  padding: 1rem;

  appearance: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  color: ${({ theme }) => theme['gray-100']};
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  transition:
    background-color 0.2s,
    opacity 0.2s;
`

export const StartCountdownButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme['green-500']};

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme['green-700']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StopCountdownButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme['red-500']};

  &:hover {
    background-color: ${({ theme }) => theme['red-700']};
  }
`

import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  color: ${({ theme }) => theme['gray-100']};
  font-size: 1rem;
  font-weight: 700;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const InputWraper = styled.div`
  display: flex;
  gap: 0.5rem;

  &:first-child {
    flex: 1;
  }
`

const BaseInput = styled.input`
  padding: 0 0.5rem;

  color: ${({ theme }) => theme['gray-100']};

  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme['gray-500']};
  background-color: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }

  &:focus-visible {
    box-shadow: none;
    border-color: ${({ theme }) => theme['green-500']};
  }

  @media screen and (min-width: 768px) {
    font-size: 1.125rem;
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
  text-align: center;
`

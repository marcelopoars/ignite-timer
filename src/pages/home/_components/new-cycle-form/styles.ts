import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  color: ${({ theme }) => theme['gray-100']};
  font-size: 1.125rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  padding: 0 0.5rem;

  font-size: 1.125rem;
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

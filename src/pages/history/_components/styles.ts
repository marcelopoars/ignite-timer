/* eslint-disable prettier/prettier */
import styled from 'styled-components'

const STATUS_COLOR = {
  doing: 'yellow-500',
  paused: 'red-500',
  done: 'green-500',
} as const

interface StatusWrapperProps {
  status: keyof typeof STATUS_COLOR
}

export const StatusWrapper = styled.span<StatusWrapperProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  white-space: nowrap;

  &::before {
    content: '';
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${({ theme, status }) =>
    theme[STATUS_COLOR[status]]};
  }
`

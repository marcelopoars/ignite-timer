import { StatusWrapper } from './styles'

export const CYCLE_STATUS = {
  doing: 'Em andamento',
  paused: 'Pausada',
  done: 'Concluida',
}

interface CycleStatusProps {
  status: keyof typeof CYCLE_STATUS
}

export const CycleStatus = ({ status }: CycleStatusProps) => {
  return (
    <>
      <StatusWrapper status={status}>{CYCLE_STATUS[status]}</StatusWrapper>
    </>
  )
}

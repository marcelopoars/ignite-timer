import { useContext } from 'react'

import { ptBR } from 'date-fns/locale'
import { formatDistanceToNow } from 'date-fns'

import { CyclesContext } from '../../contexts'

import { CycleStatus } from './_components'

import {
  CleanHistoryButton,
  HeaderHistory,
  HistoryContainer,
  HistoryList,
} from './styles'
import { Trash } from 'phosphor-react'

interface GetStatusProps {
  finishedDate: Date | undefined
  interruptedDate: Date | undefined
}

export function History() {
  const { cycles, cleanCyclesHistory } = useContext(CyclesContext)

  function getStatus({ finishedDate, interruptedDate }: GetStatusProps) {
    if (finishedDate) return 'done'
    if (interruptedDate) return 'paused'

    return 'doing'
  }

  return (
    <HistoryContainer>
      <HeaderHistory>
        <h1>HistoryContainer</h1>
        <CleanHistoryButton onClick={cleanCyclesHistory}>
          <Trash size={20} />
          Limpar histórico
        </CleanHistoryButton>
      </HeaderHistory>
      <HistoryList>
        {cycles.length ? (
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Início</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {cycles.map(
                ({
                  id,
                  task,
                  minutesAmount,
                  startDate,
                  finishedDate,
                  interruptedDate,
                }) => (
                  <tr key={id}>
                    <td>{task}</td>
                    <td>{minutesAmount}</td>
                    <td>
                      {formatDistanceToNow(startDate, {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </td>
                    <td>
                      <CycleStatus
                        status={getStatus({
                          finishedDate,
                          interruptedDate,
                        })}
                      />
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        ) : (
          <p>Nenhuma tarefa na lista.</p>
        )}
      </HistoryList>
    </HistoryContainer>
  )
}

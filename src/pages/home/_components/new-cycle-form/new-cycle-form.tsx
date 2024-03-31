import { useContext } from 'react'

import { useFormContext } from 'react-hook-form'

import {
  FormContainer,
  InputWraper,
  MinutesAmountInput,
  TaskInput,
} from './styles'
import { CyclesContext } from '../../../../contexts'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <InputWraper>
        <label htmlFor="task">Tarefa:</label>
        <TaskInput
          id="task"
          type="text"
          placeholder="Digite o nome da tarefa"
          list="task-suggestions"
          minLength={3}
          disabled={!!activeCycle}
          {...register('task')}
        />
      </InputWraper>
      <InputWraper>
        <label htmlFor="minutesAmount">Tempo:</label>
        <MinutesAmountInput
          id="minutesAmount"
          type="number"
          placeholder="5"
          min={5}
          max={60}
          step={5}
          disabled={!!activeCycle}
          {...register('minutesAmount', { valueAsNumber: true })}
        />
        <span>minutos</span>
      </InputWraper>
    </FormContainer>
  )
}

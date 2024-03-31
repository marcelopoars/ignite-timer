import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme['gray-100']};
  }
`

export const HeaderHistory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CleanHistoryButton = styled.button`
  padding: 0.25rem 0.5rem;

  appearance: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  font-size: 0.875rem;
  color: ${({ theme }) => theme['gray-100']};
  background-color: ${({ theme }) => theme['red-500']};

  display: flex;
  align-items: center;
  gap: 0.25rem;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme['red-700']};
  }
`

export const HistoryList = styled.div`
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    min-width: 600px;

    border-collapse: collapse;
    border-radius: 20px 20px 0 0;
    overflow: hidden;

    th {
      padding: 1rem;
      background-color: ${({ theme }) => theme['gray-600']};

      color: ${({ theme }) => theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;
      text-align: left;
    }

    td {
      padding: 1rem;

      background-color: ${({ theme }) => theme['gray-700']};
      border-top: 4px solid ${({ theme }) => theme['gray-800']};

      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
      }
    }
  }

  p {
    margin-top: 3rem;
    text-align: center;
  }
`

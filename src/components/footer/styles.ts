import styled from 'styled-components'

export const FooterContainer = styled.footer`
  padding: 1rem 1.5rem;

  font-size: 0.875rem;
  text-align: center;
  color: var(--gray-300);

  p + p {
    margin-top: 0.5rem;
  }

  a {
    display: inline-block;
    color: ${({ theme }) => theme['green-500']};
    font-weight: 700;
    text-decoration: none;
    transition: color 0.2s;
  }

  a:hover {
    color: ${({ theme }) => theme['green-700']};
  }

  ul {
    padding-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    list-style: none;
  }

  @media (min-width: 768px) {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem 2rem;
  }
`

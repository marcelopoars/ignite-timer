import { GithubLogo, GoogleChromeLogo, LinkedinLogo } from 'phosphor-react'

import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <div>
        <p>
          <strong>Ignite | Rocketseat:</strong> Trilha ReactJs
        </p>

        <p>
          Desenvolvido por{' '}
          <a
            href="https://www.marcelopereira.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            Marcelo Pereira
          </a>
          .
        </p>
      </div>

      <aside>
        <ul>
          <li>
            <a
              href="https://github.com/marcelopoars/ignite-timer"
              target="_blank"
              rel="noopener noreferrer"
              title="Ir para o repositório Github deste projeto"
            >
              <GithubLogo size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/marcelopoars"
              target="_blank"
              rel="noopener noreferrer"
              title="Ir para o perfil Linkedin de Marcelo Pereira"
            >
              <LinkedinLogo size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://www.marcelopereira.dev"
              target="_blank"
              rel="noopener noreferrer"
              title="Ir para o website de Marcelo Pereira"
            >
              <GoogleChromeLogo size={24} />
            </a>
          </li>
        </ul>
      </aside>
    </FooterContainer>
  )
}

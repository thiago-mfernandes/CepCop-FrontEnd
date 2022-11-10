import { Card, Container } from './styles'

import Logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'

export function Usuarios() {
  return (
    <main>
      <Container>
        <img src={Logo} alt="" />
        <Card>
          <h3>Novo Usuário</h3>
          <button>
            <NavLink to="/user/cadastro">Fazer Cadastro</NavLink>
          </button>
          <hr />
          <h3>Já possuo cadastro:</h3>
          <button>
            <NavLink to="/user/login">Ver Agendamento</NavLink>
          </button>
        </Card>
      </Container>
    </main>
  )
}

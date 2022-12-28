import Perfil from '../../images/perfil.svg'
import Sacola from '../../images/sacola.svg'
import styled from 'styled-components'

const icones = [Perfil, Sacola]

const Icones = styled.ul`
  display: flex;
  cursor: pointer;
`

const Icone = styled.li`
  margin-right: 15px;
`

function IconesHeader() {
  return (
    <Icones>
      {
        icones.map((icone) => (
          <Icone><img src={icone} alt="" /></Icone>
        ))
      }
    </Icones>
  )
}

export default IconesHeader
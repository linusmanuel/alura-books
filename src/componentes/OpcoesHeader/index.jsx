import styled from 'styled-components'

const textOpcoes = ['Categorias', 'Minha Estande', 'Favoritos']

const Opcoes = styled.ul`
  display: flex;
`
const Opcao = styled.li`
  min-width: 120px;
  text-align: center;
  display: flex;
  text-align: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
  text-transform: uppercase;
`

function OpcoesHeader() {
  return (
    <Opcoes>
        {
          textOpcoes.map( (texto) => (
            <Opcao>{texto}</Opcao>
          ))
         }
    </Opcoes>
  )
}

export default OpcoesHeader
import styled from "styled-components"
import CardRecomenda from "../CardRecomenda"
import Livros from "../Livros"
import imageLivro from '../../images/livro2.png'
import { Titulo } from "../Titulo"

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo 
      cor="#eb9b00"
      tamanhoFonte="36px"
    >
      ÚLTIMOS LANÇAMENTOS
    </Titulo>
      <NovosLivrosContainer>
        <Livros />
      </NovosLivrosContainer>
    <CardRecomenda 
      titulo="Talvez você se interesse..."
      subtitulo="Angular 11"
      descricao="Construindo uma aplicação com a plataforma Google"
      img={imageLivro}
    />
      
    </UltimosLancamentosContainer>
  )
}

export default UltimosLancamentos
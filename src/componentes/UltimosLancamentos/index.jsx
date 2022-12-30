import { livros } from "../Livros/dadosUltimosLancamentos"
import styled from "styled-components"
import Livros from "../Livros"

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`

const Titulo = styled.h2`
  width: 100%;
  padding: 30px 0;
  background-color: #fff;
  color: #eb9b00;
  font-size: 36px;
  text-align: center;
  margin: 0;
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
      <Titulo>ULTIMOS LANCAMENTOS</Titulo>
      <NovosLivrosContainer>
        <Livros />
      </NovosLivrosContainer>
    </UltimosLancamentosContainer>
  )
}

export default UltimosLancamentos
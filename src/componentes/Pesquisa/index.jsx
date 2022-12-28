import Input from "../Input"
import styled from "styled-components"

const PesquisaContainer = styled.section`
  max-width: 940px;
  margin-inline: auto;
  text-align: center;
  padding-block: 100px;
  color: #fff;
`
const Title = styled.h1`
  color: currentColor;
  font-size: 36px;
`

const Subtitle = styled.h2`
  color: currentColor;
  font-size: 16px;
  margin-bottom: 40px;
`

function Pesquisa() {
  return (
    <PesquisaContainer>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estande</Subtitle>
      <Input 
        placeholder="Escreva sua próxima leitura"
      />
    </PesquisaContainer>
  )
}

export default Pesquisa
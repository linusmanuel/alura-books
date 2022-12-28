import Input from "../Input"
import { Livros } from './dadosPesquisa'
import styled from "styled-components"
import { useState } from "react"

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
  const [livrosPesquisados, setLivrosPesquisados] = useState([])
  console.log(livrosPesquisados)

  return (
    <PesquisaContainer>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estande</Subtitle>
      <Input 
        placeholder="Escreva sua próxima leitura"
        onBlur={evento => {
          const textoDigitado = evento.target.value
          const resultadoPesquisa = Livros.filter(livro => livro.nome.includes(textoDigitado))
          setLivrosPesquisados(resultadoPesquisa)
        }}
      />
    </PesquisaContainer>
  )
}

export default Pesquisa
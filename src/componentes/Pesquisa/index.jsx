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
const Resultado = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  padding-block: 40px;
  cursor: pointer;
  transition: .2s;

  &:hover {
    transform: scale(1.05);
    border-bottom: dotted 1px #fff;
    
  }
`
function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([])

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

      {
        livrosPesquisados.map(livro => (
          <Resultado>
            <img src={livro.src} alt="" />
            <p>{livro.nome}</p>
          </Resultado>
        ))
      }
    </PesquisaContainer>
  )
}

export default Pesquisa
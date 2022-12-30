import { livros } from "./dadosUltimosLancamentos"

function Livros() {
  return (
      livros.map(livro => (
        <img src={livro.src} alt="" />
      ))
  )
}

export default Livros
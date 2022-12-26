import './style.css'
const textOpcoes = ['Categorias', 'Minha Estande', 'Favoritos']

function OpcoesHeader() {
  return (
    <ul className="opcoes">
        {
          textOpcoes.map( (texto) => (
            <li className='opcao'>{texto}</li>
          ))
         }
    </ul>
  )
}

export default OpcoesHeader
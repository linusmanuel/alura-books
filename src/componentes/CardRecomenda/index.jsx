import { Titulo } from "../Titulo"


function CardRecomenda({titulo="Card Title", subtitulo="Subtitle", descricao="Lorem Ipsum", img}) {
  return (
    <>
      <Titulo alinhamento="left">{titulo}</Titulo>
      <h4>{subtitulo}</h4>
      <p>{descricao}</p>
      <img src={img} alt=""/>
      <button>Saiba mais</button>
    </>
  )
}

export default CardRecomenda
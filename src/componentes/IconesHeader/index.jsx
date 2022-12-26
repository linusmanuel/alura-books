import './style.css'
import Perfil from '../../images/perfil.svg'
import Sacola from '../../images/sacola.svg'

const icones = [Perfil, Sacola]

function IconesHeader() {
  return (
    <ul className='icones'>
      {
        icones.map( (icone) => (
          <li className='icone'><img src={icone} alt="" /></li>
        ))
      }
    </ul>
  )
}

export default IconesHeader
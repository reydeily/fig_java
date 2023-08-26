import * as S from "./styles"
import perfil from "../../assets/image 4.png"
import image from "../../assets/Design_sem_nome-removebg-preview.png"
import zap from "../../assets/wats.png"

export function Header() {
    return (
      <S.Header>
        <picture>
         <img src={image} alt="img" />
        </picture>
        <h1>SUNLAR</h1>
        <S.NavBar>
        <ul>
        <picture>
         <img src={perfil} alt="perfil" />
        </picture>
          <li>
          <a href="entrar">ENTRAR/REGISTRAR</a>
          </li>
          <picture>
           <img src={zap} alt="zap" />
          </picture>
          <li>
          <a href="contato">Entrar em contato</a>
          </li>
        </ul>
        </S.NavBar>

      </S.Header>
    )
  }
